/**
 * Lista de trasfondos disponibles para el personaje.
 * Cada trasfondo incluye bonificadores de características, habilidades, una dote inicial y equipo.
 */
export const backgrounds = [
  {
    name: "Erudito (Sage)",
    bonuses: { int: 2, con: 1 },
    skills: ["Arcanos", "Historia"],
    feat: "Iniciado Mágico: Mago (2 Trucos y 1 Hechizo de Mago)",
    equipment: ["Botella de tinta", "Pluma", "Libro de conocimientos", "Ropajes comunes", "10 po"]
  },
  {
    name: "Acólito (Acolyte)",
    bonuses: { int: 2, wis: 1 },
    skills: ["Religión", "Perspicacia"],
    feat: "Iniciado Mágico: Clérigo (2 Trucos y 1 Hechizo de Clérigo)",
    equipment: ["Símbolo sagrado", "Libro de oraciones", "5 barritas de incienso", "Vestimentas", "10 po"]
  },
  {
    name: "Escriba (Scribe)",
    bonuses: { int: 2, dex: 1 },
    skills: ["Investigación", "Percepción"],
    feat: "Hábil (Competencia en 3 habilidades o herramientas adicionales)",
    equipment: ["Estuche de pergaminos", "10 hojas de pergamino", "Botella de tinta", "Pluma", "10 po"]
  }
];

/**
 * Lista de Dotes de Origen (Origin Feats) disponibles en las reglas de 2024.
 */
export const originFeats = [
  "Alerta (+PB a Iniciativa, intercambiar iniciativa)",
  "Artesano (Competencia con 3 herramientas, descuento del 20% en equipo, creación rápida)",
  "Sanador (Usa kits de sanador para curar, repites 1s en dados de curación)",
  "Suerte (Puntos de Suerte iguales a tu PB para Ventaja/Desventaja)",
  "Iniciado Mágico: Clérigo (2 Trucos y 1 Hechizo de Clérigo)",
  "Iniciado Mágico: Druida (2 Trucos y 1 Hechizo de Druida)",
  "Iniciado Mágico: Mago (2 Trucos y 1 Hechizo de Mago)",
  "Músico (Competencia con 3 instrumentos, otorgas Inspiración Heroica a aliados)",
  "Atacante Salvaje (Tiras el daño de armas cuerpo a cuerpo dos veces y usas el mayor)",
  "Hábil (Competencia en 3 habilidades o herramientas adicionales)",
  "Peleador de Taberna (Daño desarmado mejorado, empujar al golpear con ataque desarmado)",
  "Resistente (+2 PG por nivel de personaje)"
];

/**
 * Diccionario de conjuros de mago organizados por nivel (0 al 9).
 * El nivel 0 corresponde a los Trucos (Cantrips).
 */
