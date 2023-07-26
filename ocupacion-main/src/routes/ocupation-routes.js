const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/auth");
const OcupationController = require("../controller/ocupation-controller");

/**
 * @swagger
 * tags:
 *   name: Ocupation
 *   description: Ocupation management APIs
 */

/**
 * @swagger
 * /camasUciCtrl:
 *   get:
 *     summary: Get the list of occupied and functional ICU beds for the Control group
 *     tags: 
 *       - Ocupation
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   NombreIps:
 *                     type: string
 *                     description: The name of the health institution
 *                   Direccion:
 *                     type: string
 *                     description: The address of the health institution
 *                   Localidad:
 *                     type: string
 *                     description: The location of the health institution
 *                   CamasFuncionales:
 *                     type: integer
 *                     description: The number of functional ICU beds in the health institution
 *                   CamasOcupadasTotal:
 *                     type: integer
 *                     description: The number of occupied ICU beds in the health institution
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the document in the database
 *                 required:
 *                   - NombreIps
 *                   - Direccion
 *                   - Localidad
 *                   - CamasFuncionales
 *                   - CamasOcupadasTotal
 *                   - _id
 *             example:
 *               - NombreIps: "GRUPO EMPRESARIAL JARBSALUD IPS S.A.S."
 *                 Direccion: "CL 33 BIS 15 64"
 *                 Localidad: "ENGATIVA"
 *                 CamasFuncionales: 10
 *                 CamasOcupadasTotal: 5
 *                 _id: "6172286c8b1e72f1e8cc7125"
 *               - NombreIps: "CLINICA DE OCCIDENTE S.A."
 *                 Direccion: "CALLE 73 25 15"
 *                 Localidad: "ENGATIVA"
 *                 CamasFuncionales: 20
 *                 CamasOcupadasTotal: 15
 *                 _id: "6172286c8b1e72f1e8cc7126"
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */

router.get('/camasUciCtrl', validateToken, OcupationController.listCtrl);




/**
 * @swagger
 * /camasUciCtrl:
 *   get:
 *     summary: Get the list of occupied and functional ICU beds for the General group
 *     tags: 
 *       - Ocupation
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   NombreIps:
 *                     type: string
 *                     description: The name of the health institution
 *                   Direccion:
 *                     type: string
 *                     description: The address of the health institution
 *                   Localidad:
 *                     type: string
 *                     description: The location of the health institution
 *                   CamasFuncionales:
 *                     type: integer
 *                     description: The number of functional ICU beds in the health institution
 *                   CamasOcupadasTotal:
 *                     type: integer
 *                     description: The number of occupied ICU beds in the health institution
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the document in the database
 *                 required:
 *                   - NombreIps
 *                   - Direccion
 *                   - Localidad
 *                   - CamasFuncionales
 *                   - CamasOcupadasTotal
 *                   - _id
 *             example:
 *               - NombreIps: "GRUPO EMPRESARIAL JARBSALUD IPS S.A.S."
 *                 Direccion: "CL 33 BIS 15 64"
 *                 Localidad: "ENGATIVA"
 *                 CamasFuncionales: 10
 *                 CamasOcupadasTotal: 5
 *                 _id: "6172286c8b1e72f1e8cc7125"
 *               - NombreIps: "CLINICA DE OCCIDENTE S.A."
 *                 Direccion: "CALLE 73 25 15"
 *                 Localidad: "ENGATIVA"
 *                 CamasFuncionales: 20
 *                 CamasOcupadasTotal: 15
 *                 _id: "6172286c8b1e72f1e8cc7126"
 *       400:
 *         description: Invalid request
 *       500:
 *         description: Internal server error
 */


router.get("/camasUciGral", validateToken, OcupationController.listGral);

module.exports = router;

