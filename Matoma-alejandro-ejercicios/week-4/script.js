/*
Semana 4 — Manipulación avanzada de arrays (ES2023)
Dominio: Plataforma de Crowdfunding Inmobiliario
*/

// ==========================================
// DATOS
// ==========================================

const projects = [
  { id: 1, name: "Torre Empresarial Bogotá", category: "Comercial", goal: 500000, investors: 120, active: true },
  { id: 2, name: "Residencial Santa Marta", category: "Residencial", goal: 300000, investors: 80, active: true },
  { id: 3, name: "Centro Logístico Medellín", category: "Industrial", goal: 700000, investors: 150, active: false },
  { id: 4, name: "Hotel Caribe Cartagena", category: "Turístico", goal: 450000, investors: 60, active: true }
];

// ==========================================
// ORDENAR PROYECTOS (ES2023)
// ==========================================

const sortByGoal = (projectList) => {
  return projectList.toSorted((a, b) => a.goal - b.goal);
};

console.log("PROYECTOS ORDENADOS POR META DE INVERSIÓN");
console.log(sortByGoal(projects));


// ==========================================
// REVERTIR LISTA (ES2023)
// ==========================================

const reverseProjects = (projectList) => {
  return projectList.toReversed();
};

console.log("\nPROYECTOS EN ORDEN INVERSO");
console.log(reverseProjects(projects));


// ==========================================
// OBTENER PROYECTO CON MAYOR INVERSIÓN
// ==========================================

const getHighestGoalProject = (projectList) => {
  return projectList.reduce((max, project) =>
    project.goal > max.goal ? project : max
  );
};

console.log("\nPROYECTO CON MAYOR META DE INVERSIÓN");
console.log(getHighestGoalProject(projects));


// ==========================================
// FILTRAR PROYECTOS ACTIVOS
// ==========================================

const getActiveProjects = (projectList) => {
  return projectList.filter(project => project.active);
};

console.log("\nPROYECTOS ACTIVOS");
console.log(getActiveProjects(projects));


// ==========================================
// BUSCAR PROYECTO POR ID
// ==========================================

const findProjectById = (projectList, id) => {
  return projectList.find(project => project.id === id);
};

console.log("\nBUSCAR PROYECTO CON ID 2");
console.log(findProjectById(projects, 2));


// ==========================================
// CALCULAR INVERSIÓN TOTAL
// ==========================================

const calculateTotalGoal = (projectList) => {
  return projectList.reduce((total, project) => total + project.goal, 0);
};

console.log("\nINVERSIÓN TOTAL NECESARIA");
console.log(calculateTotalGoal(projects));