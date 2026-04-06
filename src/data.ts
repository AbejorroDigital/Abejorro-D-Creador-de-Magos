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

export const wizardCantripsKnown: Record<number, number> = {
  1: 3, 2: 3, 3: 3,
  4: 4, 5: 4, 6: 4, 7: 4, 8: 4, 9: 4,
  10: 5, 11: 5, 12: 5, 13: 5, 14: 5, 15: 5, 16: 5, 17: 5, 18: 5, 19: 5, 20: 5
};

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
  "Pasé mi juventud encerrado en los archivos de una gran biblioteca, estudiando tomos polvorientos. Un día descubrí un grimorio oculto que despertó mi chispa mágica. Ahora busco el conocimiento que los libros no pueden enseñar.",
  "Fui aprendiz de un mago excéntrico que desapareció misteriosamente. Me dejó su libro de conjuros y una extraña advertencia. Viajo para descubrir qué le sucedió y dominar las artes arcanas.",
  "Nacido en una familia de eruditos, siempre se esperó que siguiera una vida académica. Sin embargo, mi fascinación por la magia destructiva me llevó a abandonar la academia y buscar el poder práctico en el mundo real.",
  "Fui un escriba humilde en un monasterio hasta que un pergamino prohibido me habló en sueños. Al leerlo, mi mente se abrió a la magia arcana, pero también me expulsaron por herejía.",
  "Crecí en las calles y sobreviví robando, hasta que le robé un libro a un mago anciano. En lugar de castigarme, vio mi potencial y me tomó como su aprendiz.",
  "Mi aldea fue destruida por una criatura mágica. Juré aprender los secretos de la magia para asegurarme de que nadie más sufra la misma impotencia que yo sentí.",
  "Fui un soldado que presenció cómo un solo mago diezmaba a todo mi batallón. Deserté y dediqué mi vida a comprender y dominar ese poder abrumador.",
  "Provengo de un largo linaje de hechiceros innatos, pero yo nací sin magia. Desesperado por probar mi valía, estudié día y noche hasta forzar a la magia a obedecerme mediante fórmulas y estudio.",
  "Encontré un artefacto antiguo en unas ruinas cerca de mi hogar. El artefacto me susurra secretos arcanos a cambio de que lo lleve a su lugar de origen.",
  "Fui el bufón de una corte noble, usando trucos de prestidigitación baratos. Un día, un truco salió demasiado bien y conjuré fuego real. Tuve que huir antes de ser ejecutado por brujería.",
  "Trabajaba como cartógrafo delineando zonas de magia salvaje. La exposición constante alteró mi mente, permitiéndome ver los hilos de la urdimbre mágica y manipularlos.",
  "Mi hermano gemelo era el prodigio mágico de la familia, pero murió en un experimento fallido. Tomé su libro de conjuros y su identidad para continuar su obra y honrar su memoria.",
  "Hice un trato con una entidad de otro plano para salvar mi vida, pero en lugar de convertirme en brujo, me dio un libro y me dijo: 'Aprende o muere'.",
  "Fui un alquimista fracasado cuyas pociones siempre explotaban. Descubrí que mis explosiones no eran mala química, sino magia latente que se manifestaba de forma inestable.",
  "Sufrí una extraña enfermedad en mi infancia que me dejó postrado en cama durante años. Mi única compañía fueron los libros de magia de mi abuelo, los cuales memoricé por completo.",
  "Era un astrónomo real que descubrió un patrón en las estrellas que formaba un conjuro de nivel cósmico. Fui tachado de loco y exiliado, pero sé que tengo razón.",
  "Fui criado por elfos tras quedar huérfano. Aunque mi vida humana es corta, me esforcé el triple para igualar su dominio de la alta magia, ganándome su respeto a regañadientes.",
  "Descubrí que el mundo es una ilusión creada por dioses aburridos. La magia es la única forma de 'hackear' las reglas de esta realidad y planeo liberarnos a todos.",
  "Trabajé como sepulturero en una ciudad asolada por la plaga. Encontré un libro de nigromancia en la tumba de un noble y comencé a estudiar para entender la línea entre la vida y la muerte.",
  "Fui un mercader exitoso hasta que un rival me arruinó usando magia de encantamiento. Lo perdí todo y juré aprender magia para que nadie vuelva a manipular mi mente.",
  "Nací durante una conjunción astral extremadamente rara. Los magos locales me acogieron creyendo que soy la reencarnación de un archimago legendario, una expectativa que me asfixia.",
  "Era un investigador de la guardia de la ciudad. Me di cuenta de que los crímenes mágicos solo pueden ser resueltos por alguien que entienda la magia, así que me convertí en mago para atrapar a los peores criminales.",
  "Encontré un libro de conjuros en el vientre de un monstruo marino que pesqué. Sus páginas estaban intactas y escritas en un idioma que aprendí a descifrar en mis largas noches en el mar.",
  "Fui un esclavo en una mina de cristales arcanos. La resonancia de los cristales me enseñó los fundamentos de la magia, permitiéndome orquestar una rebelión y escapar.",
  "Soy un noble aburrido de la política de la corte. La magia es el único desafío intelectual que me resulta estimulante, aunque mi familia lo considera un pasatiempo peligroso y plebeyo.",
  "Fui maldecido por una bruja para no poder decir mentiras. Descubrí que el lenguaje de la magia es la verdad absoluta del universo, y es el único idioma en el que me siento cómodo.",
  "Trabajaba como restaurador de arte antiguo. Al limpiar un fresco en unas ruinas, revelé un círculo de teletransportación que me envió al otro lado del mundo con solo un libro de hechizos roto.",
  "Mi sombra tiene vida propia y a veces lanza conjuros por su cuenta. Me convertí en mago para aprender a controlarla antes de que lastime a alguien que amo.",
  "Fui un músico prodigio, pero perdí la audición en un accidente. Descubrí que puedo 'escuchar' la magia como si fuera música, y ahora compongo sinfonías arcanas.",
  "Desperté en un cráter sin recuerdos de quién soy, sosteniendo un bastón humeante y un libro de conjuros con mi nombre en la portada. Viajo para descubrir mi pasado."
];

export const wizardEquipment = [
  "Libro de conjuros",
  "Foco Arcano (Varita de madera de tejo)",
  "Paquete de Erudito (Mochila, libro, tinta, pluma, 10 pergaminos, arena, cuchillo)",
  "Daga",
  "Ropajes de viajero"
];

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

export const allSkills = [
  "Acrobacias", "Trato con Animales", "Arcanos", "Atletismo", "Engaño", 
  "Historia", "Perspicacia", "Intimidación", "Investigación", "Medicina", 
  "Naturaleza", "Percepción", "Interpretación", "Persuasión", "Religión", 
  "Juego de Manos", "Sigilo", "Supervivencia"
];

export const humanTraits = [
  "Ingenioso (Resourceful): Ganas Inspiración Heroica tras un descanso largo.",
  "Versatilidad de Habilidades: Competencia en una habilidad adicional."
];

export const standardArray = [15, 14, 13, 12, 10, 8];

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

function shuffle<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

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
