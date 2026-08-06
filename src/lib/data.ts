import type { LucideIcon } from "lucide-react";
import {
  Timer,
  Sparkles,
  Search,
  MousePointerClick,
  Headset,
  KeyRound,
  MessageCircle,
  PenTool,
  Code2,
  Eye,
  Rocket,
  Flower2,
} from "lucide-react";

export const clients = [
  "Clínica Andrade",
  "Monteverde Legal",
  "Sabor & Fuego",
  "Inmobiliaria Vista",
  "Grupo ConstruRed",
  "Dermalux",
  "Café Nébula",
  "Aria Consultores",
] as const;

export type WhyCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyCards: WhyCard[] = [
  {
    icon: Timer,
    title: "Listo en 7 días",
    description:
      "Proceso definido, sin vueltas. De la primera llamada al lanzamiento en una sola semana.",
  },
  {
    icon: Sparkles,
    title: "Diseño premium",
    description:
      "Nada de plantillas genéricas. Una identidad que hace que tu negocio se vea como una marca grande.",
  },
  {
    icon: Search,
    title: "SEO desde el día uno",
    description:
      "Estructura, velocidad y contenido optimizados para que Google te encuentre primero.",
  },
  {
    icon: MousePointerClick,
    title: "Hecho para convertir",
    description:
      "Cada sección está pensada para que el visitante se convierta en cliente, no solo en espectador.",
  },
  {
    icon: Headset,
    title: "Soporte real",
    description:
      "Un equipo humano que responde en menos de 24 horas. Antes, durante y después del lanzamiento.",
  },
  {
    icon: KeyRound,
    title: "El sitio es tuyo",
    description:
      "Dominio, hosting y código a tu nombre. Si un día te vas, te vas con todo. Sin letras pequeñas.",
  },
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  days: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Hablamos",
    description:
      "Una llamada de 30 minutos. Entendemos tu negocio, tu público y qué necesitas lograr.",
    days: "Día 1",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Diseño a medida sobre tu marca. Propuesta visual aprobada antes de tocar una línea de código.",
    days: "Día 1 – 2",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Desarrollamos",
    description:
      "Construimos con las mejores tecnologías: rápido, seguro y optimizado para SEO.",
    days: "Día 2 – 6",
    icon: Code2,
  },
  {
    number: "04",
    title: "Revisas",
    description:
      "Te mostramos el sitio en vivo. Ajustes finos hasta que digas: es exactamente esto.",
    days: "Día 6 – 7",
    icon: Eye,
  },
  {
    number: "05",
    title: "Publicamos",
    description:
      "Lo lanzamos, conectamos dominio y analytics, y te dejamos el manual para tu equipo.",
    days: "Día 7",
    icon: Rocket,
  },
];

export type Template = {
  id: string;
  name: string;
  industry: string;
  category: string;
  price: number;
  pages: string;
  seo: string;
  gradient: string;
  accent: string;
  image?: string;
  demo?: string;
  highlight?: boolean;
};

export const templateCategories = [
  "Todas",
  "Abogados",
  "Salud",
  "Restaurantes",
  "Inmobiliaria",
  "Construcción",
  "Consultores",
  "Belleza",
] as const;