export const wizardSpellsByLevel: Record<number, string[]> = {
  0: ["Descarga de Fuego", "Rayo de Escarcha", "Ilusión Menor", "Mano de Mago", "Prestidigitación", "Luz", "Mensaje", "Agarre Electrizante", "Salpicadura Ácida", "Rociada Venenosa", "Impacto Certero", "Toque Helado", "Reparar", "Protección contra Armas", "Crear Hoguera", "Congelación", "Romper la Mente", "Atronar", "Rayo Relampagueante"],
  1: ["Proyectil Mágico", "Escudo", "Armadura de Mago", "Dormir", "Detectar Magia", "Identificar", "Caída de Pluma", "Manos Ardientes", "Hechizar Persona", "Comprensión Idiomática", "Grasa", "Rayo de Hechicería", "Falsa Vida", "Sirviente Invisible", "Alarma", "Encontrar Familiar", "Nube de Oscurecimiento", "Salto", "Zancada Prodigiosa", "Onda Truenosa", "Orbe Cromático", "Rayo de Enfermedad", "Disfrazarse", "Ilusión Silenciosa", "Texto Ilusorio", "Caída Suave"],
  2: ["Paso Brumoso", "Telaraña", "Invisibilidad", "Imagen Múltiple", "Contorno Borroso", "Levitar", "Oscuridad", "Detectar Pensamientos", "Agrandar/Reducir", "Arma Mágica", "Esfera Flamígera", "Rayo Abrasador", "Estallar", "Sugestión", "Ver lo Invisible", "Cerradura Arcana", "Llama Continua", "Corona de Locura", "Alterar el Propio Aspecto", "Trepar por las Paredes", "Ceguera/Sordera", "Ráfaga de Viento", "Flecha Ácida de Melf", "Fuerza Fantasmal", "Truco de la Cuerda", "Boca Mágica", "Aura Mágica de Nystul", "Reposo Apacible", "Desbloquear"],
  3: ["Bola de Fuego", "Contrahechizo", "Disipar Magia", "Acelerar", "Volar", "Patrón Hipnótico", "Relámpago", "Toque Vampírico", "Animar a los Muertos", "Círculo Mágico", "Clarividencia", "Don de Lenguas", "Forma Gaseosa", "Imagen Mayor", "Miedo", "Nube Apestosa", "Protección contra Energía", "Respiración Acuática", "Recado", "Corcel Fantasmal", "Parpadear", "Lentitud", "Maldición", "Tormenta de Aguanieve", "Muro de Agua", "Muro de Arena", "Pequeña Choza de Leomund", "Montura Fantasmal"],
  4: ["Polimorfar", "Puerta Dimensional", "Muro de Fuego", "Tentáculos Negros de Evard", "Asesino Fantasmal", "Ojo Arcano", "Terreno Alucinatorio", "Confusión", "Destierro", "Escudo de Fuego", "Esfera Resiliente de Otiluke", "Piel Pétrea", "Tormenta de Hielo", "Invisibilidad Mayor", "Localizar Criatura", "Fabricar", "Cofre Secreto de Leomund", "Mastín Fiel de Mordenkainen", "Ojo Indiscreto", "Controlar el Agua", "Marchitar"],
  5: ["Cono de Frío", "Muro de Fuerza", "Animar Objetos", "Dominar Persona", "Modificar Memoria", "Telequinesis", "Contactar con Otro Plano", "Creación", "Geas", "Ligadura Planar", "Mano de Bigby", "Nube Aniquiladora", "Pasamiento", "Sueño", "Vínculo Telepático de Rary", "Apariencia Falsa", "Círculo de Teletransportación", "Muro de Piedra", "Conocimiento Legendario", "Santuario Privado de Mordenkainen", "Engañar"],
  6: ["Cadena de Relámpagos", "Desintegrar", "Globo de Invulnerabilidad", "Sugestión en Masa", "Muro de Hielo", "Bailar Irresistible de Otto", "Contingencia", "Crear Muerto Viviente", "De la Carne a la Piedra", "Ilusión Programada", "Invocación Instantánea de Drawmij", "Mirada Mordaz", "Mover Tierra", "Puerta", "Visión Verdadera", "Círculo de Muerte", "Esfera Congelante de Otiluke", "Guardas y Custodias", "Rayo Solar", "Transformación de Tenser"],
  7: ["Teletransportar", "Dedo de la Muerte", "Mansión Magnífica de Mordenkainen", "Jaula de Fuerza", "Bola de Fuego de Explosión Retardada", "Corona de Estrellas", "Desplazamiento de Plano", "Espejismo Arcano", "Invertir Gravedad", "Palabra de Poder: Dolor", "Proyectar Imagen", "Símbolo", "Simulacro", "Secuestrar", "Espada de Mordenkainen", "Rayo Prismático", "Etereidad"],
  8: ["Clon", "Laberinto", "Mente en Blanco", "Palabra de Poder: Aturdir", "Nube Incendiaria", "Antipatía/Simpatía", "Campo Antimagia", "Controlar el Clima", "Dominar Monstruo", "Explosión Solar", "Semiplano", "Telepatía", "Estallido Telepático", "Mente Débil"],
  9: ["Deseo", "Palabra de Poder: Matar", "Enjambre de Meteoritos", "Detener el Tiempo", "Polimorfar Verdadero", "Presagio", "Prisión", "Proyección Astral", "Cambio de Forma", "Muro Prismático", "Puerta", "Invulnerabilidad", "Metamorfosis Verdadera"]
};

/**
 * Progresión de espacios de conjuro (Spell Slots) por nivel de Mago.
 * La clave es el nivel del personaje, el valor es un arreglo con los espacios disponibles por nivel de conjuro (1 al 9).
 */
