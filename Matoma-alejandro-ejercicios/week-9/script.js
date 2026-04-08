// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================
"use strict";

const DOMAIN_NAME = "CrowdBrick — Catálogo de Proyectos";
const VALUE_LABEL = "proyectos";

// ============================================
// DATOS DEL CATÁLOGO
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
    destacado:   true,
  },
  {
    id:          2,
    name:        "Centro Comercial Palma",
    tipo:        "comercial",
    ciudad:      "Medellín",
    valorMeta:   2_500_000_000,
    rendimiento: 9.8,
    activo:      false,
    fechaCierre: "2024-11-30",
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
    destacado:   true,
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
    fechaCierre: "2025-06-30",
  },
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const formatCOP = (valor) =>
  `$${valor.toLocaleString("es-CO")} COP`;

// Object.keys() — lista las propiedades del primer elemento
const listKeys = (item) => {
  console.log(`\n🔑 Propiedades de "${item.name}" (Object.keys):`);
  Object.keys(item).forEach((clave) => {
    console.log(`   • ${clave}`);
  });
};

// Object.entries() — imprime el detalle formateado de un elemento
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name} (Object.entries):`);
  Object.entries(item).forEach(([clave, valor]) => {
    const claveFormateada = clave.padEnd(15);
    const valorFormateado =
      clave === "valorMeta" ? formatCOP(valor) : valor;
    console.log(`   ${claveFormateada}: ${valorFormateado}`);
  });
};

// Object.values() — calcula estadísticas de una propiedad numérica
const calculateStats = (numericKey) => {
  const valores = items.map((item) => item[numericKey]);

  const total    = valores.reduce((sum, v) => sum + v, 0);
  const promedio = (total / valores.length).toFixed(2);
  const maximo   = Math.max(...valores);
  const minimo   = Math.min(...valores);

  console.log(`\n📊 Estadísticas de "${numericKey}" (Object.values):`);
  console.log(`   Total:    ${numericKey === "valorMeta" ? formatCOP(total) : total}`);
  console.log(`   Promedio: ${numericKey === "valorMeta" ? formatCOP(Number(promedio)) : promedio}`);
  console.log(`   Máximo:   ${numericKey === "valorMeta" ? formatCOP(maximo) : maximo}`);
  console.log(`   Mínimo:   ${numericKey === "valorMeta" ? formatCOP(minimo) : minimo}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`   Tipo:        ${item.tipo}`);
  console.log(`   Ciudad:      ${item.ciudad}`);
  console.log(`   Meta:        ${formatCOP(item.valorMeta)}`);
  console.log(`   Rendimiento: ${item.rendimiento}% anual`);
  console.log(`   Estado:      ${item.activo ? "🟢 Activo" : "🔴 Cerrado"}`);

  if (Object.hasOwn(item, "destacado")) {
    console.log(`   ⭐ Proyecto destacado en plataforma`);
  } else {
    console.log(`   — Sin destacado`);
  }

  if (Object.hasOwn(item, "fechaCierre")) {
    console.log(`   📅 Fecha de cierre: ${item.fechaCierre}`);
  } else {
    console.log(`   — Sin fecha de cierre definida`);
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}" (for...in):`);
  for (const clave in item) {
    if (Object.hasOwn(item, clave)) {
      console.log(`   ${clave.padEnd(15)}: ${item[clave]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

// filter() — criterio 1: proyectos activos
const getActive = () =>
  items.filter((p) => p.activo === true);

// filter() — criterio 2: proyectos con rendimiento mayor al 12%
const getHighYield = () =>
  items.filter((p) => p.rendimiento > 12);

const findById = (id) =>
  items.find((p) => p.id === id);

// map() — agrega rendimiento con bonificación del +2%
const addCalculatedProp = () =>
  items.map((p) => ({
    ...p,
    rendimientoConBonus: +(p.rendimiento + 2).toFixed(1),
    metaFormateada:      formatCOP(p.valorMeta),
  }));

// sort() — ordena por rendimiento sin mutar el original
const sortByRendimiento = (ascending = true) =>
  [...items].sort((a, b) =>
    ascending
      ? a.rendimiento - b.rendimiento
      : b.rendimiento - a.rendimiento
  );

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(55));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(55));

  const activos   = getActive();
  const altaRent  = getHighYield();
  console.log(`\n   Total de proyectos      : ${items.length}`);
  console.log(`   Activos                 : ${activos.length}`);
  console.log(`   Cerrados                : ${items.length - activos.length}`);
  console.log(`   Rendimiento > 12%       : ${altaRent.length}`);

  const rendimientos = items.map((p) => p.rendimiento);
  const promRend = (
    rendimientos.reduce((a, b) => a + b, 0) / rendimientos.length
  ).toFixed(2);
  console.log(`   Rendimiento promedio    : ${promRend}% anual`);

  const totalMeta = items.reduce((acc, p) => acc + p.valorMeta, 0);
  console.log(`   Total metas de recaudo  : ${formatCOP(totalMeta)}`);

  console.log("\n📋 Proyectos ordenados por rendimiento (mayor a menor):\n");
  sortByRendimiento(false).forEach((p, i) => {
    const estado = p.activo ? "🟢" : "🔴";
    console.log(
      `   ${i + 1}. ${estado} ${p.name.padEnd(38)} ${p.rendimiento}% anual`
    );
  });

  const mayor = sortByRendimiento(false)[0];
  const menor = sortByRendimiento(true)[0];
  console.log(`\n   🏆 Mayor rendimiento: ${mayor.name} (${mayor.rendimiento}%)`);
  console.log(`   📉 Menor rendimiento: ${menor.name} (${menor.rendimiento}%)`);

  console.log("\n" + "=".repeat(55));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

// 1. Object.keys() — listar propiedades del primer elemento
listKeys(items[0]);

// 2. Object.entries() — detalle formateado del primer elemento
inspectItem(items[0]);

// 3. Object.values() — estadísticas de valorMeta y rendimiento
calculateStats("valorMeta");
calculateStats("rendimiento");

// 4. Object.hasOwn() — mostrar diferencias entre elementos
console.log("\n--- Detalle con propiedades opcionales ---");
items.forEach(showWithOptionals);

// 5. for...in — recorrer todas las propiedades
console.log("\n--- Iteración con for...in ---");
printAllProperties(items[0]);

// 6. Spread — actualización inmutable
console.log("\n--- Actualización inmutable con spread ---");
const original    = items[2];
const actualizado = updateItem(original, { rendimiento: 13.5, activo: false });
console.log(`   Original   : ${original.name} — ${original.rendimiento}% | activo: ${original.activo}`);
console.log(`   Actualizado: ${actualizado.name} — ${actualizado.rendimiento}% | activo: ${actualizado.activo}`);
console.log(`   ✅ El original NO fue modificado`);

// 7. filter() criterio 1 — proyectos activos
console.log("\n--- Filter: proyectos activos ---");
getActive().forEach((p) => console.log(`   • ${p.name}`));

// 8. filter() criterio 2 — rendimiento mayor al 12%
console.log("\n--- Filter: proyectos con rendimiento > 12% ---");
getHighYield().forEach((p) =>
  console.log(`   • ${p.name} (${p.rendimiento}%)`)
);

// 9. find() — por id válido e inexistente
console.log("\n--- Búsqueda con find() ---");
const encontrado   = findById(4);
const noEncontrado = findById(99);
console.log(encontrado
  ? `   🔍 ID 4  → ${encontrado.name} (${encontrado.ciudad})`
  : `   🔍 ID 4  → No encontrado`
);
console.log(noEncontrado
  ? `   🔍 ID 99 → ${noEncontrado.name}`
  : `   🔍 ID 99 → No encontrado`
);

// 10. map() — propiedad calculada
console.log("\n--- Rendimiento con bonificación (+2%) ---");
addCalculatedProp().forEach((p) =>
  console.log(`   • ${p.name.padEnd(35)} ${p.rendimiento}% → ${p.rendimientoConBonus}%`)
);

// 11. sort() — ordenado ascendente
console.log("\n--- Ordenado ascendente por rendimiento ---");
sortByRendimiento(true).forEach((p) =>
  console.log(`   • ${p.rendimiento}%  ${p.name}`)
);

// 12. Reporte final
buildReport();