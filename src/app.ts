import express, { Application } from 'express'
import { connect } from './infra/database';
 
class App{

    public app: Application;

    constructor(){
        this.app = express();
        this.middlewaresInitialize();
        this.initializeRoutes();
        this.interceptionError();
        connect();
    }

    initializeRoutes(){
        //this.app.use('/',)
    }

    interceptionError(){
        //this.app.use();
    }

    middlewaresInitialize(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true})); //text=hello%20word
    }

    listen(){
        this.app.listen(3333, () => console.log('server is running!'));
    }
}
export { App };



// Criar repositorio na pagina do GIT
// git init
// git add .
// (git status para verficar se ta tudo pronto p envio)
// git commit -m "primeiro commit"
// git remote add origin https://github.com/nelioats/projeto_taqueudrinks.git
// git remote add origin https://github.com/nelioats/maralab.git

// git push origin master