// ============================================
// LAS 7 ETAPAS DEL AMOR PROPIO
// ============================================
const etapas = [
  {
    nombre: "Etapa 1 · Darme cuenta",
    icono: "👁️",
    proposito: "Observar cómo me trato, cómo me hablo y qué siento, sin juzgarme.",
    reflexionar: "Fíjate en tus pensamientos automáticos sobre ti. No intentes cambiarlos todavía: solo nótalos.",
    aprender: "Que tus pensamientos no son hechos, y que puedes observarlos desde fuera.",
    preguntas: [
      "¿Qué me dije a mí hoy cuando algo salió mal?",
      "¿En qué momento del día me sentí más yo? ¿Y menos yo?",
      "¿Qué emoción se repitió hoy y dónde la sentí en el cuerpo?",
      "Si alguien me escuchara pensar todo el día, ¿qué diría de cómo me trato?",
      "¿Qué necesidad mía ignoré hoy?",
    ],
    afirmaciones: [
      "Me observo con curiosidad, no con castigo.",
      "Darme cuenta ya es un paso de cambio.",
      "Mis emociones son mensajes, no enemigos.",
    ],
  },
  {
    nombre: "Etapa 2 · Aceptarme",
    icono: "🤲",
    proposito: "Abrazar mi historia, mi cuerpo y mis imperfecciones como parte de quien soy.",
    reflexionar: "Piensa en lo que rechazas de ti. Aceptar no es resignarse: es dejar de pelear con lo que ya es.",
    aprender: "Que puedes querer crecer y, al mismo tiempo, aceptarte tal como estás hoy.",
    preguntas: [
      "¿Qué parte de mí me cuesta aceptar y qué me diría si pudiera hablar?",
      "¿Qué le agradezco hoy a mi cuerpo?",
      "¿Qué error mío puedo mirar hoy con más ternura?",
      "¿Qué rasgo mío otras personas valoran y yo no?",
      "Si me aceptara completamente, ¿qué haría diferente mañana?",
    ],
    afirmaciones: [
      "Soy suficiente tal como soy hoy.",
      "Mis imperfecciones también me hacen real.",
      "Me acepto mientras sigo creciendo.",
    ],
  },
  {
    nombre: "Etapa 3 · Sanar y perdonar",
    icono: "🩹",
    proposito: "Mirar heridas del pasado, soltar la culpa y perdonarme (y perdonar, si lo elijo).",
    reflexionar: "Identifica qué heridas siguen doliendo hoy y qué creencia sobre ti nació de ellas.",
    aprender: "Que hiciste lo mejor que pudiste con lo que sabías y tenías en ese momento.",
    preguntas: [
      "¿Qué recuerdo apareció hoy y qué me hizo sentir?",
      "¿De qué me sigo culpando? ¿Es culpa o es responsabilidad?",
      "¿Qué le diría a mi niña o niño interior si lo tuviera enfrente?",
      "¿Qué creencia sobre mí aprendí de otras personas y ya no quiero cargar?",
      "¿Qué estoy listo/a para soltar, aunque sea un poquito?",
    ],
    afirmaciones: [
      "Me perdono por lo que no sabía.",
      "Mi pasado me explica, pero no me define.",
      "Sanar a mi ritmo también es valiente.",
    ],
  },
  {
    nombre: "Etapa 4 · Poner límites",
    icono: "🛡️",
    proposito: "Proteger mi energía, mi tiempo y mi paz aprendiendo a decir que no.",
    reflexionar: "Observa dónde dijiste que sí queriendo decir que no, y qué sentiste después.",
    aprender: "Que un límite no aleja a quien te quiere bien: te acerca a ti.",
    preguntas: [
      "¿Hubo hoy un momento en el que me traicioné para agradar?",
      "¿Qué situación o persona me drena la energía y qué límite necesito?",
      "¿Qué frase podría usar para decir que no con amor y firmeza?",
      "¿Qué miedo aparece cuando pienso en poner un límite?",
      "¿Dónde me puse a mí en primer lugar hoy?",
    ],
    afirmaciones: [
      "Decir no a otros también es decirme sí a mí.",
      "Mi paz no se negocia.",
      "Puedo amar a otros sin abandonarme.",
    ],
  },
  {
    nombre: "Etapa 5 · Cuidarme",
    icono: "🌿",
    proposito: "Convertir el autocuidado en hábitos: descanso, cuerpo, mente y alegría.",
    reflexionar: "Revisa cómo estás atendiendo tus necesidades básicas: dormir, comer, moverte, descansar, disfrutar.",
    aprender: "Que cuidarte no es egoísmo: es la base para todo lo demás.",
    preguntas: [
      "¿Cómo dormí, comí y me moví hoy? ¿Qué necesita mi cuerpo?",
      "¿Qué hice hoy solo porque me hace feliz?",
      "¿Qué hábito pequeño me haría sentir más en paz esta semana?",
      "¿Cuándo fue la última vez que descansé sin culpa?",
      "¿Qué cosa me nutre el alma y la he dejado de lado?",
    ],
    afirmaciones: [
      "Cuidarme es mi responsabilidad y mi regalo.",
      "Merezco descanso aunque no haya terminado todo.",
      "Cada pequeño cuidado cuenta.",
    ],
  },
  {
    nombre: "Etapa 6 · Mi voz interior",
    icono: "💬",
    proposito: "Transformar a mi crítico interno en una voz compasiva y motivadora.",
    reflexionar: "Escucha la voz que te critica. ¿De quién aprendiste esas palabras? ¿Te ayudan o te hieren?",
    aprender: "Que puedes exigirte con amor en lugar de con miedo.",
    preguntas: [
      "¿Qué frase dura me dije hoy? Ahora reescríbela como se la diría a alguien que amo.",
      "¿Qué logro (aunque sea pequeño) no me reconocí hoy?",
      "¿Cómo me hablaría la versión más sabia y amorosa de mí?",
      "¿Qué pensamiento negativo puedo cuestionar con evidencias?",
      "¿Qué me diría hoy para darme ánimo mañana?",
    ],
    afirmaciones: [
      "Me hablo con el mismo amor que doy a quienes quiero.",
      "Soy mi mejor compañía.",
      "Mi voz interior puede ser mi refugio.",
    ],
  },
  {
    nombre: "Etapa 7 · Florecer",
    icono: "🌸",
    proposito: "Reconocer mi valor, vivir según mis valores y construir la vida que deseo.",
    reflexionar: "Mira el camino recorrido. ¿Quién eres hoy comparado con quien eras al empezar este libro?",
    aprender: "Que tu valor no depende de lo que logras, sino de quien eres.",
    preguntas: [
      "¿Qué valores quiero que guíen mis decisiones?",
      "¿Qué sueño he postergado y qué paso pequeño puedo dar?",
      "¿De qué me siento orgulloso/a de mí en este proceso?",
      "¿Cómo se ve un día en el que me amo plenamente?",
      "¿Qué le escribiría a mi yo del primer día de este libro?",
    ],
    afirmaciones: [
      "Mi valor no se gana, ya me pertenece.",
      "Me elijo, hoy y siempre.",
      "Florezco a mi tiempo.",
    ],
  },
];

