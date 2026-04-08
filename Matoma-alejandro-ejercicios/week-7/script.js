// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: [Tu dominio asignado]
// ============================================

// NOTA PARA EL APRENDIZ:
// Adapta este proyecto a tu dominio asignado.
// Todos los nombres genéricos (item, value, category, etc.)
// deben reemplazarse con nombres específicos de tu dominio.
//
// Ejemplos de adaptación:
// - Biblioteca: book, author, available, fine
// - Farmacia: medicine, price, stock, laboratory
// - Gimnasio: member, plan, active, bmi
// - Restaurante: dish, price, available, category
// - Banco: account, balance, interest, active
// - Hospital: patient, age, hasAppointment, doctor

"use strict";

// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME   = "Plataforma Inmobiliaria CrowdBrick";
const VALUE_LABEL   = "valor";
const CURRENCY      = "COP";
const TAX_RATE      = 0.19;
const MIN_INVERSION = 1_000_000;

const proyectos = [
  {
    id: 1,
    nombre:      "Torre Reserva 85",
    tipo:        "apartamentos",
    ciudad:      "Bogotá",
    valorMeta:   850_000_000,
    recaudado:   620_000_000,
    rendimiento: 12.5,
    activo:      true,
  },
  {
    id: 2,
    nombre:      "Centro Comercial Palma",
    tipo:        "comercial",
    ciudad:      "Medellín",
    valorMeta:   2_500_000_000,
    recaudado:   2_500_000_000,
    rendimiento: 9.8,
    activo:      false,
  },
  {
    id: 3,
    nombre:      "Bodega Industrial Zona Franca",
    tipo:        "industrial",
    ciudad:      "Barranquilla",
    valorMeta:   1_200_000_000,
    recaudado:   430_000_000,
    rendimiento: 11.2,
    activo:      true,
  },
  {
    id: 4,
    nombre:      "Conjunto Campestre Las Acacias",
    tipo:        "casas",
    ciudad:      "Pereira",
    valorMeta:   600_000_000,
    recaudado:   598_000_000,
    rendimiento: 14.0,
    activo:      true,
  },
  {
    id: 5,
    nombre:      "Oficinas Coworking 360",
    tipo:        "oficinas",
    ciudad:      "Cali",
    valorMeta:   450_000_000,
    recaudado:   95_000_000,
    rendimiento: 10.5,
    activo:      true,
  },
];

// ============================================
// SECCIÓN 2: Función de formato
// ============================================

const formatCOP = (valor) =>
  `$${valor.toLocaleString("es-CO")} COP`;

const formatProyecto = (proyecto) => {
  const progreso = ((proyecto.recaudado / proyecto.valorMeta) * 100).toFixed(1);
  const estado   = proyecto.activo ? "ABIERTO" : "CERRADO";
  return (
    `🏗️  [${estado}] ${proyecto.nombre} — ${proyecto.tipo.toUpperCase()} ` +
    `(${proyecto.ciudad}) | ` +
    `Recaudado: ${formatCOP(proyecto.recaudado)} / ${formatCOP(proyecto.valorMeta)} ` +
    `(${progreso}%) | Rendimiento: ${proyecto.rendimiento}% anual`
  );
};

// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calcularRentabilidad = (montoInvertido, rendimientoAnual, años = 1) => {
  const gananciaTotal = montoInvertido * (rendimientoAnual / 100) * años;
  return +gananciaTotal.toFixed(2);
};

// ============================================
// SECCIÓN 4: Función de validación
// ============================================

const estaDisponible = (proyecto) =>
  proyecto.activo === true && proyecto.recaudado < proyecto.valorMeta;

// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatResumen = (valor, etiqueta = VALUE_LABEL, moneda = CURRENCY) =>
  `${etiqueta}: $${valor.toLocaleString("es-CO")} ${moneda}`;

// ============================================
// SECCIÓN 6: Reporte usando callbacks
// ============================================

// --- Funciones de orden superior que reciben callbacks ---

// Recorre el array e imprime cada elemento usando el callback formatter
const imprimirLista = (arr, formatter) => {
  let numero = 1;
  for (const item of arr) {
    console.log(`  ${numero}. ${formatter(item)}`);
    numero++;
  }
};

// Cuenta los elementos que cumplen la condición del callback validator
const contarValidos = (arr, validator) => {
  let count = 0;
  for (const item of arr) {
    if (validator(item)) count++;
  }
  return count;
};

// Suma un campo numérico de cada elemento usando el callback extractor
const sumarCampo = (arr, extractor) => {
  let total = 0;
  for (const item of arr) {
    total += extractor(item);
  }
  return total;
};

// --- Generación del reporte ---

console.log(`\n${"═".repeat(60)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(60)}`);

// Listado — formatProyecto pasada como callback de formato
console.log("\n📋 Proyectos en plataforma:\n");
imprimirLista(proyectos, formatProyecto);

// Validación — estaDisponible pasada como callback de validación
const disponibles = contarValidos(proyectos, estaDisponible);
console.log(`\n✅ Proyectos disponibles para invertir: ${disponibles} / ${proyectos.length}`);

// Cálculo — arrow function anónima pasada como callback extractor
const totalRecaudado = sumarCampo(proyectos, (p) => p.recaudado);
console.log(formatResumen(totalRecaudado, "\n💰 Total recaudado en plataforma"));

// Ejemplo de rentabilidad
const miInversion     = 5_000_000;
const proyectoEjemplo = proyectos[0];
const ganancia        = calcularRentabilidad(miInversion, proyectoEjemplo.rendimiento, 2);

console.log(`\n📈 Ejemplo de inversión:`);
console.log(`   Capital: ${formatCOP(miInversion)}`);
console.log(`   Proyecto: ${proyectoEjemplo.nombre} (${proyectoEjemplo.rendimiento}% anual)`);
console.log(`   Ganancia proyectada a 2 años: ${formatCOP(ganancia)}`);

console.log(`\n${"═".repeat(60)}\n`);