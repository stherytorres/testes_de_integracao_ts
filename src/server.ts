import express from 'express';
import { router as alunoRoute } from './module/aluno/aluno.route';
const app = express();
app.use(express.json());

app.use('/aluno', alunoRoute);

app.listen(8080, () => {
  console.log('server running!');
});

export default app;