export const wizardSpellSlots: Record<number, number[]> = {
  // Nivel de Mago: [Espacios Nivel 1, Nivel 2, ..., Nivel 9]
  1: [2, 0, 0, 0, 0, 0, 0, 0, 0],
  2: [3, 0, 0, 0, 0, 0, 0, 0, 0],
  3: [4, 2, 0, 0, 0, 0, 0, 0, 0],
  4: [4, 3, 0, 0, 0, 0, 0, 0, 0],
  5: [4, 3, 2, 0, 0, 0, 0, 0, 0],
  6: [4, 3, 3, 0, 0, 0, 0, 0, 0],
  7: [4, 3, 3, 1, 0, 0, 0, 0, 0],
  8: [4, 3, 3, 2, 0, 0, 0, 0, 0],
  9: [4, 3, 3, 3, 1, 0, 0, 0, 0],
  10: [4, 3, 3, 3, 2, 0, 0, 0, 0],
  11: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  12: [4, 3, 3, 3, 2, 1, 0, 0, 0],
  13: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  14: [4, 3, 3, 3, 2, 1, 1, 0, 0],
  15: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  16: [4, 3, 3, 3, 2, 1, 1, 1, 0],
  17: [4, 3, 3, 3, 2, 1, 1, 1, 1],
  18: [4, 3, 3, 3, 3, 1, 1, 1, 1],
  19: [4, 3, 3, 3, 3, 2, 1, 1, 1],
  20: [4, 3, 3, 3, 3, 2, 2, 1, 1],
};

/**
 * Cantidad de Trucos (Cantrips) conocidos por nivel de Mago.
 */
export const wizardCantripsKnown: Record<number, number> = {
  1: 3, 2: 3, 3: 3,
  4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4,
  10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5
};

/**
 * Lista de rasgos de personalidad aleatorios para la generación del personaje.
 */
export const personalityTraits = [
  "Uso palabras polisilábicas para dar la impresión de gran erudición.",
  "He leído todos los libros de la biblioteca más grande de mi ciudad natal.",
  "Estoy dispuesto a escuchar a cualquiera, sin importar cuán extrañas sean sus ideas.",
  "Soy terriblemente torpe en situaciones sociales.",
  "Siempre llevo un libro abierto mientras camino, ignorando mi entorno.",
  "Hablo con mi familiar (o con objetos inanimados) como si fueran colegas académicos.",
  "Me fascina la magia cotidiana tanto como los grandes conjuros destructivos.",
  "Corrijo constantemente la gramática y pronunciación de mis compañeros.",
  "Anoto todo lo que veo en un pequeño diario que nunca dejo que nadie lea.",
  "Me muestro escéptico ante cualquier afirmación que no esté respaldada por evidencia empírica.",
  "Suelo murmurar encantamientos a medias cuando estoy concentrado o nervioso.",
  "Valoro un buen debate intelectual por encima de cualquier recompensa material."
];

export const ideals = [
  "Conocimiento. El camino hacia el poder y la mejora de uno mismo es a través del conocimiento. (Neutral)",
  "Belleza. Lo que es hermoso nos señala más allá de nosotros mismos hacia lo verdadero. (Bueno)",
  "Lógica. Las emociones no deben nublar nuestro pensamiento lógico. (Leal)",
  "Poder. El conocimiento es el camino hacia el poder y la dominación. (Malvado)",
  "Descubrimiento. Desenterrar los secretos perdidos del multiverso es mi mayor propósito. (Caótico)",
  "Enseñanza. El conocimiento no sirve de nada si no se comparte con las futuras generaciones. (Bueno)",
  "Preservación. Los artefactos y tomos antiguos deben ser protegidos a toda costa. (Leal)",
  "Progreso. Debemos usar la magia para mejorar la vida de todos, sin importar las tradiciones. (Caótico)",
  "Equilibrio. La magia es peligrosa; debe estudiarse para mantener el orden natural. (Neutral)",
  "Ambición. Seré el mago más grande que haya existido, cueste lo que cueste. (Cualquiera)",
  "Verdad. Las mentiras y los engaños son el mayor enemigo de la iluminación. (Leal)",
  "Libertad. El estudio de la magia debe estar libre de las restricciones de reyes y dioses. (Caótico)"
];

export const bonds = [
  "Tengo un texto antiguo que guarda un terrible secreto que no debe caer en malas manos.",
  "Trabajo para preservar una biblioteca, universidad, scriptorium o monasterio.",
  "El trabajo de mi vida es una serie de tomos relacionados con un campo específico del conocimiento.",
  "He estado buscando toda mi vida la respuesta a una pregunta en particular.",
  "Mi mentor desapareció en extrañas circunstancias y no descansaré hasta encontrarlo.",
  "Fui expulsado de mi academia mágica y busco limpiar mi nombre.",
  "Un espíritu o entidad mágica está ligado a mí y trato de comprender nuestra conexión.",
  "Robé un grimorio de un mago rival y ahora me persiguen sus secuaces.",
  "Todo lo que hago es para pagar la enorme deuda que contraje para financiar mis estudios.",
  "Descubrí una profecía que me involucra y debo prepararme para cuando se cumpla.",
  "Mi familia fue maldecida por un hechicero; estudio magia para romper ese maleficio.",
  "Siento una lealtad inquebrantable hacia mis compañeros de aventuras, son mi única familia."
];

