// ==========================================
// CONTENIDO DE LOS REINOS (basado en el documento)
// ==========================================

const CONTENIDO_REINOS = [
    {
        id: 0,
        nombre: "El Origen del Poder",
        runa: "ᚠ",
        personaje: "Kratos",
        icono: "fa-axe",
        mensaje: "Antes de la batalla, existe el origen. El verbo es la fuerza que da vida a toda oración.",
        contenido: [
            {
                tipo: "tarjeta",
                titulo: "¿Qué es un verbo?",
                texto: "El verbo es la clase de palabra que expresa acción (correr, saltar), proceso (crecer, envejecer), estado (estar, permanecer) o existencia (haber, existir). Es el núcleo del predicado: toda oración necesita un verbo conjugado (o una perífrasis verbal) para funcionar como tal. A diferencia del sustantivo o el adjetivo, el verbo se conjuga, es decir, cambia de forma para indicar quién realiza la acción y en qué circunstancia."
            },
            {
                tipo: "tarjeta",
                titulo: "Las seis categorías gramaticales del verbo",
                texto: "Cuando un verbo se conjuga, cada forma indica seis informaciones: Persona (quién realiza la acción), Número (singular o plural), Tiempo (presente, pasado o futuro), Modo (indicativo, subjuntivo o imperativo), Aspecto (perfectivo o imperfectivo) y Voz (activa o pasiva)."
            },
            {
                tipo: "acordeon",
                titulo: "Detalle de las categorías",
                items: [
                    { titulo: "Persona", texto: "Primera (yo/nosotros), segunda (tú-vos/vosotros) o tercera (él, ella, ellos)." },
                    { titulo: "Número", texto: "Singular o plural, según haya uno o varios sujetos." },
                    { titulo: "Tiempo", texto: "Ubica la acción en el presente, el pasado o el futuro." },
                    { titulo: "Modo", texto: "Indicativo (hechos reales), subjuntivo (duda, deseo, hipótesis) o imperativo (órdenes y ruegos)." },
                    { titulo: "Aspecto", texto: "Perfectivo (acción terminada: 'canté') o imperfectivo (en desarrollo: 'cantaba')." },
                    { titulo: "Voz", texto: "Activa (el sujeto realiza la acción) o pasiva (el sujeto la recibe)." }
                ]
            },
            {
                tipo: "tarjeta",
                titulo: "Estructura interna del verbo",
                texto: "Todo verbo conjugado tiene dos partes: Raíz o lexema (aporta el significado, no cambia) y Desinencia o terminación (cambia y aporta persona, número, tiempo y modo). Ejemplo: en 'canto', 'cant-' es la raíz y '-o' indica primera persona, singular, presente, indicativo."
            },
            {
                tipo: "tarjeta",
                titulo: "Las tres conjugaciones",
                texto: "Según su terminación en infinitivo: 1ª conjugación (-ar): cantar, saltar; 2ª conjugación (-er): temer, correr; 3ª conjugación (-ir): partir, vivir."
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 1 – Apertura",
                texto: "“Bienvenidos al Reino del Origen. Antes de que existieran las batallas de tiempo y modo, existió el verbo: la fuerza que le da vida a toda oración. Aquí conocerán su verdadera forma.”"
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 1 – Cierre",
                texto: "“Ahora que conocen el origen del poder verbal, están listos para cruzar al Reino de los Tres Caminos, donde el modo verbal decide el destino de cada frase.”"
            }
        ],
        desafio: {
            pregunta: "Identifica persona, número y modo en la forma verbal 'cantaron'.",
            opciones: [
                "1ª persona, singular, indicativo",
                "3ª persona, plural, indicativo",
                "2ª persona, plural, subjuntivo",
                "3ª persona, singular, imperativo"
            ],
            correcta: 1,
            explicacion: "'Cantaron' es tercera persona del plural (ellos cantaron), modo indicativo, tiempo pretérito perfecto simple."
        }
    },
    {
        id: 1,
        nombre: "Los Tres Caminos",
        runa: "ᚢ",
        personaje: "Atreus",
        icono: "fa-bow-arrow",
        mensaje: "Tres caminos: la certeza, la niebla de la duda y la voz del mando. Elegir bien es el arte.",
        contenido: [
            {
                tipo: "tarjeta",
                titulo: "¿Qué es el modo verbal?",
                texto: "El modo es la categoría gramatical que expresa la actitud del hablante frente a lo que dice: si lo presenta como un hecho real y objetivo, como algo deseado, dudoso o hipotético, o como una orden. El español tiene tres modos."
            },
            {
                tipo: "tarjeta",
                titulo: "Modo indicativo",
                texto: "Se usa para hechos reales, objetivos y seguros. Es el modo de la certeza. Tiene el mayor número de tiempos: presente (canto), pretérito imperfecto (cantaba), pretérito perfecto simple (canté), futuro simple (cantaré), condicional simple (cantaría), y sus compuestos."
            },
            {
                tipo: "tarjeta",
                titulo: "Modo subjuntivo",
                texto: "Expresa duda, deseo, posibilidad, hipótesis, emoción o irrealidad. Aparece tras expresiones como 'ojalá', 'espero que', 'es posible que'. Ejemplo: 'ojalá gane', 'si yo fuera un guerrero'. Sus tiempos principales: presente (cante), pretérito imperfecto (cantara/cantase) y compuestos."
            },
            {
                tipo: "tarjeta",
                titulo: "Modo imperativo",
                texto: "Se usa para dar órdenes, ruegos, consejos o instrucciones directas. Solo existe en presente y no tiene primera persona del singular. Ejemplo: 'canta tú', 'cante usted', 'cantemos nosotros'. La forma negativa usa el presente de subjuntivo: 'no cantes'."
            },
            {
                tipo: "tarjeta",
                titulo: "Tabla comparativa (yo, tú)",
                texto: "Indicativo (yo): canto, temo, parto. Subjuntivo (yo): cante, tema, parta. Imperativo (tú): canta, teme, parte."
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 2 – Apertura",
                texto: "“Han cruzado al Reino de los Tres Caminos. Aquí, cada verbo elige un sendero: la certeza del indicativo, la niebla del subjuntivo o el mandato del imperativo. Elegir mal el camino cambia el destino de toda una frase.”"
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 2 – Cierre",
                texto: "“Dominar los tres caminos es solo la mitad de la batalla. Ahora deben enfrentar a las dos estirpes: los verbos que obedecen las reglas y los que se rebelan contra ellas.”"
            }
        ],
        desafio: {
            pregunta: "Completa: 'Ojalá ________ (llegar) a tiempo.' ¿Qué forma verbal corresponde?",
            opciones: ["llega", "llegue", "llegará", "llegaría"],
            correcta: 1,
            explicacion: "Después de 'ojalá' se usa el modo subjuntivo. La forma correcta es 'llegue' (presente de subjuntivo)."
        }
    },
    {
        id: 2,
        nombre: "Las Dos Estirpes",
        runa: "ᚦ",
        personaje: "Kratos",
        icono: "fa-shield-halved",
        mensaje: "Regulares e irregulares. Dos linajes que forjan el destino del idioma. Conócelos y domínalos.",
        contenido: [
            {
                tipo: "tarjeta",
                titulo: "Verbos regulares",
                texto: "Mantienen su raíz sin cambios y siguen exactamente el modelo de su conjugación (-ar, -er, -ir). Ejemplos: amar, temer, partir, saltar, comer, vivir. Si conoces el modelo de 'cantar', puedes conjugar cualquier regular en -ar."
            },
            {
                tipo: "tarjeta",
                titulo: "Verbos irregulares",
                texto: "Presentan cambios en la raíz, en la terminación o en ambas. No siguen el modelo puro. Tipos: irregularidad vocálica (diptongación: E→IE, O→UE, E→I), irregularidad consonántica (conocer→conozco), mixta (tener→tengo→tienes), pretéritos fuertes (anduve, pude, puse), y totalmente irregulares (ser, ir, haber, estar)."
            },
            {
                tipo: "acordeon",
                titulo: "Ejemplos de irregularidades",
                items: [
                    { titulo: "Vocálica (E→IE)", texto: "querer → quiero, quieres, quiere." },
                    { titulo: "Vocálica (O→UE)", texto: "poder → puedo, puedes, puede." },
                    { titulo: "Consonántica", texto: "conocer → conozco, conoces, conoce." },
                    { titulo: "Mixta", texto: "tener → tengo, tienes, tiene." },
                    { titulo: "Pretérito fuerte", texto: "andar → anduve, poder → pude, poner → puse, querer → quise, tener → tuve, venir → vine, decir → dije, traer → traje." },
                    { titulo: "Totalmente irregulares", texto: "ser (soy, eres, es...), ir (voy, vas, va...), haber (he, has, ha...), estar (estoy, estás, está...)." }
                ]
            },
            {
                tipo: "tarjeta",
                titulo: "¿Por qué importa la diferencia?",
                texto: "Reconocer si un verbo es regular o irregular evita errores comunes como 'haiga' (en vez de 'haya') o 'andé' (en vez de 'anduve'). Ayuda a predecir la conjugación de miles de verbos a partir de patrones conocidos."
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 3 – Apertura",
                texto: "“Bienvenidos al Reino de las Dos Estirpes. Aquí conviven dos linajes de verbos: los regulares, disciplinados y previsibles, y los irregulares, rebeldes, que cambian de forma pero jamás de significado. Ambos son igual de poderosos.”"
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 3 – Cierre",
                texto: "“Ahora que distinguen las dos estirpes, deben avanzar al Reino del Tiempo, donde cada verbo debe elegir en qué momento existe: pasado, presente o futuro.”"
            }
        ],
        desafio: {
            pregunta: "De los siguientes verbos, ¿cuáles son irregulares en presente? (selecciona el que SÍ es irregular)",
            opciones: ["saltar", "tener", "comer", "vivir"],
            correcta: 1,
            explicacion: "'Tener' es irregular en presente (tengo, tienes, tiene). 'Saltar', 'comer' y 'vivir' son regulares."
        }
    },
    {
        id: 3,
        nombre: "El Dominio del Tiempo",
        runa: "ᚨ",
        personaje: "Atreus",
        icono: "fa-clock",
        mensaje: "El tiempo es un río. Domínalo y serás dueño del verbo. Nueve tiempos custodian este reino.",
        contenido: [
            {
                tipo: "tarjeta",
                titulo: "Tiempos simples del modo indicativo",
                texto: "Se forman con una sola palabra (raíz + desinencia). Son: Presente (canto), Pretérito imperfecto (cantaba), Pretérito perfecto simple (canté), Futuro simple (cantaré) y Condicional simple (cantaría)."
            },
            {
                tipo: "tarjeta",
                titulo: "Tiempos compuestos del modo indicativo",
                texto: "Se forman con el verbo auxiliar 'haber' conjugado + el participio del verbo principal. Son: Pretérito perfecto compuesto (he cantado), Pretérito pluscuamperfecto (había cantado), Futuro compuesto (habré cantado) y Condicional compuesto (habría cantado)."
            },
            {
                tipo: "acordeon",
                titulo: "Usos de cada tiempo",
                items: [
                    { titulo: "Presente", texto: "Acciones actuales, hábitos o verdades generales ('el dragón custodia el reino')." },
                    { titulo: "Pretérito imperfecto", texto: "Acciones pasadas habituales o en desarrollo, sin marcar final ('los guerreros entrenaban cada mañana')." },
                    { titulo: "Pretérito perfecto simple", texto: "Acciones pasadas y terminadas, vistas como un hecho puntual ('el guerrero venció al dragón')." },
                    { titulo: "Futuro simple", texto: "Acciones futuras ('el próximo guerrero llegará mañana')." },
                    { titulo: "Condicional simple", texto: "Acciones hipotéticas o sujetas a condición ('yo lucharía si tuviera la espada')." },
                    { titulo: "Pretérito perfecto compuesto", texto: "Acciones pasadas con relación al presente ('hoy he estudiado los verbos')." },
                    { titulo: "Pretérito pluscuamperfecto", texto: "Acción pasada anterior a otra pasada ('cuando llegué, el dragón ya había huido')." }
                ]
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 4 – Apertura",
                texto: "“Han llegado al Reino del Tiempo, donde cada verbo debe declarar si su batalla ya ocurrió, está ocurriendo o todavía no comienza. Nueve tiempos custodian este reino: cinco simples y cuatro compuestos.”"
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 4 – Cierre",
                texto: "“El tiempo ha sido conquistado. Solo queda un reino: el de las formas sin rostro, verbos que no declaran ni persona ni tiempo, pero que sostienen toda la gramática.”"
            }
        ],
        desafio: {
            pregunta: "Transforma 'yo entreno' a pretérito perfecto compuesto. ¿Cuál es la forma correcta?",
            opciones: ["yo entrené", "yo he entrenado", "yo había entrenado", "yo entrenaría"],
            correcta: 1,
            explicacion: "El pretérito perfecto compuesto se forma con 'haber' en presente + participio: 'he entrenado'."
        }
    },
    {
        id: 4,
        nombre: "Las Formas Sin Rostro",
        runa: "ᚱ",
        personaje: "Kratos",
        icono: "fa-mask",
        mensaje: "No tienen rostro, pero sin ellas ningún tiempo compuesto ni perífrasis podría existir. Son el alma del verbo.",
        contenido: [
            {
                tipo: "tarjeta",
                titulo: "¿Qué son las formas no personales?",
                texto: "También llamadas 'verboides', son tres formas que no indican persona, número, tiempo ni modo: infinitivo, gerundio y participio. Aportan la idea de la acción sin decir quién ni cuándo."
            },
            {
                tipo: "tarjeta",
                titulo: "El infinitivo",
                texto: "Termina en -ar, -er o -ir (cantar, temer, partir). Es la forma del diccionario. Funciona como sustantivo ('el cantar es un arte') y forma perífrasis ('voy a cantar'). Su forma compuesta: haber + participio ('haber cantado')."
            },
            {
                tipo: "tarjeta",
                titulo: "El gerundio",
                texto: "Termina en -ando (verbos -ar) o -iendo (verbos -er/-ir): cantando, temiendo, partiendo. Expresa acción en desarrollo, simultánea a otra ('el guerrero avanzaba cantando'). Su forma compuesta: habiendo + participio ('habiendo cantado'). Evitar el 'gerundio de posterioridad'."
            },
            {
                tipo: "tarjeta",
                titulo: "El participio",
                texto: "Termina en -ado (verbos -ar) o -ido (verbos -er/-ir): cantado, temido, partido. Forma tiempos compuestos con 'haber' ('he cantado') y funciona como adjetivo ('la canción cantada'). Algunos irregulares: escrito, dicho, visto, roto, muerto, puesto, vuelto, abierto, resuelto."
            },
            {
                tipo: "tarjeta",
                titulo: "Perífrasis verbales",
                texto: "Combinan un verbo auxiliar conjugado con una forma no personal. Ejemplos: 'voy a cantar' (futuro próximo), 'estoy cantando' (progreso), 'tengo escrito el informe' (resultado)."
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Guion del Guerrero 5 – Apertura",
                texto: "“Han llegado al último reino. Aquí habitan tres formas sin rostro: no dicen quién actúa ni cuándo, pero sin ellas ningún tiempo compuesto, ninguna perífrasis, podría existir.”"
            },
            {
                tipo: "tarjeta",
                titulo: "📜 Cierre general de la feria",
                texto: "“Cinco reinos han sido conquistados: el origen, los tres caminos, las dos estirpes, el tiempo y las formas sin rostro. Quien domine estos cinco reinos, domina el verbo… y el verbo es el corazón de toda la lengua. ¡Que comience el duelo final!”"
            }
        ],
        desafio: {
            pregunta: "¿Cuál es el participio irregular de 'poner'?",
            opciones: ["ponido", "puesto", "puesto", "ponado"],
            correcta: 1,
            explicacion: "El participio irregular de 'poner' es 'puesto'. Se usa en tiempos compuestos como 'he puesto'."
        }
    }
];