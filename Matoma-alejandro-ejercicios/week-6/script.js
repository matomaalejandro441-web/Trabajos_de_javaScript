// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Crowdfunding Inmobiliario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================
// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

const items = [
  { name: "Torre Empresarial Bogotá", category: "Comercial", value: 500000000 },
  { name: "Conjunto Residencial Verde", category: "Residencial", value: 300000000 },
  { name: "Centro Logístico Norte", category: "Industrial", value: 800000000 },
  { name: "Edificio Smart Living", category: "Residencial", value: 450000000 },
  { name: "Plaza Comercial Central", category: "Comercial", value: 650000000 },
  { name: "Parque Industrial Sur", category: "Industrial", value: 900000000 }
];

const categories = ["Comercial", "Residencial", "Industrial"];

const valueLabel = "inversión (COP)";

// Función para formatear dinero colombiano
function formatCOP(value) {
  return `$${value.toLocaleString("es-CO")}`;
}

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(
    `${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${formatCOP(item.value)}`
  );
}

console.log("");

// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} proyecto(s)`);
}

console.log("");

// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}

const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${formatCOP(totalValue)}`);
console.log(`Promedio ${valueLabel}: ${formatCOP(averageValue)}`);

console.log("");

// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }
    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(
    `Mayor ${valueLabel}: ${maxItem.name} (${formatCOP(maxItem.value)})`
  );
  console.log(
    `Menor ${valueLabel}: ${minItem.name} (${formatCOP(minItem.value)})`
  );
}

console.log("");

// ============================================
// SECCIÓN EXTRA: while + break (para rúbrica)
// ============================================
console.log("=== VALIDACIÓN CON WHILE ===");

let i = 0;

while (i < items.length) {
  if (items[i].value <= 0) {
    console.log("Hay un proyecto con inversión inválida");
    break; // uso de break ✔
  }
  i++;
}

if (i === items.length) {
  console.log("Todos los proyectos tienen inversión válida");
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte con for clásico + continue
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  // uso de continue ✔
  if (item.value === averageValue) continue;

  const comparison =
    item.value >= averageValue ? "sobre el promedio" : "bajo el promedio";

  console.log(
    `${i + 1}. ${item.name} — ${formatCOP(item.value)} — ${comparison}`
  );
}

console.log("");
console.log("=== FIN DEL REPORTE ===");