const PAGINAS_POR_ETAPA = 7;

// ============================================
// EMOCIONES Y CÓMO ACOMPAÑARLAS
// ============================================
const emociones = {
  "😊 Alegría": {
    validar: "Qué bonito que hoy haya alegría en ti. Permítete disfrutarla sin pensar en cuánto durará.",
    herramienta: "Saborea el momento: cierra los ojos 30 segundos y recuerda qué te hizo sentir así. Guardarlo en tu memoria te ayuda en días difíciles.",
  },
  "😌 Calma": {
    validar: "La calma es un logro. Tu sistema nervioso está descansando y eso es valioso.",
    herramienta: "Aprovecha este estado para planear un acto de cuidado o para agradecer algo de tu día.",
  },
  "🙏 Gratitud": {
    validar: "La gratitud es una forma de mirar tu vida con amor. Estás entrenando tu mente para ver lo bueno.",
    herramienta: "Incluye en tu gratitud algo que tú hiciste: el amor propio también es agradecerte a ti.",
  },
  "😔 Tristeza": {
    validar: "La tristeza no es debilidad: suele aparecer cuando algo importante para ti se perdió o no está como querías. Tiene sentido sentirla.",
    herramienta: "Prueba la pausa de autocompasión: pon una mano en el pecho y di: «Esto duele. El dolor es parte de la vida. Que pueda ser amable conmigo en este momento». No tienes que apresurarte a estar bien.",
  },
  "😰 Ansiedad": {
    validar: "La ansiedad es tu mente intentando protegerte de algo que percibe como amenaza. No estás fallando: tu cuerpo está en alerta.",
    herramienta: "Respira 4-7-8: inhala en 4, sostén en 7, exhala lento en 8. Repite 4 veces. Luego pregúntate: «¿Qué de esto depende de mí hoy?» y enfócate solo en eso.",
  },
  "😠 Enojo": {
    validar: "El enojo suele señalar que un límite tuyo fue cruzado o que algo te pareció injusto. Escúchalo: tiene información.",
    herramienta: "Antes de actuar, mueve el cuerpo (camina, sacude las manos) y luego completa: «Me enojé porque necesitaba…». Esa necesidad es la clave del límite que quizá debes poner.",
  },
  "😟 Miedo": {
    validar: "Sentir miedo no significa que no puedas. La valentía no es no tener miedo, es avanzar con él de la mano.",
    herramienta: "Escribe: «¿Qué es lo peor que podría pasar? ¿Qué tan probable es? ¿Qué haría si pasara?». Verlo en papel suele hacerlo más pequeño.",
  },
  "😞 Culpa": {
    validar: "La culpa muestra que te importa hacer las cosas bien. Pero castigarte no repara nada.",
    herramienta: "Distingue culpa de responsabilidad: ¿hay algo concreto que puedas reparar? Hazlo. Si no, practica decirte: «Me equivoqué, aprendí, y sigo mereciendo amor».",
  },
  "🥀 Soledad": {
    validar: "Sentirse a solas duele, y es una señal humana de que necesitas conexión. No hay nada malo en ti por sentirlo.",
    herramienta: "Da un paso pequeño hacia la conexión: escribe un mensaje a alguien de confianza. Y mientras tanto, acompáñate: haz algo por ti como lo harías por alguien que quieres.",
  },
  "😩 Cansancio": {
    validar: "Tu cansancio es real y merece respeto. No tienes que ganarte el descanso.",
    herramienta: "Elige una sola cosa que puedas soltar o posponer hoy. Descansar también es productivo para el alma.",
  },
  "🤯 Confusión": {
    validar: "La confusión aparece cuando estás en medio de un cambio. Es incómoda, pero muchas veces antecede a la claridad.",
    herramienta: "Escribe tus opciones o pensamientos en una lista, sin ordenarlos. Luego subraya solo lo que sabes con certeza hoy.",
  },
  "💪 Orgullo": {
    validar: "¡Reconocerte es amor propio puro! Te mereces sentirte orgullosa u orgulloso de ti.",
    herramienta: "Anota exactamente qué hiciste bien: tu cerebro aprende de lo que repites y celebras.",
  },
};

