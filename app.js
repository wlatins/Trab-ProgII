import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import BookService from "./services/bookServices.js";
import { fileURLToPath } from "url"; // Necessário para usar __dirname com ES Modules
import path from "path"; // Necessário para usar __dirname com ES Modules
// import exeCadastro from "./public/signup.js"
//import CadastroLivro from "./services/bookServices.js";

dotenv.config();

const bookService = new BookService();
const App = express();
const PORT = 3000;
//const fileURLToPath = import("url").fileURLToPath;
const __filename = fileURLToPath(import.meta.url); //o meta.url serve para pegar o caminho do arquivo atual
const __dirname = path.dirname(__filename); // Necessário para usar __dirname com ES Modules porque __dirname não funciona nativamente com ES Modules

App.use(express.json()); //middleware para ler JSON
App.use(express.static(path.join(__dirname, "public"))); //middleware para ler os dados do forms

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Banco conectado");
    }
    catch (error) {
        console.log(error);
    }
}

connectDB();

/* ignore as rotas login e register*/
// App.post("/register",async(req,res)=>{
//     try{
//         const newUser=await exeCadastro.create(req.body);
//         res.json(newUser);
//     }
//     catch(error){
//         res.status(500).json({msg:"Erro ao cadastrar usuário"});
//     }
// })

// App.get('/login', (req, res) => {
//     res.sendFile(__dirname + "/public/login.html");
// })

/*
App.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + "/public/cadastro.html");
})
*/

/*
App.post('/cadastro', async (req, res) => {
    try{
        const novoLivro = await bookService.bookAdd(req.body.nome, req.body.exemplares, req.body.autor, req.body.ano);
        res.json(novoLivro);
        console.log(novoLivro);
        const hadouken = await bookService.bookListing(novoLivro);
        console.log(hadouken);
    }
    catch(error){
        console.log("NN Funcionou");
    }
})
*/

/*
App.get('/biblioteca', (req, res) => {
    res.sendFile(__dirname + "/public/biblioteca.html");  
})
*/

/*
App.get('/api/livros', async (req, res) => {
    try {
        const listaLivros = await bookService.bookListing();
        res.json(listaLivros);
        console.log('Livros listados:', listaLivros.length);
    } catch (error) {
        console.error('Erro ao listar livros:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
})
*/

App.get('/', (req, res) => {
    res.send(__dirname + "/public/index.html");
})

// Só inicia o servidor se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
    App.listen(PORT, () => {
        console.log("Servidor conectado na porta: " + PORT);
    })
}

export default App;