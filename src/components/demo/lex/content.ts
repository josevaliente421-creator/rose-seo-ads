import {
  Building2,
  Users,
  Scale,
  Landmark,
  ShieldCheck,
  FileSignature,
  type LucideIcon,
} from "lucide-react";

export const services: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Building2,
    title: "Derecho Corporativo",
    description:
      "Constitución, gobierno corporativo y operaciones societarias que mantienen tu empresa ágil, protegida y lista para crecer.",
  },
  {
    icon: Users,
    title: "Laboral",
    description:
      "Contratación, relaciones laborales y términos de vínculo con pleno cumplimiento normativo y cero fricción.",
  },
  {
    icon: Scale,
    title: "Civil",
    description:
      "Contratos, responsabilidad civil y operaciones cotidianas redactadas con precisión para evitar conflictos futuros.",
  },
  {
    icon: Landmark,
    title: "Tributario",
    description:
      "Planificación fiscal, contingencias con el SII y estructuras que optimizan tu carga tributaria sin asumir riesgos.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance",
    description:
      "Programas de cumplimiento, prevención de delitos y protección de datos para operar con confianza y reputación intacta.",
  },
  {
    icon: FileSignature,
    title: "Contratos",
    description:
      "Redacción y revisión de contratos comerciales con una mirada estratégica: protegen tu negocio, no solo tu papel.",
  },
];

export const specialties = [
  {
    n: "01",
    name: "Fintech & Tecnología",
    description: "Regulación de pagos, cripto y plataformas digitales.",
  },
  {
    n: "02",
    name: "Retail & Consumo",
    description: "Contratos de distribución, franquicias y protección al consumidor.",
  },
  {
    n: "03",
    name: "Manufactura & Logística",
    description: "Cadena de suministro, aduanas y operaciones industriales.",
  },
  {
    n: "04",
    name: "Agroindustria",
    description: "Sociedades agrícolas, bonos de riego y mercado internacional.",
  },
  {
    n: "05",
    name: "Inmobiliario & Construcción",
    description: "Desarrollos, joint ventures y propiedad horizontal.",
  },
  {
    n: "06",
    name: "Salud & Farma",
    description: "Cumplimiento sanitario, licencias y asociaciones clínicas.",
  },
];

export const values = [
  {
    n: "01",
    title: "Estrategia antes que trámites",
    description:
      "Cada asesoría parte del negocio, no del formulario. Traducimos lo legal a decisiones comerciales que entiendes desde el primer minuto.",
  },
  {
    n: "02",
    title: "Respuesta en menos de 24 horas",
    description:
      "Correos, llamadas y urgencias atendidas por abogados — no por recepcionistas. Tu tiempo también es nuestra responsabilidad.",
  },
  {
    n: "03",
    title: "Equipo multidisciplinario",
    description:
      "Corporativo, laboral y tributario bajo un mismo techo. Un solo interlocutor, una sola estrategia, cero contradicciones.",
  },
  {
    n: "04",
    title: "Honorarios transparentes",
    description:
      "Presupuestos cerrados por etapa de trabajo. Sabes cuánto pagas antes de empezar — y nunca después.",
  },
];

