import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import videosRoutes from './routes/videos.routes';

const app = express ();

app.set('port', 3000);
//Ve en consola las peticiones del servidor
app.use(morgan('dev'));
//Permite que cualquier servidor pueda realizar peticiones y hacer operaciones
app.use(cors());
//Pueda entender los objetos json cuando viene una peticion POST con datos
app.use(express.json());
//Cuando me mande una peticion post desde un formulario pueda enterder los campos que vienen desde ahi
app.use(express.urlencoded({extended:false}));

app.use(videosRoutes);


export default app;