// Palabras que indican autocrítica dura, para ofrecer una reformulación
const autocritica = [
  "no sirvo", "no valgo", "soy un fracaso", "soy una fracasada", "soy un fracasado",
  "soy tonta", "soy tonto", "soy inútil", "me odio", "soy fea", "soy feo",
  "nadie me quiere", "no merezco", "todo lo hago mal", "soy un desastre", "nunca hago nada bien",
];

// Palabras que indican riesgo y requieren mostrar ayuda profesional
const riesgo = [
  "suicid", "matarme", "quitarme la vida", "no quiero vivir", "quiero morir", "morirme",
  "hacerme daño", "lastimarme", "cortarme", "desaparecer para siempre", "no vale la pena vivir",
];

// ============================================
// GUARDADO (localStorage)
// ============================================
const CLAVE = "libroAmorPropio";

function leerDatos() {
  try {
    const datos = JSON.parse(localStorage.getItem(CLAVE));
    if (datos && Array.isArray(datos.paginas)) return datos;
  } catch (e) {}
  return { etapaActual: 0, paginas: [] };
}

function guardarDatos(datos) {
  try {
    localStorage.setItem(CLAVE, JSON.stringify(datos));
  } catch (e) {
    alert("No se pudo guardar en este navegador. Descarga tu diario para no perder lo escrito.");
  }
}

