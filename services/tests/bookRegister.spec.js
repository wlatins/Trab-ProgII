/*
import CadastroLivro from "../bookRegister.js";
import BookService from '../bookServices.js';

beforeAll(() => {
    console.log("Iniciando os teste do arquivo bookRegister.spec.js");
})

afterAll(() => {
    console.log("Finalizando os teste do arquivo bookRegister.spec.js");   
})

describe("Grupo dos testes de modelo do banco de dados (schema)", () => {    
    test("Livro novo deve ter nome A Arte da Guerra", async () => {
        const livro = new CadastroLivro({
            nome: "A Arte da Guerra",
            exemplares: 5,
            autor: "Sun Tzu",
            ano: -500
        });

    expect(livro.nome).toBe("A Arte da Guerra");
    });

    test("Livro novo deve ter 4 exemplares", async () => {
        const livro = new CadastroLivro({
            nome: "O Pequeno Príncipe",
            exemplares: 5,
            autor: "Saint-Exupéry",
            ano: 1943
        });

    expect(livro.exemplares).toBe(4); // erro proposital
    });
});
*/