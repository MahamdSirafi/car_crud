/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Cars management and retrieval
 */

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Create a car
 *     description: Only admins can create other users.
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - model
 *               - brand
 *               - color
 *               - transmission
 *               - photo
 *               - price
 *               - productionDate
 *             properties:
 *               model:
 *                 type: string
 *               brand:
 *                 type: string
 *               color:
 *                 type: string
 *               photo:
 *                 type: string
 *               price:
 *                 type: number
 *               transmission:
 *                  type: string
 *                  enum: [manual,automatic]
 *             example:
 *               model: S6
 *               brand: BMW
 *               color: red
 *               transmission: automatic
 *               photo: https://BMW.com/img/s6.jpg
 *               productionDate: 2024-6-27
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Car'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all cars
 *     description: admins and users can retrieve all cars.
 *     tags: [Cars]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: car brand
 *       - in: query
 *         name: model
 *         schema:
 *           type: string
 *         description: Car model
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of cars
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Car'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Get a car
 *     description: Logged in users or admin for get a car .
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Car'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a car
 *     description: Only admins can update a car.
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               price:
 *                 type: number
 *             example:
 *               price: 20000
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Car'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a car.
 *     description: Only admins can delete a cars.
 *     tags: [Cars]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Car id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

exports.Car = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    brand: { type: 'string' },
    model: { type: 'string' },
    transmission: { type: 'string', enum: ['manual', 'automatic'] },
    photo: { type: 'string' },
    color: { type: 'string' },
    productionDate: { type: 'string' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    brand: 'BMW',
    model: 'S6',
    transmission: 'automatic',
    photo: './public/img/dafult.jpg',
    color: 'red',
    productionDate: '2024-6-27',
  },
};