let datos = leerDatos();

// ============================================
// UTILIDADES
// ============================================
function hoyISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function elegir(lista, semilla) {
  return lista[semilla % lista.length];
}

function numeroDelDia() {
  return Math.floor(Date.now() / 86400000);
}

function escapar(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function paginasDeEtapa(indice) {
  return datos.paginas.filter((p) => p.etapa === indice).length;
}

function contiene(texto, lista) {
  const t = texto.toLowerCase();
  return lista.some((palabra) => t.includes(palabra));
}

// ============================================
// NAVEGACIÓN
// ============================================
document.querySelectorAll(".pestana").forEach((boton) => {
  boton.addEventListener("click", () => mostrarVista(boton.dataset.vista));
});

function mostrarVista(id) {
  document.querySelectorAll(".pestana").forEach((b) => b.classList.toggle("activa", b.dataset.vista === id));
  document.querySelectorAll(".vista").forEach((v) => v.classList.toggle("activa", v.id === id));
  if (id === "vista-etapas") pintarEtapas();
  if (id === "vista-diario") pintarDiario();
  window.scrollTo(0, 0);
}

// ============================================
// PÁGINA DE HOY
// ============================================
const formulario = document.getElementById("formulario");
const intensidad = document.getElementById("intensidad");
let emocionesElegidas = [];

function pintarHoy() {
  const etapa = etapas[datos.etapaActual];
  const hechas = paginasDeEtapa(datos.etapaActual);
  const dia = numeroDelDia() + hechas;

  document.getElementById("cabecera-etapa").innerHTML = `
    <h2>${etapa.icono} ${etapa.nombre}</h2>
    <p><strong>Propósito:</strong> ${etapa.proposito}</p>
    <p><strong>Hoy reflexiona en:</strong> ${etapa.reflexionar}</p>
    <p><em>Página ${hechas + 1} de esta etapa</em></p>
  `;
  document.getElementById("pregunta-etapa").textContent = elegir(etapa.preguntas, dia);
  document.getElementById("afirmacion").value = elegir(etapa.afirmaciones, dia);
  document.getElementById("fecha").value = hoyISO();

  const contenedor = document.getElementById("emociones");
  contenedor.innerHTML = "";
  Object.keys(emociones).forEach((nombre) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "emocion";
    b.textContent = nombre;
    b.addEventListener("click", () => {
      b.classList.toggle("elegida");
      emocionesElegidas = [...contenedor.querySelectorAll(".elegida")].map((x) => x.textContent);
    });
    contenedor.appendChild(b);
  });
  emocionesElegidas = [];
}

intensidad.addEventListener("input", () => {
  document.getElementById("intensidad-valor").textContent = intensidad.value;
});

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const pagina = {
    id: Date.now(),
    fecha: document.getElementById("fecha").value,
    etapa: datos.etapaActual,
    emociones: emocionesElegidas,
    intensidad: Number(intensidad.value),
    vivencia: document.getElementById("vivencia").value.trim(),
    pregunta: document.getElementById("pregunta-etapa").textContent,
    reflexion: document.getElementById("reflexion").value.trim(),
    aprendido: document.getElementById("aprendido").value.trim(),
    falta: document.getElementById("falta").value.trim(),
    valoro: [...document.querySelectorAll(".valoro")].map((i) => i.value.trim()).filter(Boolean),
    afirmacion: document.getElementById("afirmacion").value.trim(),
    acto: document.getElementById("acto").value.trim(),
  };

  datos.paginas.push(pagina);
  guardarDatos(datos);

  mostrarAcompanamiento(pagina);
  formulario.reset();
  intensidad.value = 5;
  document.getElementById("intensidad-valor").textContent = "5";
  pintarHoy();
});

