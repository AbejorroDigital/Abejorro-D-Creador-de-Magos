import { useState, useEffect } from 'react';
import { generateWizard, wizardFeaturesByLevel, wizardSpellsByLevel, wizardSpellSlots, wizardCantripsKnown, wizardSubclasses } from './data';
import { Printer, RefreshCw, Download } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

export default function App() {
  const [char, setChar] = useState<any>(null);

  useEffect(() => {
    setChar(generateWizard());
  }, []);

  if (!char) return <div className="min-h-screen bg-slate-950 text-slate-200 flex items-center justify-center">Cargando...</div>;

  const updateChar = (field: string, value: any) => {
    setChar((prev: any) => ({ ...prev, [field]: value }));
  };

  const updateArray = (field: string, index: number, value: string) => {
    setChar((prev: any) => {
      const newArray = [...prev[field]];
      newArray[index] = value;
      return { ...prev, [field]: newArray };
    });
  };

  const updateSpell = (level: number, index: number, value: string) => {
    setChar((prev: any) => {
      const newSpells = { ...prev.spells };
      newSpells[level] = [...newSpells[level]];
      newSpells[level][index] = value;
      return { ...prev, spells: newSpells };
    });
  };

  const addSpell = (level: number) => {
    setChar((prev: any) => {
      const newSpells = { ...prev.spells };
      newSpells[level] = [...(newSpells[level] || []), ""];
      return { ...prev, spells: newSpells };
    });
  };

  const removeSpell = (level: number, index: number) => {
    setChar((prev: any) => {
      const newSpells = { ...prev.spells };
      const spellToRemove = newSpells[level][index];
      newSpells[level] = newSpells[level].filter((_: any, i: number) => i !== index);
      
      const newPrepared = prev.preparedSpells.filter((s: string) => s !== spellToRemove);
      
      return { ...prev, spells: newSpells, preparedSpells: newPrepared };
    });
  };

  const handleLevelChange = (e: any) => {
    let newLevel = parseInt(e.target.value) || 1;
    if (newLevel < 1) newLevel = 1;
    if (newLevel > 20) newLevel = 20;

    setChar((prev: any) => {
      const pb = Math.ceil(newLevel / 4) + 1;
      const conMod = Math.floor((prev.con - 10) / 2);
      const intMod = Math.floor((prev.int - 10) / 2);
      const dexMod = Math.floor((prev.dex - 10) / 2);
      
      let hpPerLevel = 4 + conMod;
      if (prev.originFeat.includes("Resistente")) hpPerLevel += 2;
      
      const baseHp = 6 + conMod + (prev.originFeat.includes("Resistente") ? 2 : 0);
      const newHp = baseHp + (newLevel - 1) * hpPerLevel;

      const newSpellSaveDC = 8 + pb + intMod;
      const newSpellAttack = pb + intMod;
      const newInitiative = dexMod + (prev.originFeat.includes("Alerta") ? pb : 0);

      let newFeatures: string[] = [];
      for (let i = 1; i <= newLevel; i++) {
        if (wizardFeaturesByLevel[i]) {
          newFeatures = [...newFeatures, ...wizardFeaturesByLevel[i]];
        }
      }

      return {
        ...prev,
        level: newLevel,
        pb,
        hp: newHp,
        spellSaveDC: newSpellSaveDC,
        spellAttack: newSpellAttack,
        initiative: newInitiative,
        classFeatures: newFeatures
      };
    });
  };

  const updateStat = (stat: string, value: number) => {
    setChar((prev: any) => {
      const updated = { ...prev, [stat]: value };
      
      const conMod = Math.floor((updated.con - 10) / 2);
      const intMod = Math.floor((updated.int - 10) / 2);
      const dexMod = Math.floor((updated.dex - 10) / 2);
      const pb = updated.pb;

      updated.ac = 10 + dexMod;
      updated.initiative = dexMod + (updated.originFeat.includes("Alerta") ? pb : 0);
      
      let hpPerLevel = 4 + conMod;
      if (updated.originFeat.includes("Resistente")) hpPerLevel += 2;
      updated.hp = (6 + conMod + (updated.originFeat.includes("Resistente") ? 2 : 0)) + (updated.level - 1) * hpPerLevel;

      updated.spellSaveDC = 8 + pb + intMod;
      updated.spellAttack = pb + intMod;

      return updated;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    const element = document.getElementById('character-sheet');
    if (!element) return;
    
    const opt = {
      margin:       10,
      filename:     `${char.name || 'Mago'}_Ficha.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  const handleGenerate = () => {
    setChar(generateWizard());
  };

  const calcMod = (score: number) => Math.floor((score - 10) / 2);

  const getPreparedSpellsCount = (level: number) => {
    // 2024 PHB Wizard Prepared Spells table
    const table = [0, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16, 16, 17, 17, 18, 18, 19, 20, 21, 22];
    return table[level] || 4;
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 p-4 md:p-8 font-serif">
      {/* Header */}
      <header className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b border-stone-300 no-print">
        <h1 className="text-3xl font-bold text-red-800 mb-4 md:mb-0 flex items-center gap-2">
          <span className="text-4xl">🐝</span> Abejorro-D: Creador de Magos
        </h1>
        <div className="flex gap-4">
          <button 
            onClick={handleGenerate}
            className="flex items-center gap-2 px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg transition-colors cursor-pointer border border-stone-300"
          >
            <RefreshCw size={18} /> Generar Nuevo
          </button>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded-lg transition-colors cursor-pointer border border-stone-300"
          >
            <Printer size={18} /> Imprimir
          </button>
          <button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-red-800 hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer"
          >
            <Download size={18} /> Descargar PDF
          </button>
        </div>
      </header>

      {/* Character Sheet */}
      <main id="character-sheet" className="max-w-5xl mx-auto bg-white shadow-xl rounded-sm p-6 md:p-10 border border-stone-300">
        
        {/* Top Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8 pb-6 border-b-2 border-red-800">
          <div className="col-span-1 md:col-span-4">
            <label className="text-xs text-stone-500 uppercase tracking-wider font-bold">Nombre del Personaje</label>
            <input 
              type="text" 
              value={char.name} 
              onChange={(e) => updateChar('name', e.target.value)}
              className="w-full bg-transparent text-3xl font-bold border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 outline-none pb-1"
            />
          </div>
          
          <div>
            <label className="text-xs text-stone-500 uppercase tracking-wider font-bold">Clase y Nivel</label>
            <div className="flex gap-2">
              <input type="text" value={char.class} onChange={(e) => updateChar('class', e.target.value)} className="w-2/3 bg-transparent font-semibold border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 outline-none" />
              <input type="number" value={char.level} onChange={handleLevelChange} min="1" max="20" className="w-1/3 bg-transparent font-semibold border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 outline-none text-red-800" />
            </div>
          </div>

          <div>
            <label className="text-xs text-stone-500 uppercase tracking-wider font-bold">Subclase</label>
            {char.level >= 3 ? (
              <select 
                value={char.subclass} 
                onChange={(e) => updateChar('subclass', e.target.value)}
                className="w-full bg-transparent font-semibold border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 outline-none text-stone-900"
              >
                <option value="">Selecciona Subclase...</option>
                {wizardSubclasses.map(sub => <option key={sub} value={sub}>{sub}</option>)}
              </select>
            ) : (
              <div className="w-full text-stone-400 font-semibold border-b border-dashed border-stone-300 pb-[1px] text-sm mt-1">
                Disponible a nivel 3
              </div>
            )}
          </div>
          
          <div>
            <label className="text-xs text-stone-500 uppercase tracking-wider font-bold">Raza</label>
            <input type="text" value={char.race} onChange={(e) => updateChar('race', e.target.value)} className="w-full bg-transparent font-semibold border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 outline-none" />
          </div>
          
          <div>
            <label className="text-xs text-stone-500 uppercase tracking-wider font-bold">Trasfondo</label>
            <input type="text" value={char.background} onChange={(e) => updateChar('background', e.target.value)} className="w-full bg-transparent font-semibold border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 outline-none" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Stats & Combat */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Ability Scores */}
            <div className="grid grid-cols-2 gap-4">
              {['str', 'dex', 'con', 'int', 'wis', 'cha'].map((stat) => (
                <div key={stat} className="flex flex-col items-center p-3 bg-white rounded-lg border-2 border-stone-300 font-mono relative">
                  <span className="text-stone-500 text-xs uppercase font-bold tracking-wider mb-1">{stat}</span>
                  <input 
                    type="number" 
                    value={char[stat]} 
                    onChange={(e) => updateStat(stat, parseInt(e.target.value) || 0)}
                    className="bg-transparent text-2xl text-stone-900 font-bold text-center w-full outline-none"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white border border-stone-300 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-sm">
                    {calcMod(char[stat]) >= 0 ? `+${calcMod(char[stat])}` : calcMod(char[stat])}
                  </div>
                </div>
              ))}
            </div>

            {/* Combat Stats */}
            <div className="bg-white p-4 rounded-lg border-2 border-stone-300 font-mono mt-6">
              <h3 className="text-red-800 font-bold mb-4 uppercase tracking-wider text-sm flex justify-between">
                <span>Estadísticas de Combate</span>
                <span className="text-stone-500 text-xs">PB: +{char.pb}</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-stone-50 rounded border border-stone-200">
                  <div className="text-xs text-stone-500 font-bold">CA</div>
                  <input type="number" value={char.ac} onChange={(e) => updateChar('ac', parseInt(e.target.value))} className="w-full bg-transparent text-xl text-stone-900 font-bold text-center outline-none" />
                </div>
                <div className="text-center p-2 bg-stone-50 rounded border border-stone-200">
                  <div className="text-xs text-stone-500 font-bold">PG Máximos</div>
                  <input type="number" value={char.hp} onChange={(e) => updateChar('hp', parseInt(e.target.value))} className="w-full bg-transparent text-xl text-red-700 font-bold text-center outline-none" />
                </div>
                <div className="text-center p-2 bg-stone-50 rounded border border-stone-200">
                  <div className="text-xs text-stone-500 font-bold">Iniciativa</div>
                  <input type="number" value={char.initiative} onChange={(e) => updateChar('initiative', parseInt(e.target.value))} className="w-full bg-transparent text-xl text-stone-900 font-bold text-center outline-none" />
                </div>
                <div className="text-center p-2 bg-stone-50 rounded border border-stone-200">
                  <div className="text-xs text-stone-500 font-bold">Velocidad (pies)</div>
                  <input type="number" value={char.speed} onChange={(e) => updateChar('speed', parseInt(e.target.value))} className="w-full bg-transparent text-xl text-stone-900 font-bold text-center outline-none" />
                </div>
              </div>
            </div>

            {/* Magic Stats */}
            <div className="bg-white p-4 rounded-lg border-2 border-stone-300 font-mono">
              <h3 className="text-red-800 font-bold mb-4 uppercase tracking-wider text-sm">Lanzamiento de Conjuros</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-2 bg-stone-50 rounded border border-stone-200">
                  <div className="text-xs text-stone-500 font-bold">CD Salvación</div>
                  <input type="number" value={char.spellSaveDC} onChange={(e) => updateChar('spellSaveDC', parseInt(e.target.value))} className="w-full bg-transparent text-xl text-red-800 font-bold text-center outline-none" />
                </div>
                <div className="text-center p-2 bg-stone-50 rounded border border-stone-200">
                  <div className="text-xs text-stone-500 font-bold">Ataque de Conjuro</div>
                  <input type="number" value={char.spellAttack} onChange={(e) => updateChar('spellAttack', parseInt(e.target.value))} className="w-full bg-transparent text-xl text-red-800 font-bold text-center outline-none" />
                </div>
              </div>
            </div>

          </div>

          {/* Middle Column: Skills & Features */}
          <div className="lg:col-span-4 space-y-8">
            
            <div>
              <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Habilidades (Competencias)</h3>
              <ul className="space-y-2">
                {char.skills.map((skill: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-800"></div>
                    <input 
                      type="text" 
                      value={skill} 
                      onChange={(e) => updateArray('skills', i, e.target.value)}
                      className="w-full bg-transparent outline-none border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 pb-1 text-sm"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Dote de Origen</h3>
              <textarea 
                value={char.originFeat} 
                onChange={(e) => updateChar('originFeat', e.target.value)}
                className="w-full bg-transparent outline-none resize-none h-20 border border-stone-200 p-2 rounded text-sm focus:border-red-700"
              />
            </div>

            <div>
              <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Rasgos de Clase</h3>
              <ul className="space-y-2">
                {char.classFeatures?.map((feature: string, i: number) => (
                  <li key={i}>
                    <textarea 
                      value={feature} 
                      onChange={(e) => updateArray('classFeatures', i, e.target.value)}
                      className="w-full bg-transparent outline-none resize-none h-16 border border-stone-200 p-2 rounded text-sm focus:border-red-700"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Rasgos de Raza</h3>
              <ul className="space-y-2">
                {char.traits.map((trait: string, i: number) => (
                  <li key={i}>
                    <textarea 
                      value={trait} 
                      onChange={(e) => updateArray('traits', i, e.target.value)}
                      className="w-full bg-transparent outline-none resize-none h-16 border border-stone-200 p-2 rounded text-sm focus:border-red-700"
                    />
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Column: Magic & Personality */}
          <div className="lg:col-span-4 space-y-8">
            
            <div>
              <div className="flex flex-col mb-4">
                <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 text-red-800 uppercase tracking-wider w-full flex justify-between items-end">
                  <span>Magia</span>
                  <span className="text-sm font-normal text-stone-600">
                    Preparados: {char.preparedSpells.length} / {getPreparedSpellsCount(char.level)}
                  </span>
                </h3>
                <div className="flex justify-between text-xs text-stone-500 mt-1 font-bold">
                  <span>Libro de Conjuros: {Object.entries(char.spells).filter(([lvl]) => Number(lvl) > 0).flatMap(([, s]) => s as string[]).length} / Mínimo {6 + (char.level - 1) * 2}</span>
                </div>
              </div>
                
              {[...Array(Math.min(9, Math.ceil(char.level / 2)) + 1)].map((_, level) => (
                <div key={level} className="mb-6">
                  <h4 className="text-sm font-bold text-stone-700 mb-2 uppercase border-b border-stone-200 pb-1 flex justify-between">
                    <span>{level === 0 ? "Trucos (Cantrips)" : `Conjuros de Nivel ${level}`}</span>
                    <span className="text-xs font-normal text-stone-500">
                      {level === 0 
                        ? `Conocidos: ${char.spells[0]?.length || 0} / ${wizardCantripsKnown[char.level] || 3}`
                        : `Espacios: ${wizardSpellSlots[char.level]?.[level - 1] || 0}`
                      }
                    </span>
                  </h4>
                  <ul className="space-y-1">
                    {char.spells[level]?.map((spell: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 group">
                        {level > 0 && (
                          <input 
                            type="checkbox" 
                            checked={char.preparedSpells.includes(spell)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                updateChar('preparedSpells', [...char.preparedSpells, spell]);
                              } else {
                                updateChar('preparedSpells', char.preparedSpells.filter((s: string) => s !== spell));
                              }
                            }}
                            className="accent-red-700 w-4 h-4"
                            title="Preparado"
                          />
                        )}
                        <input 
                          type="text" 
                          value={spell} 
                          onChange={(e) => updateSpell(level, i, e.target.value)} 
                          list={`spells-level-${level}`}
                          className="w-full bg-transparent outline-none text-sm border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 pb-1" 
                          placeholder="Nombre del conjuro..."
                        />
                        <button onClick={() => removeSpell(level, i)} className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity no-print" title="Eliminar">×</button>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => addSpell(level)} className="text-xs text-red-700 hover:text-red-600 mt-2 no-print flex items-center gap-1 font-bold">
                    + Añadir Conjuro
                  </button>
                  <datalist id={`spells-level-${level}`}>
                    {wizardSpellsByLevel[level]?.map(s => <option key={s} value={s} />)}
                  </datalist>
                </div>
              ))}
              <p className="text-xs text-stone-500 mt-2 italic">* Checkbox indica hechizo preparado</p>
            </div>

            <div>
              <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Equipo Inicial</h3>
              <ul className="space-y-2 text-sm">
                {char.equipment.map((item: string, i: number) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-400"></div>
                    <input type="text" value={item} onChange={(e) => updateArray('equipment', i, e.target.value)} className="w-full bg-transparent outline-none border-b border-dashed border-stone-300 focus:border-solid focus:border-red-700 pb-1" />
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section: Personality & Backstory */}
        <div className="mt-8 pt-8 border-t-2 border-red-800 grid grid-cols-1 md:grid-cols-2 gap-8 print:break-inside-avoid">
          <div>
            <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Personalidad</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-stone-500 uppercase font-bold">Rasgo</label>
                <textarea value={char.personality} onChange={(e) => updateChar('personality', e.target.value)} className="w-full bg-transparent outline-none resize-none h-16 text-sm border border-stone-200 p-2 rounded focus:border-red-700" />
              </div>
              <div>
                <label className="text-xs text-stone-500 uppercase font-bold">Ideal</label>
                <textarea value={char.ideal} onChange={(e) => updateChar('ideal', e.target.value)} className="w-full bg-transparent outline-none resize-none h-16 text-sm border border-stone-200 p-2 rounded focus:border-red-700" />
              </div>
              <div>
                <label className="text-xs text-stone-500 uppercase font-bold">Vínculo</label>
                <textarea value={char.bond} onChange={(e) => updateChar('bond', e.target.value)} className="w-full bg-transparent outline-none resize-none h-16 text-sm border border-stone-200 p-2 rounded focus:border-red-700" />
              </div>
              <div>
                <label className="text-xs text-stone-500 uppercase font-bold">Defecto</label>
                <textarea value={char.flaw} onChange={(e) => updateChar('flaw', e.target.value)} className="w-full bg-transparent outline-none resize-none h-16 text-sm border border-stone-200 p-2 rounded focus:border-red-700" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold border-b-2 border-red-800 pb-1 mb-4 text-red-800 uppercase tracking-wider">Historia (Backstory)</h3>
            <textarea 
              value={char.backstory} 
              onChange={(e) => updateChar('backstory', e.target.value)}
              className="w-full bg-transparent outline-none resize-none h-full min-h-[300px] text-sm border border-stone-200 p-3 rounded leading-relaxed focus:border-red-700"
            />
          </div>
        </div>

      </main>
    </div>
  );
}