export const flaws = [
  "Me distraigo fácilmente con la promesa de información.",
  "La mayoría de la gente gritaría y huiría al ver a un demonio. Yo me detengo a tomar notas sobre su anatomía.",
  "Desbloquear un misterio antiguo vale el precio de una civilización.",
  "Hablo sin pensar en las consecuencias, a menudo insultando a los demás.",
  "Guardo secretos incluso cuando compartirlos ayudaría a mis aliados.",
  "Subestimo a aquellos que no tienen talento para la magia o el intelecto.",
  "Mi sed de conocimiento a veces me lleva a ignorar los peligros evidentes.",
  "Soy cobarde en el combate cuerpo a cuerpo y siempre busco esconderme detrás de alguien.",
  "Me niego a admitir que me equivoco, incluso frente a pruebas irrefutables.",
  "Tengo una fobia irracional a la oscuridad o al silencio absoluto.",
  "Gasto todo mi dinero en libros y componentes mágicos, olvidando comprar comida o equipo básico.",
  "Creo que mis habilidades mágicas me hacen superior a las leyes de los mortales."
];

export const backstories = [
  "Pasé mi juventud encerrado en los polvorientos archivos de la Gran Biblioteca de Candelero, catalogando tomos olvidados por siglos. Mi vida era monótona hasta que, tras un muro falso, descubrí un grimorio encuadernado en escamas iridiscentes. Al abrirlo, las palabras no solo se leían, sino que resonaban en mi mente, despertando una chispa mágica latente. El tomo me mostró visiones de una calamidad inminente y de conocimientos que la academia prohíbe enseñar. Ahora, he abandonado la seguridad de los archivos, buscando dominar estas artes arcanas prohibidas para evitar el desastre que vi, aunque los eruditos de mi orden me consideren un hereje peligroso.",
  "Fui el aprendiz más prometedor del excéntrico archimago Vaelen, un hombre brillante pero obsesionado con los planos exteriores. Una noche, un experimento con un portal salió terriblemente mal; el laboratorio quedó envuelto en llamas arcanas y Vaelen desapareció sin dejar rastro, dejando atrás solo su diario encriptado y su bastón astillado. Las autoridades mágicas me culpan de su desaparición, obligándome a huir. Viajo por el mundo descifrando los crípticos mensajes de su diario, aprendiendo magia sobre la marcha y buscando la forma de reabrir el portal para rescatarlo, o al menos, limpiar mi nombre.",
  "Nacido en el seno de una noble familia de eruditos y diplomáticos, siempre se esperó que yo siguiera el camino de la política y la sutileza. Sin embargo, desde niño sentí una fascinación incontrolable por el poder bruto y destructivo de la magia de evocación. Mis experimentos secretos casi reducen a cenizas la finca familiar, lo que provocó mi exilio deshonroso. Ahora, despojado de mi título y riqueza, busco el poder práctico y abrumador en el mundo real. Quiero demostrar a mi familia que la verdadera autoridad no reside en las palabras o en la sangre, sino en la capacidad de moldear la realidad a través del fuego y el relámpago.",
  "Fui un escriba humilde y devoto en un monasterio aislado, dedicado a copiar textos sagrados. Mi fe era inquebrantable hasta que me asignaron la tarea de transcribir un pergamino hereje confiscado a un cultista. Al trazar las runas, la magia arcana fluyó a través de mi pluma, llenando mi mente de verdades cósmicas que contradecían las enseñanzas de mi orden. Fui descubierto practicando estos hechizos y excomulgado de inmediato, marcado como un paria. Ahora vago por el mundo, dividido entre la culpa de mi fe perdida y la embriagadora libertad de la magia arcana, buscando comprender la verdadera naturaleza del universo.",
  "Crecí en las implacables calles de la capital, sobreviviendo a base de robos rápidos y engaños. Un día, le robé una bolsa pesada a un anciano despistado, esperando encontrar oro, pero solo hallé un libro de conjuros pesado y complejo. Al intentar venderlo, el anciano me encontró. En lugar de entregarme a la guardia, vio cómo yo había logrado descifrar instintivamente un truco básico de sus páginas. Me tomó como su aprendiz, sacándome de la miseria. Tras su reciente y pacífica muerte, heredé su grimorio. Ahora aventuro para honrar su memoria y demostrar que un huérfano de la calle puede convertirse en el mago más grande de la era.",
  "Mi aldea natal era un lugar pacífico hasta que fue arrasada por una quimera enloquecida por magia salvaje. Vi cómo las espadas y las flechas de nuestra milicia rebotaban inútilmente contra la bestia. Sobreviví escondido bajo los escombros, sintiendo una impotencia que me carcome hasta el día de hoy. Juré sobre las cenizas de mi hogar que nunca volvería a ser débil. He dedicado cada hora de vigilia a desentrañar los secretos de la magia, estudiando con una intensidad febril. Mi objetivo no es solo la venganza, sino adquirir el poder absoluto para proteger a los inocentes y destruir cualquier amenaza sobrenatural que ose cruzar mi camino.",
  "Fui un soldado leal, un veterano de innumerables escaramuzas fronterizas. Creía en la fuerza del acero y la disciplina, hasta la Batalla del Valle Rojo. Allí presencié cómo un solo mago enemigo, con un simple gesto y unas palabras arcanas, diezmaba a todo mi batallón con una tormenta de fuego. Sobreviví de milagro, pero mi fe en el combate tradicional se hizo añicos. Deserté esa misma noche, robando un libro de tácticas arcanas del campamento enemigo. He cambiado mi espada por un bastón, dedicando mi vida a comprender y dominar ese poder abrumador, sabiendo que en el campo de batalla moderno, la magia es la única verdadera artillería.",
  "Provengo de un largo y orgulloso linaje de hechiceros innatos, seres que respiran magia como otros respiran aire. Sin embargo, yo nací 'vacío', sin una gota de magia en mi sangre, una vergüenza para mi familia. Desesperado por probar mi valía y no ser relegado al olvido, me sumergí en el estudio académico de la magia. Lo que a ellos les resulta natural, yo lo he tenido que forzar a través de complejas fórmulas matemáticas, memorización exhaustiva y pura fuerza de voluntad. He logrado doblegar la urdimbre mágica a mi intelecto, y ahora viajo para demostrar que la dedicación y el estudio pueden superar cualquier don de nacimiento.",
  "Durante una expedición arqueológica en unas ruinas pre-cataclísmicas, encontré un extraño artefacto: un orbe de cristal oscuro que latía con una luz interior. Desde el momento en que lo toqué, comenzó a susurrarme en sueños, enseñándome fórmulas arcanas olvidadas hace milenios y revelándome secretos sobre la estructura del multiverso. El artefacto me ha otorgado poder, pero a un precio: exige que lo lleve a su lugar de origen, un templo perdido en el otro extremo del continente. Me he convertido en un mago no por elección, sino por la influencia de esta reliquia, y temo lo que sucederá cuando finalmente cumpla su exigencia.",
  "Fui el bufón principal en la corte del Duque, ganándome la vida con malabares, chistes y trucos de prestidigitación baratos con pólvora y espejos. Un día, intentando impresionar a un embajador elfo, pronuncié unas palabras sin sentido que había escuchado de un mago callejero. Para mi horror, el truco salió demasiado bien: conjuré una esfera de fuego real que incendió las cortinas y casi mata al Duque. Tuve que huir del castillo en medio de la noche antes de ser ejecutado por brujería e intento de asesinato. Ahora, me veo obligado a aprender magia de verdad para sobrevivir como aventurero, huyendo constantemente de los cazarrecompensas del Duque.",
  "Trabajaba como cartógrafo para el Gremio de Exploradores, especializándome en delinear zonas de magia salvaje y anomalías arcanas. Años de exposición constante a estas energías inestables alteraron mi mente y mi percepción. Empecé a ver los hilos luminosos de la urdimbre mágica flotando en el aire. Con el tiempo, aprendí a tirar de esos hilos, manipulando la realidad a mi alrededor. Mi gremio me consideró inestable y me despidió. Ahora, viajo por el mundo no para hacer mapas, sino para estudiar las corrientes mágicas del mundo, buscando comprender la extraña mutación que me ha convertido en un conducto para las artes arcanas.",
  "Mi hermano gemelo era el prodigio mágico de la familia, destinado a convertirse en un archimago, mientras yo era solo su sombra, un simple ayudante de laboratorio. Una noche, un experimento de invocación salió mal y una entidad de las sombras lo consumió. Consumido por el dolor y la culpa por no haber podido salvarlo, tomé su libro de conjuros, sus túnicas y su identidad. He pasado años estudiando frenéticamente para imitar sus habilidades, engañando a nuestra familia y a la academia. Soy un fraude que vive la vida de un muerto, pero estoy decidido a dominar la magia para encontrar a la entidad que lo mató y destruirla.",
  "Acorralado por una manada de lobos invernales en las montañas, hice un trato desesperado con una entidad de otro plano para salvar mi vida. Esperaba convertirme en un brujo, atado a su voluntad, pero la entidad fue caprichosa. En lugar de poder directo, hizo aparecer un grueso grimorio en mis manos y una voz en mi cabeza dijo: 'Aprende o muere'. Los lobos se retiraron, pero la entidad me observa. Me he visto obligado a estudiar magia arcana con una urgencia aterradora, sabiendo que mi misterioso benefactor espera grandes cosas de mí, y que el fracaso en mis estudios probablemente resultará en la pérdida de mi alma.",
  "Fui un alquimista mediocre en el mejor de los casos. Mis pociones siempre se cuajaban, mis elixires sabían a barro y mis experimentos terminaban invariablemente en explosiones desastrosas que destruían mi laboratorio. Después de mi tercer desalojo, un mago investigador examinó los restos de mi taller. Me reveló que mis explosiones no eran producto de mala química, sino de una poderosa magia latente que se manifestaba de forma inestable a través de mis emociones. He abandonado los matraces y me he centrado en los grimorios, aprendiendo a canalizar esa energía explosiva en hechizos controlados, aunque todavía tengo una preocupante tendencia a causar daños colaterales.",
  "Sufrí una extraña y debilitante enfermedad en mi infancia que me dejó postrado en cama durante más de una década. Mi única ventana al mundo y mi única compañía fueron los extensos libros de magia de mi difunto abuelo. Al no poder mover mi cuerpo, ejercité mi mente, memorizando cada runa, cada gesto y cada encantamiento hasta comprender la teoría mágica mejor que muchos archimagos. Cuando finalmente me recuperé milagrosamente, descubrí que la teoría se traducía perfectamente en práctica. Ahora, con un cuerpo sano y una mente rebosante de conocimiento arcano retenido durante años, estoy ansioso por experimentar todo lo que el mundo tiene para ofrecer."
];

