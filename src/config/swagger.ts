import swaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJSDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Condominium Backend Foundation",
      version: "0.1.0",
      description: "Backend foundation template (Express + TS + Prisma + PostgreSQL)",
    },
  },
  apis: ["./src/routes/*.ts"], // onde ele vai procurar anotações JSDoc
});
