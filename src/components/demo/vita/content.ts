export const services: {
  title: string;
  description: string;
  img: string;
}[] = [
  {
    title: "Chequeo preventivo",
    description:
      "Una mirada completa a tu salud antes de que aparezca el problema.",
    img: "/vita/serv-chequeo.jpg",
  },
  {
    title: "Medicina familiar",
    description:
      "El mismo médico para toda la familia. Conoce tu historia y la de los tuyos.",
    img: "/vita/serv-familiar.jpg",
  },
  {
    title: "Telemedicina",
    description:
      "Controles simples por video, con el médico que ya te conoce.",
    img: "/vita/serv-telemedicina.jpg",
  },
  {
    title: "Imagenología",
    description:
      "Ecografías y radiografías con informe el mismo día, sin derivaciones.",
    img: "/vita/serv-imagenologia.jpg",
  },
  {
    title: "Laboratorio",
    description:
      "Muestras por la mañana, resultados antes de que termine el día.",
    img: "/vita/serv-laboratorio.jpg",
  },
  {
    title: "Urgencias",
    description:
      "Atención de baja complejidad todos los días, sin esperas eternas.",
    img: "/vita/serv-urgencias.jpg",
  },
];

export const specialties = [
  {
    n: "01",
    name: "Cardiología",
    tagline: "Prevenir antes de tratar.",
    img: "/vita/esp-cardio.jpg",
  },
  {
    n: "02",
    name: "Ginecología",
    tagline: "Atención integral en cada etapa.",
    img: "/vita/esp-gineco.jpg",
  },
  {
    n: "03",
    name: "Pediatría",
    tagline: "Crecer bien, crecer tranquilos.",
    img: "/vita/esp-pedia.jpg",
  },
  {
    n: "04",
    name: "Traumatología",
    tagline: "Volver a moverse sin miedo.",
    img: "/vita/esp-trauma.jpg",
  },
  {
    n: "05",
    name: "Dermatología",
    tagline: "Tu piel, bajo control.",
    img: "/vita/esp-derma.jpg",
  },
  {
    n: "06",
    name: "Salud Mental",
    tagline: "Escuchar también es tratamiento.",
    img: "/vita/esp-mental.jpg",
  },
];

export const thirtyMinutes = [
  {
    time: "00:00",
    title: "Conocer tu motivo",
    note: "Sin prisa, sin reloj. Parte por lo que a ti te preocupa.",
  },
  {
    time: "07:30",
    title: "Revisar tu historia",
    note: "Tu médico ya te conoce: no empiezas desde cero.",
  },
  {
    time: "15:00",
    title: "Evaluar",
    note: "Examen físico y lectura de tus antecedentes.",
  },
  {
    time: "22:30",
    title: "Explicar",
    note: "Qué está pasando, en palabras simples.",
  },
  {
    time: "30:00",
    title: "Definir qué sigue",
    note: "Un plan claro, escrito y entendido por ti.",
  },
];

export const dayPlan = [
  { time: "08:45", title: "Llegas", note: "Te esperamos sin filas: tu hora ya está reservada." },
  { time: "09:00", title: "Consulta", note: "30 minutos completos con tu médico." },
  { time: "09:30", title: "Examen", note: "Imagenología o laboratorio en el mismo piso." },
  { time: "10:15", title: "Resultados", note: "Informe listo, leído y comentado." },
  { time: "10:30", title: "Plan médico", note: "Sales sabiendo exactamente qué sigue." },
];

export const acompanamiento = [
  {
    n: "01",
    kind: "Prevención cardiovascular",
    title: "Controles que se cumplen, sin darte excusas",
    story:
      "Un paciente con factores de riesgo y una agenda imposible. Su médico coordinó monitoreo, exámenes y controles por video en horarios que él sí podía cumplir. Cada control continuaba el anterior.",
  },
  {
    n: "02",
    kind: "Control de salud familiar",
    title: "Una sola historia para toda la familia",
    story:
      "Padres con dudas sobre su hija, la abuela con controles crónicos y ellos sin médico de cabecera. Ahora toda la familia se atiende con la misma médica, y cada consulta suma al mismo expediente.",
  },
  {
    n: "03",
    kind: "Seguimiento maternal",
    title: "Un embarazo acompañado de principio a fin",
    story:
      "Primer embarazo, muchas preguntas y miedo a perderse entre especialistas. Una médica coordinadora, ecografías programadas y un canal directo para cada duda, hasta el parto y después.",
  },
];