export const templates: Template[] = [
  {
    id: "lex",
    name: "Lex",
    industry: "Despachos legales",
    category: "Abogados",
    price: 499,
    pages: "6 páginas",
    seo: "SEO local",
    gradient: "from-[#4A1025] via-[#7A1F3D] to-[#B05273]",
    accent: "bg-[#7A1F3D]",
    image: "/lex.png",
    demo: "/demo/lex",
  },
  {
    id: "vita",
    name: "Vita",
    industry: "Clínicas y médicos",
    category: "Salud",
    price: 499,
    pages: "7 páginas",
    seo: "Reservas + SEO",
    gradient: "from-[#0F3D3E] via-[#146C6A] to-[#4FA8A4]",
    accent: "bg-[#146C6A]",
    image: "/vita.png",
  },
  {
    id: "fuego",
    name: "Fuego",
    industry: "Restaurantes",
    category: "Restaurantes",
    price: 549,
    pages: "5 páginas",
    seo: "Menú digital",
    gradient: "from-[#4A1A0A] via-[#B45309] to-[#E8A35C]",
    accent: "bg-[#B45309]",
    image: "/fuego.png",
    highlight: true,
  },
  {
    id: "vista",
    name: "Vista",
    industry: "Inmobiliarias",
    category: "Inmobiliaria",
    price: 529,
    pages: "8 páginas",
    seo: "Catálogo + leads",
    gradient: "from-[#1E2A5A] via-[#3B4C9A] to-[#7C8FE0]",
    accent: "bg-[#3B4C9A]",
    image: "/vista.png",
  },
  {
    id: "cimento",
    name: "Cimento",
    industry: "Construcción",
    category: "Construcción",
    price: 529,
    pages: "6 páginas",
    seo: "Proyectos + SEO",
    gradient: "from-[#292524] via-[#57534E] to-[#A8A29E]",
    accent: "bg-[#57534E]",
    image: "/cimiento.png",
  },
  {
    id: "aura",
    name: "Aura",
    industry: "Consultores y coaches",
    category: "Consultores",
    price: 449,
    pages: "5 páginas",
    seo: "Reservas de citas",
    gradient: "from-[#3B1A5E] via-[#7C3AED] to-[#C4B5FD]",
    accent: "bg-[#7C3AED]",
  },
  {
    id: "kanna",
    name: "Kanna",
    industry: "Estética y belleza",
    category: "Belleza",
    price: 449,
    pages: "5 páginas",
    seo: "Reservas + SEO",
    gradient: "from-[#5E1A3A] via-[#C0407E] to-[#F2A8CE]",
    accent: "bg-[#C0407E]",
  },
  {
    id: "terra",
    name: "Terra",
    industry: "Gimnasios y bienestar",
    category: "Salud",
    price: 449,
    pages: "6 páginas",
    seo: "Membresías",
    gradient: "from-[#1A3E22] via-[#3E7C4F] to-[#8FC9A0]",
    accent: "bg-[#3E7C4F]",
  },
];

export type Project = {
  id: string;
  name: string;
  industry: string;
  problem: string;
  solution: string;
  result: string;
  resultLabel: string;
  gradient: string;
  visit: string;
};

export const projects: Project[] = [
  {
    id: "monteverde",
    name: "Monteverde Legal",
    industry: "Despacho jurídico · CDMX",
    problem:
      "Un despacho impecable con una presencia online invisible. Dependían del boca a boca y perdían casos ante despachos con mejor posicionamiento.",
    solution:
      "Sitio institucional premium con SEO local, perfiles de abogados y sistema de agendamiento de consultas.",
    result: "212%",
    resultLabel: "más consultas en 60 días",
    gradient: "from-[#4A1025] via-[#7A1F3D] to-[#C0708F]",
    visit: "#contacto",
  },
  {
    id: "dermalux",
    name: "Clínica Dermalux",
    industry: "Estética médica · Guadalajara",
    problem:
      "Reservas solo por teléfono, agenda saturada y pacientes que cancelaban porque no encontraban información clara de precios.",
    solution:
      "Web con catálogo de tratamientos, precios transparentes, reservas en línea y optimización móvil para búsquedas locales.",
    result: "180%",
    resultLabel: "más reservas en línea",
    gradient: "from-[#0F3D3E] via-[#146C6A] to-[#7FC3BE]",
    visit: "#contacto",
  },
  {
    id: "sabor",
    name: "Sabor & Fuego",
    industry: "Restaurante · Monterrey",
    problem:
      "Estaban en Instagram con 20k seguidores, pero el tráfico no llegaba al restaurante. Sin reservas, sin menú digital, sin data.",
    solution:
      "Web con menú digital, reservas, mapa de ubicación y una página que aparece al buscar 'mejor restaurante en Monterrey'.",
    result: "40%",
    resultLabel: "más reservas de mesas",
    gradient: "from-[#4A1A0A] via-[#B45309] to-[#F0BE7E]",
    visit: "#contacto",
  },
  {
    id: "vista",
    name: "Inmobiliaria Vista",
    industry: "Bienes raíces · Querétaro",
    problem:
      "Catálogos en PDF y publicaciones sueltas. Leads dispersos, sin base de datos y sin forma de medir el interés real.",
    solution:
      "Plataforma con catálogo de propiedades, filtros inteligentes, formularios de leads conectados al CRM y tours visuales.",
    result: "3.4x",
    resultLabel: "más leads calificados",
    gradient: "from-[#1E2A5A] via-[#3B4C9A] to-[#9AA8E8]",
    visit: "#contacto",
  },
];

export type ComparisonItem = {
  label: string;
};

