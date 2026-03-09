/*
Semana 5 — CRUD de proyectos
Dominio: Plataforma de Crowdfunding Inmobiliario
*/

// ==========================================
// BASE DE DATOS SIMULADA
// ==========================================

let projects = [
  { id: 1, name: "Torre Empresarial Bogotá", category: "Comercial", goal: 500000, investors: 120, active: true },
  { id: 2, name: "Residencial Santa Marta", category: "Residencial", goal: 300000, investors: 80, active: true },
  { id: 3, name: "Centro Logístico Medellín", category: "Industrial", goal: 700000, investors: 150, active: false }
];

// ==========================================
// CREATE — crear proyecto
// ==========================================

const createProject = (projectList, newProject) => {
  return [...projectList, newProject];
};

// ==========================================
// READ — mostrar proyectos
// ==========================================

const getProjects = (projectList) => {
  projectList.forEach(project => {
    console.log(`${project.id} - ${project.name} | ${project.category} | $${project.goal}`);
  });
};

// ==========================================
// UPDATE — actualizar proyecto
// ==========================================

const updateProject = (projectList, id, updates) => {
  return projectList.map(project =>
    project.id === id ? { ...project, ...updates } : project
  );
};

// ==========================================
// DELETE — eliminar proyecto
// ==========================================

const deleteProject = (projectList, id) => {
  return projectList.filter(project => project.id !== id);
};

// ==========================================
// ESTADÍSTICAS
// ==========================================

const totalInvestmentGoal = (projectList) => {
  return projectList.reduce((total, project) => total + project.goal, 0);
};

// ==========================================
// EJECUCIÓN
// ==========================================

console.log("LISTA INICIAL DE PROYECTOS");
getProjects(projects);

// crear nuevo proyecto
projects = createProject(projects, {
  id: 4,
  name: "Hotel Caribe Cartagena",
  category: "Turístico",
  goal: 450000,
  investors: 0,
  active: true
});

console.log("\nPROYECTO AGREGADO");
getProjects(projects);

// actualizar proyecto
projects = updateProject(projects, 2, { goal: 350000 });

console.log("\nPROYECTO ACTUALIZADO");
getProjects(projects);

// eliminar proyecto
projects = deleteProject(projects, 3);

console.log("\nPROYECTO ELIMINADO");
getProjects(projects);

// estadísticas
console.log("\nINVERSIÓN TOTAL NECESARIA");
console.log(totalInvestmentGoal(projects));