// ============================================
// ACOMPAÑAMIENTO PSICOLÓGICO
// ============================================
function mostrarAcompanamiento(p) {
  const etapa = etapas[p.etapa];
  const todoElTexto = [p.vivencia, p.reflexion, p.aprendido, p.falta].join(" ");
  let html = `<h2>🤍 Mi acompañamiento para ti</h2>`;

  // 1. Seguridad primero
  if (contiene(todoElTexto, riesgo)) {
    html += `
      <div class="bloque alerta">
        <strong>Lo que escribiste me importa mucho.</strong>
        <p>Si estás pensando en hacerte daño o en no seguir viviendo, no tienes que cargar esto a solas. Por favor, habla hoy con alguien de confianza o llama a una línea de ayuda (en la pestaña <em>"Si necesito apoyo"</em> tienes los números). Mereces ayuda y mereces estar aquí.</p>
      </div>`;
  }

  // 2. Validar emociones
  if (p.emociones.length > 0) {
    html += `<div class="bloque"><h3>Lo que sientes</h3>`;
    p.emociones.forEach((nombre) => {
      const e = emociones[nombre];
      html += `<p><strong>${nombre}:</strong> ${e.validar}</p><p>👉 ${e.herramienta}</p>`;
    });
    if (p.intensidad >= 8) {
      html += `<p>Hoy lo que sientes es muy intenso (${p.intensidad}/10). Antes de exigirte nada, baja el ritmo: agua, respiración lenta y, si puedes, contarle a alguien cómo estás.</p>`;
    }
    html += `</div>`;
  } else {
    html += `<div class="bloque"><p>Hoy no nombraste emociones. Está bien. Mañana intenta preguntarte: «Si mi cuerpo hablara, ¿qué diría que siento?».</p></div>`;
  }

  // 3. Lo que está viviendo
  if (p.vivencia) {
    html += `
      <div class="bloque"><h3>Lo que estás viviendo</h3>
        <p class="cita">«${escapar(p.vivencia)}»</p>
        <p>Gracias por ponerlo en palabras: escribir lo que vives le da orden a la mente y le quita peso al corazón. Pregúntate: <strong>¿qué parte de esto puedo controlar, qué parte puedo influir y qué parte debo soltar?</strong> Pon tu energía solo en las dos primeras.</p>
      </div>`;
  }

  // 4. Autocrítica
  if (contiene(todoElTexto, autocritica)) {
    html += `
      <div class="bloque"><h3>Tu voz interior</h3>
        <p>Noté que hoy te hablaste con dureza. Esa voz no dice la verdad sobre ti: es una costumbre aprendida. Hazte esta pregunta: <strong>¿le hablarías así a alguien que amas?</strong></p>
        <p>Reescribe esa frase como si fuera para esa persona querida. Por ejemplo: en lugar de «no sirvo», «hoy me costó, y eso no me quita valor».</p>
      </div>`;
  }

  // 5. Aprendido y lo que falta
  html += `<div class="bloque"><h3>Lo que aprendiste y lo que te falta</h3>`;
  if (p.aprendido) {
    html += `<p class="cita">Aprendí: «${escapar(p.aprendido)}»</p>
      <p>Esto es crecimiento real. Celébralo: el cerebro fortalece lo que reconocemos.</p>`;
  } else {
    html += `<p>Hoy no anotaste un aprendizaje. Recuerda que en esta etapa la meta es aprender esto: <em>${etapa.aprender}</em></p>`;
  }
  if (p.falta) {
    html += `<p class="cita">Me falta: «${escapar(p.falta)}»</p>
      <p>Ver lo que falta no es un fracaso, es tu mapa. Conviértelo en un paso tan pequeño que sea imposible fallar: <strong>¿qué podrías hacer mañana durante solo 5 minutos para acercarte a eso?</strong></p>`;
  } else {
    html += `<p>No escribiste qué te falta. Para tu próxima página, pregúntate: «¿Qué necesito más de mí misma/o?».</p>`;
  }
  html += `</div>`;

  // 6. Lo que valora de sí
  if (p.valoro.length < 3) {
    html += `<div class="bloque"><p>Te costó encontrar tres cosas que valoras de ti${p.valoro.length ? "" : " (o no escribiste ninguna)"}. Es muy común cuando el amor propio está creciendo. Empieza por lo pequeño: tu esfuerzo, tu sensibilidad, que hoy estés aquí escribiendo.</p></div>`;
  } else {
    html += `<div class="bloque"><p>Reconociste tres cualidades tuyas: <strong>${p.valoro.map(escapar).join(", ")}</strong>. Léelas en voz alta antes de dormir.</p></div>`;
  }

  // 7. Cierre y progreso de etapa
  const hechas = paginasDeEtapa(p.etapa);
  html += `<div class="bloque"><h3>Tu camino</h3>`;
  if (p.acto) html += `<p>Mañana te regalarás: <strong>${escapar(p.acto)}</strong>. Cumplirte promesas pequeñas construye confianza en ti.</p>`;
  if (p.afirmacion) html += `<p class="cita">${escapar(p.afirmacion)}</p>`;
  html += `<p>Llevas <strong>${hechas}</strong> página(s) en ${etapa.nombre}.</p>`;

  if (hechas >= PAGINAS_POR_ETAPA && p.etapa < etapas.length - 1) {
    html += `<p>✨ Ya completaste las ${PAGINAS_POR_ETAPA} páginas sugeridas de esta etapa. Pregúntate con honestidad: <em>¿siento que ${etapa.aprender.charAt(0).toLowerCase() + etapa.aprender.slice(1)}</em> Si la respuesta es sí, puedes avanzar.</p>
      <button class="boton" id="avanzar">Avanzar a ${etapas[p.etapa + 1].nombre}</button>
      <p><small>Si no, quédate aquí el tiempo que necesites. No hay prisa.</small></p>`;
  } else if (hechas >= PAGINAS_POR_ETAPA) {
    html += `<p>🌸 Has recorrido todas las etapas. Puedes seguir escribiendo aquí o volver a cualquier etapa: cada vuelta la vivirás desde un lugar nuevo.</p>`;
  }
  html += `</div>`;

  const caja = document.getElementById("acompanamiento");
  caja.innerHTML = html;
  caja.classList.remove("oculto");

  const avanzar = document.getElementById("avanzar");
  if (avanzar) avanzar.addEventListener("click", () => cambiarEtapa(p.etapa + 1));

  caja.scrollIntoView({ behavior: "smooth" });
}