export const team = [
  {
    name: "Dra. Valentina Soto",
    role: "Directora Médica",
    specialty: "Medicina Familiar",
    bio: "Especialista en medicina familiar y prevención. Ve a cada paciente como una historia completa, no como una ficha.",
    exp: "14 años de experiencia",
    img: "/vita/team-soto.jpg",
  },
  {
    name: "Dr. Nicolás Paredes",
    role: "Cardiología",
    specialty: "Prevención cardiovascular",
    bio: "Cardiólogo de dedicación clínica. Le interesa más tu próxima década que tu próximo examen.",
    exp: "11 años de experiencia",
    img: "/vita/team-paredes.jpg",
  },
  {
    name: "Dra. Antonia Rivas",
    role: "Ginecología y Obstetricia",
    specialty: "Salud integral de la mujer",
    bio: "Acompaña a sus pacientes en cada etapa, con consultas que no se miden en minutos sino en tranquilidad.",
    exp: "9 años de experiencia",
    img: "/vita/team-rivas.jpg",
  },
  {
    name: "Dr. Tomás Vega",
    role: "Traumatología",
    specialty: "Medicina deportiva",
    bio: "Ayuda a sus pacientes a volver a moverse. Cada plan de recuperación lo explica hasta que no quedan dudas.",
    exp: "8 años de experiencia",
    img: "/vita/team-vega.jpg",
  },
];

export const values = [
  {
    n: "01",
    title: "Consultas de 30 minutos",
    description:
      "Tu médico escucha, revisa tu historia completa y responde todas tus preguntas.",
  },
  {
    n: "02",
    title: "Resultados el mismo día",
    description:
      "Laboratorio e imagenología propios: resultados antes de que termine el día.",
  },
  {
    n: "03",
    title: "Telemedicina sin esperas",
    description:
      "Controles simples por video con el mismo médico que te atiende en persona.",
  },
  {
    n: "04",
    title: "Precios publicados",
    description:
      "El valor de cada consulta y examen está en nuestra web. Sin cargos sorpresa.",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuesta una consulta?",
    a: "El valor está publicado en nuestra web, desde $35.000 CLP. Sabes el total antes de agendar, sin cargos sorpresa.",
  },
  {
    q: "¿Aceptan Fonasa e isapres?",
    a: "Sí. Tenemos convenio con las principales isapres y emitimos bonos Fonasa. Al agendar validamos tu cobertura.",
  },
  {
    q: "¿Cómo funcionan las teleconsultas?",
    a: "Agendas por la web y recibes un enlace de video. Tu médico accede a tu historia clínica y puede emitir recetas digitales al instante.",
  },
  {
    q: "¿Cuándo entregan resultados de exámenes?",
    a: "El laboratorio es propio: si tomas tu muestra antes de las 12:00, recibes los resultados el mismo día. Imagenología en 24 horas.",
  },
  {
    q: "¿Atienden urgencias?",
    a: "Urgencias de baja complejidad todos los días del año, con tiempos de espera promedio bajo los 15 minutos.",
  },
  {
    q: "¿Puedo cambiar de médico si no me siento cómodo?",
    a: "Por supuesto, y sin costo adicional. La confianza con tu médico es parte del tratamiento.",
  },
];

export const clinic = {
  address: "Av. Isidora Goyenechea 3000 · Las Condes",
  hours: ["Lun – Vie: 08:00 – 18:00", "Sáb: 09:00 – 13:00"],
  phone: "+56 2 2345 6789",
  phoneHref: "tel:+56223456789",
  email: "hola@vitaclinica.cl",
  whatsapp: "https://wa.me/56927303676",
};