export const comparisonWithout = [
  "No apareces en Google",
  "Sin forma de generar confianza",
  "Tu marca vive prestada",
  "Algoritmos que cambian cada mes",
  "Vendes solo cuando publicas",
  "Sin datos de tus clientes",
] as const;

export const comparisonWith = [
  "Apareces cuando te buscan",
  "Transmites confianza en segundos",
  "Tu marca es tuya, siempre",
  "Una web tuya no cambia de algoritmo",
  "Vendes 24/7, incluso dormido",
  "Analytics claros de cada visita",
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Me dijeron 7 días y no lo creí. En el día 7 teníamos el sitio publicado y la primera consulta llegó esa misma semana. Impecable de principio a fin.",
    name: "Laura Andrade",
    role: "Fundadora · Clínica Andrade",
    initials: "LA",
    color: "bg-[#7A1F3D]",
  },
  {
    quote:
      "Pasamos de ser invisibles en Google a aparecer primeros en nuestra zona. Los clientes nos dicen que encontraron el despacho por la página.",
    name: "Ricardo Monteverde",
    role: "Socio · Monteverde Legal",
    initials: "RM",
    color: "bg-[#1E2A5A]",
  },
  {
    quote:
      "Lo que más me sorprendió fue el proceso. Diseño aprobado el día 2, todo transparente. Se nota que son obsesivos con el detalle.",
    name: "Sofía Gutiérrez",
    role: "CEO · Dermalux",
    initials: "SG",
    color: "bg-[#146C6A]",
  },
  {
    quote:
      "Tenía 20k seguidores en Instagram y pocas mesas llenas. Hoy las reservas vienen de la web. Nunca pensé que mi negocio se vería así de profesional.",
    name: "Jorge Esparza",
    role: "Dueño · Sabor & Fuego",
    initials: "JE",
    color: "bg-[#B45309]",
  },
  {
    quote:
      "El equipo entendió el negocio antes de diseñar. No venden páginas, resuelven problemas. Las propiedades ahora se venden más rápido.",
    name: "Mariana Roldán",
    role: "Directora · Inmobiliaria Vista",
    initials: "MR",
    color: "bg-[#3B4C9A]",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "¿De verdad el sitio queda listo en 7 días?",
    answer:
      "Sí. Tenemos un proceso definido en 5 etapas con entregables en cada una. El día 1 hablamos, el día 7 publicamos. La única variable es que tú apruebes cada etapa a tiempo; nosotros nunca la retrasamos.",
  },
  {
    question: "¿Qué incluye el precio del sitio?",
    answer:
      "Diseño a medida, desarrollo, textos orientados a conversión, SEO técnico, formularios, analytics, conexión de dominio y 30 días de soporte post-lanzamiento. Sin costos ocultos ni sorpresas.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "Nada. Tú te encargas de tu negocio; nosotros de la tecnología. Al final recibes el sitio funcionando y una guía sencilla para editarlo si lo necesitas.",
  },
  {
    question: "¿El dominio y el hosting son míos?",
    answer:
      "Sí. El dominio, el hosting y el código quedan registrados a tu nombre desde el día uno. Si algún día decides trabajar con otra agencia, el sitio se va contigo. Así de simple.",
  },
  {
    question: "¿Y el SEO y la publicidad?",
    answer:
      "El sitio incluye SEO técnico y de contenido desde el lanzamiento. Si además quieres anuncios o una estrategia de posicionamiento continua, tenemos planes mensuales de SEO y Ads separados del desarrollo.",
  },
  {
    question: "¿Cómo funcionan los pagos?",
    answer:
      "50% al iniciar y 50% al publicar. Para plantillas del marketplace es pago único con tu web lista en 7 días. Transferencia, tarjeta o PayPal, lo que te sea más cómodo.",
  },
];

export const journey = [
  {
    icon: Flower2,
    title: "Hoy",
    description: "Sin presencia digital, poca confianza y oportunidades que se van a la competencia.",
  },
  {
    icon: Sparkles,
    title: "Rose SEO & Ads",
    description: "Diseño estratégico, desarrollo en 7 días y optimización para convertir visitas en clientes.",
  },
  {
    icon: Rocket,
    title: "Mañana",
    description: "Una marca que inspira confianza, destaca frente a la competencia y está lista para crecer.",
  },
] as const;

export type Stat = {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 7, suffix: " días", label: "de la primera llamada al lanzamiento" },
  { value: 98, suffix: "/100", label: "performance promedio en Lighthouse" },
  { value: 38, suffix: "%", prefix: "+", label: "de conversión media en nuestros clientes" },
];