export const cases = [
  {
    n: "01",
    kind: "Caso Corporativo",
    title: "Reestructuración de un grupo logístico familiar",
    challenge:
      "Tres filiales, dos socios fundadores y una sucesión sin resolver. La empresa operaba con pasivos cruzados y sin gobierno corporativo.",
    process:
      "Diagnóstico de la estructura societaria, diseño de un esquema de gobernanza, fusión de filiales y redacción del pacto de accionistas.",
    results: [
      { value: "4", suffix: " meses", label: "para cerrar la fusión" },
      { value: "18", prefix: "%", label: "de ahorro fiscal anual" },
      { value: "10", suffix: " años", label: "de sucesión asegurada" },
    ],
  },
  {
    n: "02",
    kind: "Caso PYME",
    title: "De acuerdos verbales a contratos que protegen",
    challenge:
      "Un fabricante de 30 empleados operaba de palabra con proveedores, clientes y hasta con su socio. Un solo conflicto podía detener la planta.",
    process:
      "Rediseño del ciclo contractual, manual de proveedores, política de precios y crédito, y capacitación del equipo comercial.",
    results: [
      { value: "40", prefix: "-", suffix: "%", label: "de disputas comerciales" },
      { value: "22", suffix: " días", label: "de cobranza más rápida" },
      { value: "100", suffix: "%", label: "de contratos formalizados" },
    ],
  },
  {
    n: "03",
    kind: "Caso Startup",
    title: "Una ronda de inversión sin perder el control",
    challenge:
      "Una fintech con una ronda abierta, una cap table con SAFEs de tres rondas anteriores y la regulación de pagos aún en curso.",
    process:
      "Reestructuración de la tabla de capitalización, armonización documental con la normativa vigente y negociación con inversores institucionales.",
    results: [
      { value: "11", suffix: " semanas", label: "para cerrar la ronda" },
      { value: "2,4", prefix: "US$", suffix: "M", label: "levantados" },
      { value: "61", prefix: "%", label: "de propiedad conservada" },
    ],
  },
];

export const team = [
  {
    initials: "IR",
    name: "Isabela Rojas",
    role: "Socia Fundadora · Derecho Corporativo",
  },
  {
    initials: "MH",
    name: "Matías Herrera",
    role: "Socio · Litigios y Arbitraje",
  },
  {
    initials: "CF",
    name: "Camila Fuentes",
    role: "Directora · Compliance y Datos",
  },
  {
    initials: "SO",
    name: "Sebastián Ortiz",
    role: "Asociado Senior · Tributario",
  },
];

export const processSteps = [
  {
    n: "01",
    name: "Reunión",
    description: "Escuchamos tu situación y definimos objetivos concretos.",
  },
  {
    n: "02",
    name: "Diagnóstico",
    description: "Analizamos documentos, contratos y exposición al riesgo.",
  },
  {
    n: "03",
    name: "Estrategia",
    description: "Diseñamos el plan legal alineado a tu negocio.",
  },
  {
    n: "04",
    name: "Representación",
    description: "Ejecutamos: negociación, documentos y litigios si es necesario.",
  },
  {
    n: "05",
    name: "Seguimiento",
    description: "Monitoreamos cumplimiento y ajustamos cuando cambia el contexto.",
  },
];

export const faqs = [
  {
    q: "¿Cómo cobran sus honorarios?",
    a: "Trabajamos con presupuestos cerrados por etapa: diagnóstico, estrategia y ejecución. Antes de comprometerte, recibes una propuesta escrita con el alcance y el monto exacto. Sin horas sorpresa al final del mes.",
  },
  {
    q: "¿Cuánto tarda la primera reunión?",
    a: "Agendamos dentro de las siguientes 48 horas hábiles. Si tu caso es urgente — un embargo, una fiscalización o una demanda — activa el canal directo de urgencia y un abogado te contacta el mismo día.",
  },
  {
    q: "¿Atienden urgencias fuera de horario?",
    a: "Sí. Los socios mantienen un canal directo con los clientes de asesoría continua. Las urgencias se responden el mismo día, incluso fines de semana, sin costos adicionales de sobreprecio.",
  },
  {
    q: "¿Trabajan solo con empresas grandes?",
    a: "No. Más de la mitad de nuestros clientes son PYMEs y startups. La diferencia está en la estrategia: la misma profundidad técnica, dimensionada al tamaño y presupuesto de tu operación.",
  },
  {
    q: "¿La información que comparto está protegida?",
    a: "Absolutamente. Todo lo que converses queda amparado por el secreto profesional y la normativa de protección de datos. Además firmamos acuerdos de confidencialidad si lo requieres.",
  },
  {
    q: "¿Pueden asumir casos de otras regiones?",
    a: "Sí. Tenemos cobertura nacional y corresponsalías en las principales ciudades. Para operaciones internacionales, trabajamos con firmas asociadas en Latinoamérica y Estados Unidos.",
  },
];
