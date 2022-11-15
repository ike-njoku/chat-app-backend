import * as swaggerUI from 'swagger-ui-express';
import swaggerJSDoc, * as swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerUI.SwaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chat Application',
      version: '1.0.0',
      description: 'Documentation for Chat application'
    },
    servers: [
      {
        url: 'http://localhost:4000',
        description: 'Development Server'
      }
    ]
  },
  apis: ['./src/shared/schemas.yaml']
}

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);
