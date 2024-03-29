import express from 'express';
import AppDataSource from './Config/database';
import { AeroportoController } from './Controller/AeroportoControler';
import { PassageiroController } from './Controller/PassageiroController';
import { VooController } from './Controller/VooController';


AppDataSource.initialize().then(() => {
  console.log('Conectado com sucesso ao banco');
  const app = express();
  app.use(express.json());

  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
  }); 
  
  app.post('/aeroporto', new AeroportoController().create);
  app.get('/aeroporto', new AeroportoController().getAll);
  app.get('/aeroporto/:id', new AeroportoController().get);
  app.put('/aeroporto/:id', new AeroportoController().update);
  app.delete('/aeroporto/:id', new AeroportoController().delete);

  app.post('/passageiro', new PassageiroController().create);
  app.get('/passageiro', new PassageiroController().getAll);
  app.get('/passageiro/:id', new PassageiroController().get);
  app.put('/passageiro/:id', new PassageiroController().update);
  app.delete('/passageiro/:id', new PassageiroController().delete);

  app.post('/voo', new VooController().create);
  app.get('/voo', new VooController().getAll);
  app.get('/voo/:id', new VooController().get);
  app.put('/voo/:id', new VooController().update);
  app.delete('/voo/:id', new VooController().delete);

  

  app.listen(8000);
}).catch(e => console.log('Erro ao conectar ao banco: ', e))