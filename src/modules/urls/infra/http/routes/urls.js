import Router from '@koa/router'

import { createShortenedUrlFactory } from '@modules/urls/useCases/CreateShortenedUrl/CreateShortenedUrlFactory'
import { getShortenedUrlFactory } from '@modules/urls/useCases/GetShortenedUrl/GetShortenedUrlFactory'

const urlsRoutes = new Router()

/**
 * @swagger
 * /:
 *   post:
 *     summary: "Cria um URL encurtado"
 *     description: "Recebe um URL original e retorna um URL encurtado."
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               original:
 *                 required: true
 *                 type: string
 *                 description: "URL original a ser encurtado"
 *                 example: "https://www.exemplo.com"
 *     responses:
 *       201:
 *         description: "URL encurtado gerado com sucesso"
 *       500:
 *         description: "Parâmetro 'original' é obrigatório e deve ser uma string válida"
 *     tags:
 *       - "URLs Encurtados"
 */
urlsRoutes.post('/', createShortenedUrlFactory().handle)

/**
 * @swagger
 * /{short}:
 *   get:
 *     summary: "Redireciona para um URL encurtado"
 *     description: "Dado um URL encurtado, redireciona para o URL original."
 *     parameters:
 *       - name: short
 *         in: path
 *         description: "Código do URL encurtado"
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: "Redireciona para o URL encurtado"
 *       404:
 *         description: "Short expirado ou não localizado"
 *     tags:
 *       - "URLs Encurtados"
 */
urlsRoutes.get('/:short', getShortenedUrlFactory().handle)

export { urlsRoutes }
