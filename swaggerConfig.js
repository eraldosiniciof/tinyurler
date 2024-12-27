import { SERVER_PORT } from '@config/index'
import swaggerJsdoc from 'swagger-jsdoc'

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Encurtador de URL',
      version: '1.0.0',
      description: 'Documentação da API para encurtamento de URLs'
    },
    servers: [
      {
        url: `http://localhost:${SERVER_PORT}`
      }
    ]
  },
  apis: ['./src/modules/*/infra/http/routes/*.js']
}

const swaggerDocs = swaggerJsdoc(swaggerOptions)

export default swaggerDocs
