import { Project, EducationItem, SkillItem, Profile } from './types';

export const PROFILE: Profile = {
  name: "AHANSAL ABDELKARIM",
  title: "Ingénieur Cloud & DevOps",
  bio: "Ingénieur Cloud basé à Rabat, passionné par l'architecture Azure, l'automatisation et les pratiques DevOps. J'accompagne les entreprises dans leur transformation numérique en concevant des infrastructures scalables, sécurisées et résilientes.",
  location: "Rabat, Maroc",
  email: "Abdelkarim@ahansal.click",
  linkedin: "linkedin.com/in/ahansal-abdelkarim",
  github: "github.com/GI-GON",
  // Avatar généré avec les initiales pour un look pro par défaut
  avatarUrl: "https://ui-avatars.com/api/?name=Ahansal+Abdelkarim&background=1e293b&color=3b82f6&size=256&font-size=0.33&bold=true"
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Architecture Microservices Azure',
    description: 'Déploiement et orchestration d\'une application e-commerce sur Azure Kubernetes Service (AKS) avec pipeline CI/CD complet via Azure DevOps.',
    technologies: ['Azure AKS', 'Terraform', 'Docker', 'Azure DevOps'],
    imageUrl: 'https://learn.microsoft.com/en-us/samples/azure-samples/serverless-microservices-reference-architecture/serverless-microservices-reference-architecture/media/macro-architecture.png',
    link: 'https://mon-projet-cloud.azurewebsites.net',
    github: 'https://github.com'
  },
  {
    id: '2',
    title: 'Monitoring & Observabilité',
    description: 'Mise en place d\'une stack de monitoring centralisée utilisant Prometheus et Grafana pour surveiller la santé des infrastructures cloud.',
    technologies: ['Grafana', 'Prometheus', 'Azure Monitor', 'Linux'],
    imageUrl: 'https://picsum.photos/800/600?random=12',
    github: 'https://github.com'
  },
  {
    id: '3',
    title: 'Migration Cloud Hybride',
    description: 'Projet de migration d\'infrastructures on-premise vers le cloud Azure avec mise en place de réseaux hybrides sécurisés (VPN/ExpressRoute).',
    technologies: ['Azure Network', 'Powershell', 'Windows Server'],
    imageUrl: 'https://picsum.photos/800/600?random=13'
  },
  {
    id: '4',
    title: 'Automatisation Infrastructure',
    description: 'Développement de scripts d\'automatisation pour le provisionnement des ressources et la conformité de sécurité (Policy as Code).',
    technologies: ['Terraform', 'Ansible', 'Bash', 'Python'],
    imageUrl: 'https://picsum.photos/800/600?random=14'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    school: 'École Nationale des Sciences Appliquées',
    degree: 'Diplôme d\'Ingénieur d\'État',
    year: '2019 - 2022',
    description: 'Spécialisation en Cloud Computing, Réseaux et Sécurité informatique.'
  },
  {
    id: '2',
    school: 'Université Mohammed V - Rabat',
    degree: 'Classes Préparatoires Intégrées',
    year: '2017 - 2019',
    description: 'Formation intensive en mathématiques, physique et informatique fondamentale.'
  },
  {
    id: '3',
    school: 'Lycée Technique',
    degree: 'Baccalauréat Sciences et Technologies',
    year: '2017',
    description: 'Mention Très Bien.'
  }
];

export const SKILLS: SkillItem[] = [
  { name: 'Azure / Cloud', level: 95, category: 'tools' },
  { name: 'Terraform / IaC', level: 90, category: 'tools' },
  { name: 'Docker / Kubernetes', level: 85, category: 'tools' },
  { name: 'CI/CD (Azure DevOps)', level: 85, category: 'tools' },
  { name: 'Node.js / Scripting', level: 75, category: 'backend' },
  { name: 'Linux / Bash', level: 80, category: 'backend' },
  { name: 'Sécurité Réseaux', level: 75, category: 'backend' },
  { name: 'Gestion de Projet Agile', level: 80, category: 'soft' },
];