/**
 * Equipo inicial estándar para la clase Mago.
 */
export const wizardEquipment = [
  "Libro de conjuros",
  "Foco Arcano (Varita de madera de tejo)",
  "Paquete de Erudito (Mochila, libro, tinta, pluma, 10 pergaminos, arena, cuchillo)",
  "Daga",
  "Ropajes de viajero"
];

/**
 * Lista de baratijas (trinkets) curiosas y misteriosas para añadir sabor narrativo al personaje.
 */
export const trinkets = [
  "Una mano de goblin momificada",
  "Un trozo de cristal que brilla débilmente a la luz de la luna",
  "Una moneda de oro acuñada en una tierra desconocida",
  "Un diario escrito en un idioma que no conoces",
  "Un anillo de latón que nunca se empaña",
  "Una pequeña estatuilla de un cuervo tallada en carbón",
  "Un frasco de sangre que nunca se seca",
  "Una pluma de un ave exótica y colorida",
  "Un mapa que muestra un continente que no existe",
  "Un diente de dragón montado en un collar de cuero",
  "Una llave de hierro oxidada que no abre ninguna cerradura conocida",
  "Una caja de música de madera que reproduce una melodía triste",
  "Un dado de hueso con un símbolo de calavera en la cara del seis",
  "Un camafeo de plata con el retrato de una persona que no reconoces",
  "Un pequeño espejo de mano que a veces refleja un rostro diferente al tuyo",
  "Un trozo de cuerda que no se puede cortar con herramientas normales",
  "Una aguja que siempre apunta hacia el lugar donde naciste",
  "Un frasco de cristal vacío que huele a perfume de rosas cuando se abre",
  "Una piedra lisa que siempre está caliente al tacto",
  "Un pequeño ídolo de madera de un dios olvidado",
  "Un reloj de bolsillo de latón que funciona al revés",
  "Una pipa de madera que hace burbujas en lugar de humo",
  "Un parche para el ojo con un ojo falso pintado en él",
  "Un libro en blanco cuyas páginas se niegan a retener la tinta",
  "Un fragmento de una hermosa canción, escrita en notas musicales sobre un trozo de pergamino",
  "Una pequeña caja de madera llena de polvo de hadas",
  "Un guante de seda de un tamaño demasiado pequeño para cualquier humano",
  "Una escama de pez del tamaño de un plato",
  "Un trozo de carbón que parece una cara humana",
  "Una pequeña campana de plata sin badajo"
];