// ============================================
// ETAPAS
// ============================================
function cambiarEtapa(indice) {
  datos.etapaActual = indice;
  guardarDatos(datos);
  document.getElementById("acompanamiento").classList.add("oculto");
  pintarHoy();
  mostrarVista("vista-hoy");
}

function pintarEtapas() {
  const lista = document.getElementById("lista-etapas");
  lista.innerHTML = "";
  etapas.forEach((etapa, i) => {
    const hechas = paginasDeEtapa(i);
    const porcentaje = Math.min(100, Math.round((hechas / PAGINAS_POR_ETAPA) * 100));
    const div = document.createElement("div");
    div.className = "etapa" + (i === datos.etapaActual ? " actual" : "");
    div.innerHTML = `
      <h3>${etapa.icono} ${etapa.nombre}${i === datos.etapaActual ? " · (estás aquí)" : ""}</h3>
      <p>${etapa.proposito}</p>
      <p><strong>En qué reflexionar:</strong> ${etapa.reflexionar}</p>
      <p><strong>Lo que vas a aprender:</strong> ${etapa.aprender}</p>
      <div class="barra"><div style="width:${porcentaje}%"></div></div>
      <small>${hechas} de ${PAGINAS_POR_ETAPA} páginas sugeridas</small>
    `;
    if (i !== datos.etapaActual) {
      const b = document.createElement("button");
      b.className = "boton secundario";
      b.textContent = "Trabajar en esta etapa";
      b.style.display = "block";
      b.style.marginTop = "10px";
      b.addEventListener("click", () => cambiarEtapa(i));
      div.appendChild(b);
    }
    lista.appendChild(div);
  });
}

