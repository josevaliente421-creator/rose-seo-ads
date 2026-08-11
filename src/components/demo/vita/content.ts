import {
  HeartPulse,
  Stethoscope,
  Video,
  ScanLine,
  FlaskConical,
  Siren,
  type LucideIcon,
} from "lucide-react";

export const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: HeartPulse,
    title: "Chequeo preventivo",
    description:
      "Evaluación anual completa: exámenes, imagenología y un plan de prevención personalizado en un solo día.",
  },
  {
    icon: Stethoscope,
    title: "Medicina familiar",
    description:
      "Atención continua para toda la familia, con el mismo médico en cada visita y toda tu historia en un solo lugar.",
  },
  {
    icon: Video,
    title: "Telemedicina",
    description:
      "Consulta por video en menos de 24 horas, con receta digital y seguimiento sin salir de tu casa.",
  },
  {
    icon: ScanLine,
    title: "Imagenología",
    description:
      "Ecografías, resonancias y radiografías con informe en 24 horas y lectura por especialistas.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorio",
    description:
      "Toma de muestras y resultados el mismo día, desde nuestra plataforma de pacientes.",
  },
  {
    icon: Siren,
    title: "Urgencias",
    description:
      "Atención de urgencias de baja complejidad todos los días, sin horas de espera innecesarias.",
  },
];

export const specialties = [
  {
    n: "01",
    name: "Cardiología",
    description: "Prevención, diagnóstico y seguimiento de salud cardiovascular.",
  },
  {
    n: "02",
    name: "Ginecología y Obstetricia",
    description: "Cuidado integral de la mujer y acompañamiento del embarazo.",
  },
  {
    n: "03",
    name: "Pediatría",
    description: "Salud infantil desde el primer control hasta la adolescencia.",
  },
  {
    n: "04",
    name: "Traumatología",
    description: "Lesiones musculoesqueléticas y medicina deportiva.",
  },
  {
    n: "05",
    name: "Dermatología",
    description: "Cuidado de la piel, chequeo de lunares y dermatología estética.",
  },
  {
    n: "06",
    name: "Salud Mental",
    description: "Psiquiatría y psicología clínica con atención presencial o remota.",
  },
];

export const values = [
  {
    n: "01",
    title: "Consultas de 30 minutos",
    description:
      "No salimos corriendo a la siguiente hora. Tu médico escucha, revisa tu historia completa y responde todas tus preguntas.",
  },
  {
    n: "02",
    title: "Resultados el mismo día",
    description:
      "Laboratorio e imagenología propios: dejas tu muestra por la mañana y recibes los resultados antes de que termine el día.",
  },
  {
    n: "03",
    title: "Telemedicina sin esperas",
    description:
      "Si tu control es simple, no necesitas venir. Video-consulta en menos de 24 horas con el mismo médico que te atiende en persona.",
  },
  {
    n: "04",
    title: "Precios transparentes",
    description:
      "El valor de cada consulta y examen está publicado en nuestra web. Sin cargos sorpresa — nunca.",
  },
];

export const cases = [
  {
    n: "01",
    kind: "Programa Cardiovascular",
    title: "Prevención para un ejecutivo de 54 años",
    challenge:
      "Presión elevada, antecedentes familiares de infarto y una agenda que hacía imposible los controles presenciales.",
    process:
      "Monitoreo ambulatorio de 24 horas, panel lipídico completo, telemedicina mensual y un plan de ejercicio y nutrición supervisado.",
    results: [
      { value: "30", prefix: "-", suffix: "%", label: "de LDL en 6 meses" },
      { value: "100", suffix: "%", label: "controles cumplidos" },
      { value: "12", suffix: "", label: "teleconsultas realizadas" },
    ],
  },
  {
    n: "02",
    kind: "Programa Diabetes",
    title: "Control integral para pacientes crónicos",
    challenge:
      "Pacientes con hemoglobina glicosilada sobre 9% y controles irregulares que terminaban en urgencias.",
    process:
      "Educación en salud, ajuste farmacológico con endocrinólogo y seguimiento telefónico de enfermería cada 15 días.",
    results: [
      { value: "7", prefix: "HbA1c bajo ", suffix: "%", label: "en 8 meses" },
      { value: "91", suffix: "%", label: "de adherencia al plan" },
      { value: "40", prefix: "-", suffix: "%", label: "de visitas a urgencias" },
    ],
  },
  {
    n: "03",
    kind: "Programa Maternal",
    title: "Acompañamiento completo del embarazo",
    challenge:
      "Primer embarazo con dudas y miedos, y controles dispersos entre especialistas sin un hilo conductor.",
    process:
      "Médico coordinador único, ecografías seriadas, educación prenatal grupal y un canal directo con la matrona.",
    results: [
      { value: "12", suffix: "", label: "controles coordinados" },
      { value: "100", suffix: "%", label: "ecografías a tiempo" },
      { value: "1", suffix: "", label: "parto sin complicaciones" },
    ],
  },
];

export const team = [
  {
    initials: "VS",
    name: "Dra. Valentina Soto",
    role: "Directora Médica · Medicina Familiar",
  },
  {
    initials: "NP",
    name: "Dr. Nicolás Paredes",
    role: "Cardiología",
  },
  {
    initials: "AR",
    name: "Dra. Antonia Rivas",
    role: "Ginecología y Obstetricia",
  },
  {
    initials: "TV",
    name: "Dr. Tomás Vega",
    role: "Traumatología",
  },
];

export const processSteps = [
  {
    n: "01",
    name: "Agenda tu hora",
    description: "Online, por teléfono o WhatsApp. Elige médico y horario.",
  },
  {
    n: "02",
    name: "Conoce a tu médico",
    description: "Consulta de 30 minutos con tu historia completa en pantalla.",
  },
  {
    n: "03",
    name: "Exámenes y diagnóstico",
    description: "Laboratorio e imagenología el mismo día, sin derivaciones.",
  },
  {
    n: "04",
    name: "Plan de tratamiento",
    description: "Un plan claro, escrito y explicado en lenguaje simple.",
  },
  {
    n: "05",
    name: "Seguimiento continuo",
    description: "Controles y recordatorios hasta que el objetivo se cumpla.",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuesta una consulta?",
    a: "El valor de cada consulta y examen está publicado en nuestra web, desde $35.000 CLP. No hay cargos sorpresa: sabes el total antes de agendar.",
  },
  {
    q: "¿Aceptan Fonasa e isapres?",
    a: "Sí. Tenemos convenio con las principales isapres y emitimos bonos Fonasa. Al agendar, validamos tu cobertura y te informamos el valor final a pagar.",
  },
  {
    q: "¿Cómo funcionan las teleconsultas?",
    a: "Agendas por la web y recibes un enlace de video. Tu médico accede a tu historia clínica y puede emitir recetas y órdenes digitales al instante.",
  },
  {
    q: "¿Cuándo entregan resultados de exámenes?",
    a: "El laboratorio es propio: si tomas tu muestra antes de las 12:00, recibes los resultados el mismo día por nuestra plataforma. Imagenología en 24 horas.",
  },
  {
    q: "¿Atienden urgencias?",
    a: "Sí, urgencias de baja complejidad todos los días del año, con tiempos de espera promedio bajo los 15 minutos. Emergencias mayores se derivan de inmediato.",
  },
  {
    q: "¿Puedo cambiar de médico si no me siento cómodo?",
    a: "Por supuesto, y sin costo adicional. La confianza con tu médico es parte del tratamiento: si no se da, lo cambiamos sin preguntas.",
  },
];