/**
 * Lista completa de habilidades disponibles en D&D 2024.
 */
export const allSkills = [
  "Acrobacias", "Trato con Animales", "Arcanos", "Atletismo", "Engaño", 
  "Historia", "Perspicacia", "Intimidación", "Investigación", "Medicina", 
  "Naturaleza", "Percepción", "Interpretación", "Persuasión", "Religión", 
  "Juego de Manos", "Sigilo", "Supervivencia"
];

/**
 * Rasgos raciales específicos para la raza Humana.
 */
export const humanTraits = [
  "Ingenioso (Resourceful): Ganas Inspiración Heroica tras un descanso largo.",
  "Versatilidad de Habilidades: Competencia en una habilidad adicional."
];

/**
 * Arreglo estándar de puntuaciones de características para la creación de personajes.
 */
export const standardArray = [15, 14, 13, 12, 10, 8];

/**
 * Progresión de rasgos de clase del Mago por nivel según D&D 2024.
 */
export const wizardFeaturesByLevel: Record<number, string[]> = {
  1: [
    "Lanzamiento de Conjuros (Spellcasting)", 
    "Recuperación Arcana: Recupera espacios de conjuro (mitad de tu nivel) en un descanso corto."
  ],
  2: [
    "Erudito (Scholar): Ganas Pericia (Expertise) en una habilidad de Inteligencia o Sabiduría en la que seas competente."
  ],
  3: [
    "Subclase de Mago: Obtienes los rasgos de la subclase que hayas elegido (Escuela de Magia).",
    "Conjuros de Nivel 2: Desbloqueas espacios de conjuro de nivel 2."
  ],
  4: [
    "Mejora de Característica o Dote: +2 a una característica, +1 a dos, o elige una Dote."
  ],
  5: [
    "Memorizar Conjuro (Memorize Spell): Puedes cambiar un conjuro preparado durante un descanso corto.",
    "Conjuros de Nivel 3: Desbloqueas espacios de conjuro de nivel 3."
  ],
  6: [
    "Rasgo de Subclase (Nivel 6): Obtienes una característica de tu escuela de magia."
  ],
  7: [
    "Conjuros de Nivel 4: Desbloqueas espacios de conjuro de nivel 4."
  ],
  8: [
    "Mejora de Característica o Dote: +2 a una característica, +1 a dos, o elige una Dote."
  ],
  9: [
    "Conjuros de Nivel 5: Desbloqueas espacios de conjuro de nivel 5."
  ],
  10: [
    "Rasgo de Subclase (Nivel 10): Obtienes una característica avanzada de tu escuela."
  ],
  11: [
    "Conjuros de Nivel 6: Desbloqueas espacios de conjuro de nivel 6."
  ],
  12: [
    "Mejora de Característica o Dote: +2 a una característica, +1 a dos, o elige una Dote."
  ],
  13: [
    "Conjuros de Nivel 7: Desbloqueas espacios de conjuro de nivel 7."
  ],
  14: [
    "Rasgo de Subclase (Nivel 14): Obtienes la característica final de tu escuela."
  ],
  15: [
    "Conjuros de Nivel 8: Desbloqueas espacios de conjuro de nivel 8."
  ],
  16: [
    "Mejora de Característica o Dote: +2 a una característica, +1 a dos, o elige una Dote."
  ],
  17: [
    "Conjuros de Nivel 9: Desbloqueas espacios de conjuro de nivel 9."
  ],
  18: [
    "Dominio de Conjuros (Spell Mastery): Elige un conjuro de nivel 1 y otro de nivel 2 para lanzarlos a voluntad."
  ],
  19: [
    "Mejora de Característica o Dote Épica: Aumenta tus atributos o elige una Dote Épica."
  ],
  20: [
    "Conjuros Personales (Signature Spells): Elige dos conjuros de nivel 3 para tenerlos siempre preparados y lanzarlos gratis una vez por descanso corto/largo."
  ]
};