// ============================================
// DIARIO
// ============================================
function pintarDiario() {
  const paginas = [...datos.paginas].reverse();
  const conteo = {};
  datos.paginas.forEach((p) => p.emociones.forEach((e) => (conteo[e] = (conteo[e] || 0) + 1)));
  const masFrecuente = Object.keys(conteo).sort((a, b) => conteo[b] - conteo[a])[0];

  document.getElementById("resumen").innerHTML = `
    <div class="dato"><strong>${datos.paginas.length}</strong>páginas escritas</div>
    <div class="dato"><strong>${datos.etapaActual + 1}/7</strong>etapa actual</div>
    <div class="dato"><strong>${masFrecuente ? masFrecuente.split(" ")[0] : "—"}</strong>emoción más frecuente</div>
  `;

  const lista = document.getElementById("lista-paginas");
  if (paginas.length === 0) {
    lista.innerHTML = "<p>Aún no has escrito ninguna página. Tu historia empieza hoy. 🌱</p>";
    return;
  }

  lista.innerHTML = "";
  paginas.forEach((p) => {
    const div = document.createElement("div");
    div.className = "pagina";
    div.innerHTML = `
      <details>
        <summary>${p.fecha} · ${etapas[p.etapa].icono} ${etapas[p.etapa].nombre} ${p.emociones.map((e) => e.split(" ")[0]).join(" ")}</summary>
        ${p.emociones.length ? `<p><strong>Sentí:</strong> ${p.emociones.join(", ")} (${p.intensidad}/10)</p>` : ""}
        ${p.vivencia ? `<p><strong>Lo que viví:</strong> ${escapar(p.vivencia)}</p>` : ""}
        ${p.reflexion ? `<p><strong>${escapar(p.pregunta)}</strong><br>${escapar(p.reflexion)}</p>` : ""}
        ${p.aprendido ? `<p><strong>Aprendí:</strong> ${escapar(p.aprendido)}</p>` : ""}
        ${p.falta ? `<p><strong>Me falta:</strong> ${escapar(p.falta)}</p>` : ""}
        ${p.valoro.length ? `<p><strong>Valoro de mí:</strong> ${p.valoro.map(escapar).join(", ")}</p>` : ""}
        ${p.afirmacion ? `<p><strong>Afirmación:</strong> ${escapar(p.afirmacion)}</p>` : ""}
        ${p.acto ? `<p><strong>Acto de amor propio:</strong> ${escapar(p.acto)}</p>` : ""}
        <button class="borrar">Borrar esta página</button>
      </details>
    `;
    div.querySelector(".borrar").addEventListener("click", () => {
      if (confirm("¿Seguro que quieres borrar esta página?")) {
        datos.paginas = datos.paginas.filter((x) => x.id !== p.id);
        guardarDatos(datos);
        pintarDiario();
      }
    });
    lista.appendChild(div);
  });
}

document.getElementById("exportar").addEventListener("click", () => {
  const texto = datos.paginas
    .map((p) => [
      `📅 ${p.fecha} — ${etapas[p.etapa].nombre}`,
      `Sentí: ${p.emociones.join(", ") || "—"} (${p.intensidad}/10)`,
      `Lo que viví: ${p.vivencia || "—"}`,
      `${p.pregunta}: ${p.reflexion || "—"}`,
      `Aprendí: ${p.aprendido || "—"}`,
      `Me falta: ${p.falta || "—"}`,
      `Valoro de mí: ${p.valoro.join(", ") || "—"}`,
      `Afirmación: ${p.afirmacion || "—"}`,
      `Acto de amor propio: ${p.acto || "—"}`,
    ].join("\n"))
    .join("\n\n----------------------------\n\n");

  const archivo = new Blob(["MI LIBRO DE AMOR PROPIO\n\n" + texto], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(archivo);
  enlace.download = "mi-libro-de-amor-propio.txt";
  enlace.click();
});

// ============================================
// INICIO
// ============================================
pintarHoy();
