/*
Semana 3 — Funciones y manipulación de datos
Dominio: Plataforma de Crowdfunding Inmobiliario
*/

// ==========================================
// DATOS
// ==========================================

const projects = [
  { id: 1, name: "Torre Empresarial Bogotá", category: "Comercial", goal: 500000, investors: 120, active: true },
  { id: 2, name: "Residencial Santa Marta", category: "Residencial", goal: 300000, investors: 80, active: true },
  { id: 3, name: "Centro Logístico Medellín", category: "Industrial", goal: 700000, investors: 150, active: false },
];

// ==========================================
// FUNCIONES
// ==========================================

// mostrar todos los proyectos
const showProjects = () => {
  console.log("LISTA DE PROYECTOS");
  projects.forEach(project => {
    console.log(`${project.id} - ${project.name} (${project.category})`);
  });
};

// filtrar proyectos activos
const getActiveProjects = () => {
  return projects.filter(project => project.active);
};

// calcular inversión total necesaria
const calculateTotalGoal = () => {
  return projects.reduce((total, project) => total + project.goal, 0);
};

// buscar proyecto por nombre
const findProjectByName = (name) => {
  return projects.find(project => project.name === name);
};

// agregar nuevo proyecto (inmutabilidad)
const addProject = (projectList, newProject) => {
  return [...projectList, newProject];
};

// ==========================================
// EJECUCIÓN
// ==========================================

showProjects();

const activeProjects = getActiveProjects();
console.log("\nPROYECTOS ACTIVOS:");
console.log(activeProjects);

const totalGoal = calculateTotalGoal();
console.log("\nINVERSIÓN TOTAL NECESARIA:");
console.log(totalGoal);

const foundProject = findProjectByName("Residencial Santa Marta");
console.log("\nPROYECTO ENCONTRADO:");
console.log(foundProject);

const newProject = {
  id: 4,
  name: "Hotel Caribe Cartagena",
  category: "Turístico",
  goal: 450000,
  investors: 0,
  active: true
};

const updatedProjects = addProject(projects, newProject);

console.log("\nLISTA CON NUEVO PROYECTO:");
console.log(updatedProjects);