/**
 * Mezcla un arreglo de forma aleatoria usando el algoritmo de Fisher-Yates.
 * @param array El arreglo a mezclar.
 * @returns Un nuevo arreglo con los elementos mezclados.
 */
function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

/**
 * Lista de subclases (Escuelas de Magia) disponibles para el Mago.
 * Incluye las 4 básicas de 2024 y las opciones de legado (Legacy).
 */
export const wizardSubclasses = [
  "Abjurador (Abjuration)",
  "Adivinador (Divination)",
  "Evocador (Evocation)",
  "Ilusionista (Illusion)",
  "Conjurador (Conjuration) - Legado",
  "Encantador (Enchantment) - Legado",
  "Nigromante (Necromancy) - Legado",
  "Transmutador (Transmutation) - Legado",
  "Cantante de la Hoja (Bladesinging) - Legado",
  "Magia de Guerra (War Magic) - Legado",
  "Orden de los Escribas (Order of Scribes) - Legado",
  "Magia de Sangre (Blood Magic) - Legado",
  "Cronurgo (Chronurgy) - Legado",
  "Graviturgo (Graviturgy) - Legado"
];

/**
 * Genera un personaje Mago de nivel 1 con estadísticas, trasfondo, hechizos y equipo aleatorios
 * basados en las reglas de D&D 2024.
 * @returns Un objeto que representa la ficha completa del personaje.
 */
