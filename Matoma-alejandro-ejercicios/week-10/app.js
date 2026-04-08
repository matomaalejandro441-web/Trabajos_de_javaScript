// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// Dominio: Crowdfunding Inmobiliario — CrowdBrick
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

const DOMAIN_NAME = "CrowdBrick — Plataforma Inmobiliaria";
const VALUE_LABEL = "proyectos";
const MAX_ITEMS   = 1_000;
const CURRENCY    = "COP";

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================

const items = [
  {
    id:          1,
    name:        "Torre Reserva 85",
    tipo:        "apartamentos",
    ciudad:      "Bogotá",
    valorMeta:   850_000_000,
    rendimiento: 12.5,
    activo:      true,
    destacado:   true,           // propiedad opcional
  },
  {
    id:          2,
    name:        "Centro Comercial Palma",
    tipo:        "comercial",
    ciudad:      "Medellín",
    valorMeta:   2_500_000_000,
    rendimiento: 9.8,
    activo:      false,
    fechaCierre: "2024-11-30",   // propiedad opcional
  },
  {
    id:          3,
    name:        "Bodega Industrial Zona Franca",
    tipo:        "industrial",
    ciudad:      "Barranquilla",
    valorMeta:   1_200_000_000,
    rendimiento: 11.2,
    activo:      true,
  },
  {
    id:          4,
    name:        "Conjunto Campestre Las Acacias",
    tipo:        "casas",
    ciudad:      "Pereira",
    valorMeta:   600_000_000,
    rendimiento: 14.0,
    activo:      true,
    destacado:   true,           // propiedad opcional
  },
  {
    id:          5,
    name:        "Oficinas Coworking 360",
    tipo:        "oficinas",
    ciudad:      "Cali",
    valorMeta:   450_000_000,
    rendimiento: 10.5,
    activo:      true,
  },
  {
    id:          6,
    name:        "Parque Logístico El Dorado",
    tipo:        "logístico",
    ciudad:      "Bogotá",
    valorMeta:   980_000_000,
    rendimiento: 13.0,
    activo:      true,
    fechaCierre: "2025-06-30",   // propiedad opcional
  },
];

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

const formatCOP = (valor) =>
  `$${valor.toLocaleString("es-CO")} ${CURRENCY}`;

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log(`⚠️  Límite alcanzado: no se pueden agregar más de ${MAX_ITEMS} proyectos.`);
    return;
  }
  items.push(item);
  console.log(`✚ Proyecto agregado: ${item.name} (id: ${item.id})`);
};

const findById = (id) =>
  items.find((p) => p.id === id);

const getActive = () =>
  items.filter((p) => p.activo === true);

// filter() por campo y valor — criterio genérico
const filterByField = (field, value) =>
  items.filter((p) => p[field] === value);

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

// Actualización inmutable con spread
const updateItem = (id, changes) =>
  items.map((item) =>
    item.id === id ? { ...item, ...changes } : item
  );

