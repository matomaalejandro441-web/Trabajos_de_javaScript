/*
Semana 2 — Estructuras de datos y funciones
Dominio: Crowdfunding Inmobiliario
*/

// ==========================================
// DATOS DEL DOMINIO
// ==========================================

// lista de proyectos inmobiliarios
const projects = [
  {
    id: 1,
    name: "Torre Empresarial Bogotá",
    category: "Comercial",
    goal: 500000,
    investors: 120,
    active: true
  },
  {
    id: 2,
    name: "Residencial Santa Marta",
    category: "Residencial",
    goal: 300000,
    investors: 80,
    active: true
  },
  {
    id: 3,
    name: "Centro Logístico Medellín",
    category: "Industrial",
    goal: 700000,
    investors: 150,
    active: false
  }
];

// ==========================================
// MOSTRAR PROYECTOS
// ==========================================

console.log("LISTA DE PROYECTOS");
projects.forEach(project => {
  console.log(project.name, "-", project.category);
});


// ==========================================
// FILTRAR PROYECTOS ACTIVOS
// ==========================================

const activeProjects = projects.filter(project => project.active);

console.log("\nPROYECTOS ACTIVOS");
console.log(activeProjects);


// ==========================================
// BUSCAR PROYECTO POR ID
// ==========================================

const projectFound = projects.find(project => project.id === 2);

console.log("\nPROYECTO ENCONTRADO");
console.log(projectFound);


// ==========================================
// MAP - OBTENER SOLO NOMBRES
// ==========================================

const projectNames = projects.map(project => project.name);

console.log("\nNOMBRES DE PROYECTOS");
console.log(projectNames);


// ==========================================
// REDUCE - SUMAR META TOTAL DE INVERSIÓN
// ==========================================

const totalInvestment = projects.reduce((total, project) => {
  return total + project.goal;
}, 0);

console.log("\nINVERSIÓN TOTAL NECESARIA");
console.log(totalInvestment);


// ==========================================
// FUNCIÓN PARA AGREGAR PROYECTO
// ==========================================

function addProject(name, category, goal) {
  const newProject = {
    id: projects.length + 1,
    name,
    category,
    goal,
    investors: 0,
    active: true
  };

  projects.push(newProject);
}

addProject("Hotel Caribe Cartagena", "Turístico", 450000);

console.log("\nLISTA ACTUALIZADA");
console.log(projects);