export function generateWizard() {
  const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const feat = bg.feat;
  
  const stats = [...standardArray];
  const int = stats[0] + (bg.bonuses.int || 0);
  const dex = stats[1] + (bg.bonuses.dex || 0);
  const con = stats[2] + (bg.bonuses.con || 0);
  const wis = stats[3] + (bg.bonuses.wis || 0);
  const cha = stats[4];
  const str = stats[5];

  const intMod = Math.floor((int - 10) / 2);
  const dexMod = Math.floor((dex - 10) / 2);
  const conMod = Math.floor((con - 10) / 2);

  const wizardSkillOptions = ["Arcanos", "Historia", "Perspicacia", "Investigación", "Medicina", "Religión"].filter(s => !bg.skills.includes(s));
  const selectedWizardSkills = shuffle(wizardSkillOptions).slice(0, 2);
  
  const remainingSkills = allSkills.filter(s => !bg.skills.includes(s) && !selectedWizardSkills.includes(s));
  const humanSkill = remainingSkills[Math.floor(Math.random() * remainingSkills.length)];
  
  let skills = [...bg.skills, ...selectedWizardSkills, humanSkill];
  
  if (feat.includes("Hábil")) {
    const extraSkills = shuffle(allSkills.filter(s => !skills.includes(s))).slice(0, 3);
    skills = [...skills, ...extraSkills];
  }

  const selectedCantrips = shuffle(wizardSpellsByLevel[0]).slice(0, 3);
  const selectedSpells = shuffle(wizardSpellsByLevel[1]).slice(0, 6);
  const prepared = selectedSpells.slice(0, 4);

  const spells: Record<number, string[]> = {
    0: selectedCantrips,
    1: selectedSpells,
    2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
  };

  let hp = 6 + conMod;
  if (feat.includes("Resistente")) hp += 2;
  
  const pb = 2;
  const ac = 10 + dexMod;
  let initiative = dexMod;
  if (feat.includes("Alerta")) initiative += pb;

  const spellSaveDC = 8 + pb + intMod;
  const spellAttack = pb + intMod;

  return {
    name: "Mago Anónimo",
    race: "Humano",
    class: "Mago",
    subclass: "",
    level: 1,
    pb,
    background: bg.name,
    alignment: "Neutral Bueno",
    str, dex, con, int, wis, cha,
    originFeat: feat,
    traits: humanTraits,
    classFeatures: [...wizardFeaturesByLevel[1]],
    skills: skills.sort(),
    hp, ac, initiative, speed: 30, spellSaveDC, spellAttack,
    spells,
    preparedSpells: prepared,
    equipment: [...wizardEquipment, ...bg.equipment, `Baratija: ${trinkets[Math.floor(Math.random() * trinkets.length)]}`],
    backstory: backstories[Math.floor(Math.random() * backstories.length)],
    personality: personalityTraits[Math.floor(Math.random() * personalityTraits.length)],
    ideal: ideals[Math.floor(Math.random() * ideals.length)],
    bond: bonds[Math.floor(Math.random() * bonds.length)],
    flaw: flaws[Math.floor(Math.random() * flaws.length)]
  };
}