// Estadísticas de un campo numérico
const calculateStats = (field) => {
  const values = items.map((p) => p[field]);
  const total  = values.reduce((sum, v) => sum + v, 0);
  const avg    = total / values.length;
  const min    = Math.min(...values);
  const max    = Math.max(...values);
  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

const formatItem = (item) => {
  const estado   = item.activo ? "🟢" : "🔴";
  const extra    = item.destacado ? " ⭐" : item.fechaCierre ? ` 📅 ${item.fechaCierre}` : "";
  return (
    `${estado} [${String(item.id).padStart(2, "0")}] ` +
    `${item.name.padEnd(38)} ` +
    `${item.tipo.padEnd(14)} ` +
    `${item.ciudad.padEnd(14)} ` +
    `${String(item.rendimiento).padStart(5)}% anual` +
    extra
  );
};

const buildReport = () => {
  console.log("\n" + "=".repeat(65));
  console.log(`  📦 REPORTE — ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(65));

  // Listado completo
  console.log(`\n📋 Listado completo (${items.length} ${VALUE_LABEL}):\n`);
  items.forEach((item) => console.log(`  ${formatItem(item)}`));

  // Activos vs inactivos
  const activos   = getActive();
  const inactivos = items.length - activos.length;
  console.log(`\n✅ Activos  : ${activos.length}`);
  console.log(`🔴 Inactivos: ${inactivos}`);

  // Estadísticas de rendimiento
  const statsRend = calculateStats("rendimiento");
  console.log(`\n📊 Estadísticas de rendimiento anual:`);
  console.log(`   Mínimo  : ${statsRend.min}%`);
  console.log(`   Máximo  : ${statsRend.max}%`);
  console.log(`   Promedio: ${statsRend.avg.toFixed(2)}%`);

  // Estadísticas de valorMeta
  const statsMeta = calculateStats("valorMeta");
  console.log(`\n💰 Estadísticas de meta de recaudo:`);
  console.log(`   Mínimo  : ${formatCOP(statsMeta.min)}`);
  console.log(`   Máximo  : ${formatCOP(statsMeta.max)}`);
  console.log(`   Total   : ${formatCOP(statsMeta.total)}`);

  // Propiedades del primer elemento con Object.entries
  console.log(`\n🔑 Propiedades de "${items[0].name}" (Object.entries):`);
  Object.entries(items[0]).forEach(([clave, valor]) => {
    console.log(`   ${clave.padEnd(15)}: ${valor}`);
  });

  // Pie de reporte
  console.log(`\n${"=".repeat(65)}`);
  console.log(`  Total: ${items.length} / ${MAX_ITEMS} ${VALUE_LABEL} registrados`);
  console.log("=".repeat(65) + "\n");
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(65));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(65));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// Paso 1: Buscar por id
const found = findById(3);
console.log(`🔍 Buscar id=3: ${found?.name ?? "no encontrado"} (${found?.ciudad ?? ""})`);

// Paso 2: Listar activos
const active = getActive();
console.log(`\n✅ Activos: ${active.length}`);
active.forEach((item) => console.log(`  ${formatItem(item)}`));

// Paso 3: Filtrar por campo — tipo "apartamentos"
const porTipo = filterByField("tipo", "apartamentos");
console.log(`\n🏗️  Filtro tipo=apartamentos: ${porTipo.length} resultado(s)`);
porTipo.forEach((item) => console.log(`  ${formatItem(item)}`));

// Filtro por ciudad — Bogotá
const porCiudad = filterByField("ciudad", "Bogotá");
console.log(`\n📍 Filtro ciudad=Bogotá: ${porCiudad.length} resultado(s)`);
porCiudad.forEach((item) => console.log(`  ${formatItem(item)}`));

// Paso 4: Actualizar con spread (inmutable)
const updated = updateItem(1, { rendimiento: 15.0, destacado: true });
console.log(`\n✏️  Actualizado id=1:`);
console.log(`   Antes   : rendimiento=${items[0].rendimiento}% (original intacto)`);
console.log(`   Después : rendimiento=${updated.find((p) => p.id === 1)?.rendimiento}%`);

// Paso 5: Estadísticas
const statsRend = calculateStats("rendimiento");
console.log(`\n📊 Estadísticas (rendimiento):`);
console.log(`   min=${statsRend.min}%  max=${statsRend.max}%  avg=${statsRend.avg.toFixed(2)}%  total=${statsRend.total.toFixed(1)}%`);

const statsMeta = calculateStats("valorMeta");
console.log(`\n💰 Estadísticas (valorMeta):`);
console.log(`   min=${formatCOP(statsMeta.min)}  max=${formatCOP(statsMeta.max)}`);
console.log(`   total=${formatCOP(statsMeta.total)}`);

// Paso 6: Agregar nuevo proyecto
addItem({
  id:          7,
  name:        "Residencias Bambú",
  tipo:        "apartamentos",
  ciudad:      "Manizales",
  valorMeta:   520_000_000,
  rendimiento: 11.8,
  activo:      true,
});

// Paso 7: Reporte completo
buildReport();