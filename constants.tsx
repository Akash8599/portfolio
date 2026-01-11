import { Terminal, Database, Cloud, Code2, Server, Cpu } from 'lucide-react';
import { ExperienceItem, ProjectItem, SkillCategory, AchievementItem } from './types';

export const PERSONAL_INFO = {
  name: "Akash Gokuldas Kamble",
  role: "Senior Software Engineer",
  tagline: "Building High-Performance Cloud-Native Microservices",
  email: "akashkamble0701@gmail.com",
  phone: "+91 93700 57535",
  location: "Pune, India",
  linkedin: "https://www.linkedin.com/in/akashkamble99/", 
  github: "https://github.com/Akash8599/",
  leetcode: "https://leetcode.com/u/Akash8599/"
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Impetus Technologies",
    role: "Senior Software Engineer",
    period: "March 2025 – Present",
    location: "Pune",
    description: [
      "Designed and developed a cloud-native microservices ecosystem using Java, Quarkus, and Choreography-based SAGA pattern on Azure.",
      "Achieved 30–40% reduction in execution time per run by optimizing system scalability.",
      "Engineered secure RESTful APIs to replace legacy file systems, boosting response times by 15-20%.",
      "Reduced batch service execution time by 75% implementing parallel processing with Spring Batch."
    ],
    tech: ["Java", "Quarkus", "Azure", "Microservices", "Spring Batch"]
  },
  {
    company: "Tata Consultancy Services",
    role: "Java Backend Developer",
    period: "Oct 2021 – March 2025",
    location: "Pune",
    description: [
      "Transformed legacy software for a major US pharmacy chain into a scalable real-time application using Microservices.",
      "Implemented Strangler Fig pattern for zero-downtime migration from monolith to microservices.",
      "Optimized Azure Redis instances to cut infrastructure costs by 40% and improved response times by 45%.",
      "Achieved 85%+ test coverage with JUnit/Mockito and led comprehensive code reviews.",
      "Leveraged Reactive Programming for asynchronous processing, enhancing high-load concurrency."
    ],
    tech: ["Java", "Spring Boot", "Azure", "Redis", "JUnit", "Reactive Programming"]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend Core",
    icon: Server,
    skills: ["Java", "Spring Boot", "Quarkus", "Hibernate", "Microservices", "RESTful APIs", "Reactive Programming"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure Kubernetes", "Docker", "Azure App Insights", "ADF", "EventHub", "Service Bus", "Maven", "Git"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Cosmos DB", "MySQL", "SQL Server", "Redis", "OpenMetadata", "Kafka", "Data Migration"]
  },
  {
    title: "Tools & Methodologies",
    icon: Terminal,
    skills: ["Jira", "Confluence", "Postman", "Agile", "Scrum", "CI/CD", "Root Cause Analysis"]
  }
];

export const PROJECTS: ProjectItem[] = [

{
    title: "Shinde Agencies Portal",
    description: "Responsive business website for showcasing product offerings and company details with high performance and accessibility.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    link: "https://shindeagencies.vercel.app/",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    longDescription: [
      "Designed and developed a responsive business website for Shinde Agencies to showcase shop details and product offerings.",
      "Built a clean and user-friendly UI to display company information, product listings, and contact details, significantly improving the business's online presence.",
      "Implemented a mobile-responsive layout to ensure accessibility across all devices and deployed on Vercel for maximum reliability and speed."
    ],
    features: [
      "Mobile-First Responsive Design",
      "Product Catalog Showcase",
      "High-Performance Vercel Deployment",
      "SEO-Friendly Structure"
    ]
  },
    {
    title: "Wholesale Order Management",
    description: "Full-stack inventory and order management system handling the complete lifecycle from product catalog to invoicing.",
    tech: ["Java", "Spring Boot", "React.js", "PostgreSQL", "REST APIs"],
    link: "https://shopixx.vercel.app/",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000",
    longDescription: [
      "Designed and delivered a full-stack web application for a wholesale client to manage products, customers, sales orders, purchase orders, and invoicing.",
      "Developed secure, scalable RESTful APIs using Java and Spring Boot to handle core business workflows. Implemented a layered architecture (Controller, Service, Repository) ensuring clean separation of concerns and maintainability.",
      "Built a responsive React.js frontend to enable smooth user interactions for order creation, inventory tracking, and invoice viewing."
    ],
    features: [
      "End-to-End Order Processing",
      "Real-time Inventory Tracking",
      "Automated Invoice Generation",
      "Secure REST API with Validation"
    ]
  },
  {
    title: "Microservices Ecosystem",
    description: "Developed a complete microservices architecture featuring Eureka Server for discovery, API Gateway for centralized routing/security, and resilient inter-service communication.",
    tech: ["Spring Boot", "Eureka", "API Gateway", "Security"],
    link: "https://github.com/Akash8599/microservice_project",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    longDescription: [
      "Designed and implemented a resilient microservices architecture to decompose a monolithic legacy application. This ecosystem ensures high availability and fault tolerance through decentralized data management and isolated service deployment.",
      "The system utilizes Netflix Eureka for dynamic service discovery and Zuul/Spring Cloud Gateway for intelligent routing and load balancing. Security is managed centrally via OAuth2 and JWT tokens at the gateway level."
    ],
    features: [
      "Centralized API Gateway with Rate Limiting",
      "Service Discovery & Health Monitoring",
      "Distributed Tracing with Zipkin/Sleuth",
      "Circuit Breaker Implementation (Resilience4j)"
    ]
  },
  {
    title: "Student Management System",
    description: "Designed a robust management system focusing on optimized CRUD operations and scalability utilizing Spring Boot best practices.",
    tech: ["Spring Boot", "REST", "SQL", "Optimization"],
    link: "https://github.com/Akash8599/microservice_project",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1000",
    longDescription: [
      "Built a comprehensive Student Management System to digitize and streamline administrative processes for educational institutions. The focus was on data integrity, quick retrieval speeds, and handling concurrent user access.",
      "Implemented advanced database optimization techniques including indexing and query caching to handle large datasets effectively."
    ],
    features: [
      "Role-based Access Control (RBAC)",
      "Batch Data Processing",
      "Real-time Attendance Tracking",
      "Automated Report Generation"
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "Star of the Month",
    issuer: "Impetus / TCS",
    year: "Multiple Awards"
  },
  {
    title: "On Spot Awards",
    issuer: "Critical Defect Resolution",
    year: "2022 - 2024"
  },
  {
    title: "Java Certification",
    issuer: "TCS / Udemy",
    year: "2023"
  },
  {
    title: "Spring Boot with Java",
    issuer: "TCS / Udemy",
    year: "2024"
  }
];
