import type { Marketing } from "../en/marketing"

export const marketing: Marketing = {
  /** Shared primary CTA used by the navbar, hero and closing CTA. */
  startCreating: "Empezar a crear",

  nav: {
    home: "inicio",
    about: "acerca de",
    changelog: "novedades",
    toggleMenu: "Mostrar menú",
  },

  footer: {
    home: "Inicio",
    about: "Acerca de",
    changelog: "novedades",
    signin: "Iniciar sesión",
    builtBy: "Construido y diseñado por",
  },

  hero: {
    badge: "Estudio de contenido personal",
    titleLine1: "Tus ideas,",
    titleLine2: "tu voz.",
    description:
      "MAVE convierte los pensamientos de tu cabeza en contenido social pulido que sigue sonando, sin lugar a dudas, como tú.",
    seeHowItWorks: "Ver cómo funciona",
    flow: {
      idea: "Idea",
      writingStyle: "Estilo de escritura",
      content: "Contenido",
      visual: "Visual",
    },
  },

  workspace: {
    insideMave: "Dentro de MAVE",
    title: "Espacio de escritura",
    generated: "Generado",
    turnIntoVisual: "Convierte esta publicación en un visual",
    continue: "Continuar",
    demoLinkedin: `
Antes creía que las buenas ideas llegaban **totalmente formadas**.

No es así.

Empiezan como una frase en tus notas.
Una idea que casi ignoras.
Una pregunta a la que vuelves una y otra vez.

El trabajo no consiste en tener **más ideas**.

Sino en aprender cuáles merecen tu atención y darles tiempo suficiente para quedar claras.

> Las mejores ideas no suelen ser las más ruidosas.

**¿Qué idea llevas dando vueltas?**
`,
    demoInstagram: `
  Las ideas casi nunca llegan listas. Aparecen desordenadas, **inconclusas** y fáciles de pasar por alto.

  El **trabajo creativo** es notar cuáles siguen llamándote.`,
  },

  howItWorks: {
    badge: "Cómo funciona",
    headingLine1: "De un pensamiento",
    headingLine2: "a algo real.",
    steps: [
      {
        id: "01",
        title: "Añade tu voz",
        description:
          "Añade hasta cinco ejemplos de tu escritura. MAVE aprende tu ritmo, tu vocabulario y tu punto de vista.",
      },
      {
        id: "02",
        title: "Trae una idea",
        description:
          "Escribe lo que quieras contar. Con una sola frase tienes para empezar.",
      },
      {
        id: "03",
        title: "Hazla tuya",
        description:
          "Genera, edita y crea un visual. No tienes que hacer más. La última palabra siempre es tuya.",
      },
    ],
  },

  outro: {
    badge: "Estudio visual",
    headingLine1: "Una idea.",
    headingLine2: "Una historia completa.",
    description:
      "Cuando las palabras encajen, conviértelas en un visual distintivo sin salir de tu flujo creativo.",
    cta: "Explora la creación de visuales",
    fromYourPost: "De tu publicación",
    quoteLine1: "Las buenas ideas",
    quoteLine2: "rara vez llegan",
    quoteLine3: "hechas.",
    serial: "mave / 001",
    posterLine1: "HAZ",
    posterLine2: "ESPACIO",
    posterLine3: "PARA LO",
    posterLine4: "inacabado.",
    tagline: "Tus ideas, tu voz.",
  },

  cta: {
    heading: "Hay algo que merece ser compartido.",
    description: "Dale a tu próxima idea un lugar para tomar claridad.",
  },

  about: {
    label: "Sobre MAVE",
    heroLine1: "Las ideas son personales.",
    heroHighlight: "Escribir",
    heroLine2: "también debería serlo.",
    beliefs: "En lo que MAVE cree",
    visionIntro:
      "MAVE es un estudio de contenido personal para quienes tienen algo que decir, pero no siempre tienen el tiempo ni la perspectiva para darle forma.",
    clarityHeading: "Una herramienta para la claridad, no para el volumen.",
    clarityBody1:
      "La mayoría de las herramientas de escritura optimizan para producir más: más publicaciones, más titulares, más volumen. MAVE empieza en un lugar más tranquilo: tu punto de vista. Aprende de ejemplos reales de tu escritura y después te ayuda a convertir ideas en bruto en contenido claro para LinkedIn e Instagram.",
    clarityBody2:
      "No sustituye tu criterio. Le da a tus ideas una primera forma sólida para que las edites, las refines y las hagas tuyas.",
    quote: "“La mejor tecnología debería hacerte sentir más tú, no menos.”",
    howItWorksHeading: "Cómo funciona",
    howItWorksBody:
      "Traes algunos ejemplos de escritura y una idea. MAVE aprende los patrones que hacen que tu voz sea tuya — longitud de las frases, ritmo, vocabulario, estructura — y los usa como dirección creativa, no como fórmula.",
  },

  changelog: {
    badge: "Novedades",
    heading: "Qué hay de nuevo en MAVE.",
    description:
      "Nuevas funciones, mejoras cuidadas y todo lo que vamos perfeccionando en el camino.",
    entries: [
      {
        id: 1,
        title: "Lanzamiento inicial",
        description:
          "La primera versión de MAVE: enséñale tu voz, trae una idea y crea algo que merezca la pena compartir.",
        version: "v0.1.0",
        date: "2 NOV 2026",
        change: [
          "Estilo de escritura personal",
          "Generación para LinkedIn e Instagram",
          "Usa tu propia clave de OpenAI",
        ],
      },
    ],
  },

  postCard: {
    edit: "Editar",
    regenerate: "Generar de nuevo",
  },
}
