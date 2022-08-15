import * as express from 'express'
import alunos_router from './routes/aluno_route';
import cursos_router from './routes/curso_route';
import matricula_router from './routes/matricula_route'

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors')

const swagerOptions = {}


const app = express();
app.use(cors({origin: "http://localhost:4200"}))
app.use(express.json())
app.use("/v1",alunos_router, cursos_router, matricula_router)
app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swagerOptions));

export default app