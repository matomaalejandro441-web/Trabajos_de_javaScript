// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

"use strict";

const DOMAIN_NAME = "CrowdBrick — Proyectos Inmobiliarios";
const VALUE_LABEL = "proyectos";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  {
    id: 1,
    name:        "Torre Reserva 85",
    tipo:        "apartamentos",
    ciudad:      "Bogotá",
    valorMeta:   850_000_000,
    recaudado:   620_000_000,
    rendimiento: 12.5,
    activo:      true,
  },
  {
    id: 2,
    name:        "Centro Comercial Palma",
    tipo:        "comercial",
    ciudad:      "Medellín",
    valorMeta:   2_500_000_000,
    recaudado:   2_500_000_000,
    rendimiento: 9.8,
    activo:      false,
  },
  {
    id: 3,
    name:        "Bodega Industrial Zona Franca",
    tipo:        "industrial",
    ciudad:      "Barranquilla",
    valorMeta:   1_200_000_000,
    recaudado:   430_000_000,
    rendimiento: 11.2,
    activo:      true,
  },
  {
    id: 4,
    name:        "Conjunto Campestre Las Acacias",
    tipo:        "casas",
    ciudad:      "Pereira",
    valorMeta:   600_000_000,
    recaudado:   598_000_000,
    rendimiento: 14.0,
    activo:      true,
  },
  {
    id: 5,
    name:        "Oficinas Coworking 360",
    tipo:        "oficinas",
    ciudad:      "Cali",
    valorMeta:   450_000_000,
    recaudado:   95_000_000,
    rendimiento: 10.5,
    activo:      true,
  },
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`✚ Proyecto agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const eliminado = items.pop();
  console.log(`✖ Último proyecto eliminado: ${eliminado.name}`);
  return eliminado;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`⭐ Proyecto prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const eliminado = items.splice(index, 1)[0];
  console.log(`✖ Proyecto eliminado en posición ${index}: ${eliminado.name}`);
};

const getActiveItems = () =>
  items.filter((proyecto) => proyecto.activo === true);

const findByName = (name) =>
  items.find((proyecto) => proyecto.name === name);

// BONUS: verifica si un nombre ya existe antes de agregar
const existeProyecto = (name) => {
  const nombres = items.map((p) => p.name);
  return nombres.includes(name);
};

const formatCOP = (valor) =>
  `$${valor.toLocaleString("es-CO")} COP`;

const formatItem = (proyecto) => {
  const progreso = ((proyecto.recaudado / proyecto.valorMeta) * 100).toFixed(1);
  const estado   = proyecto.activo ? "🟢 ABIERTO" : "🔴 CERRADO";
  return (
    `[${proyecto.id}] ${proyecto.name} | ${estado} | ` +
    `${proyecto.tipo} — ${proyecto.ciudad} | ` +
    `Meta: ${formatCOP(proyecto.valorMeta)} | ` +
    `Progreso: ${progreso}% | ` +
    `Rendimiento: ${proyecto.rendimiento}% anual`
  );
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(60)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(60)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):\n`);
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

// BONUS includes: verificar antes de agregar
const nuevoNombre = "Parque Logístico El Dorado";
if (existeProyecto(nuevoNombre)) {
  console.log(`⚠️  El proyecto "${nuevoNombre}" ya existe en el inventario.`);
} else {
  addItem({
    id:          6,
    name:        nuevoNombre,
    tipo:        "logístico",
    ciudad:      "Bogotá",
    valorMeta:   980_000_000,
    recaudado:   120_000_000,
    rendimiento: 13.0,
    activo:      true,
  });
}

// BONUS includes: intentar agregar un proyecto duplicado
const nombreDuplicado = "Torre Reserva 85";
if (existeProyecto(nombreDuplicado)) {
  console.log(`⚠️  El proyecto "${nombreDuplicado}" ya existe — no se agregó.`);
} else {
  addItem({ id: 7, name: nombreDuplicado, activo: true });
}

// Agregar proyecto prioritario al inicio
addPriorityItem({
  id:          0,
  name:        "Edificio Platinum — Lanzamiento",
  tipo:        "apartamentos",
  ciudad:      "Bogotá",
  valorMeta:   3_000_000_000,
  recaudado:   0,
  rendimiento: 15.5,
  activo:      true,
});

// Eliminar el proyecto en posición 3
removeByIndex(3);

// Eliminar el último proyecto
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

// find: buscar proyecto por nombre
const encontrado = findByName("Torre Reserva 85");
console.log(
  encontrado
    ? `🔍 Proyecto encontrado: ${encontrado.name} (${encontrado.ciudad})`
    : "🔍 Proyecto no encontrado"
);

// filter: proyectos activos
const activos = getActiveItems();
console.log(`\n✅ Proyectos activos: ${activos.length} / ${items.length}`);
activos.forEach((p) => console.log(`   • ${p.name}`));

// Snapshot inmutable con spread
const snapshot = [...items, {
  id:          99,
  name:        "Proyecto Demo (solo snapshot)",
  tipo:        "demo",
  ciudad:      "Virtual",
  valorMeta:   100_000_000,
  recaudado:   0,
  rendimiento: 0,
  activo:      false,
}];
console.log(`\n📸 Snapshot (sin modificar items): ${snapshot.length} proyectos`);
console.log(`   items original sigue con: ${items.length} proyectos`);

console.log("\n--- Transformación con map ---\n");

// Map 1: solo nombres
const nombres = items.map((p) => p.name);
console.log("📝 Nombres de proyectos:");
nombres.forEach((n) => console.log(`   • ${n}`));

// Map 2: rendimientos con bonificación del +2%
const rendimientosConBonus = items.map((p) => ({
  nombre:              p.name,
  rendimientoOriginal: `${p.rendimiento}%`,
  rendimientoConBonus: `${(p.rendimiento + 2).toFixed(1)}%`,
}));
console.log("\n📈 Rendimientos con bonificación digital (+2%):");
rendimientosConBonus.forEach((r) =>
  console.log(`   • ${r.nombre}: ${r.rendimientoOriginal} → ${r.rendimientoConBonus}`)
);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

const totalRecaudado = items.reduce((acc, p) => acc + p.recaudado, 0);
console.log(`💰 Total recaudado en plataforma: ${formatCOP(totalRecaudado)}`);

console.log(`\n${"=".repeat(60)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(60)}\n`);