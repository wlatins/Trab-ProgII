# JestDetonado
Um simples projeto base para aprender Jest Testing com uma API de biblioteca!

## Passo a passo

### 1. Setup Inicial
Abra a aplicação em sua IDE preferida (recomendo o VSCode).

Execute o seguinte comando no terminal para instalar todas as dependências:
```bash
npm install
```

Dentro do `.env` insira suas configurações de ambiente:
```env
MONGO_URI=suaStringDeConexãoMongoDB
```

### 2. MongoDB
Crie um banco de dados do MongoDB localmente ou utilize o Atlas (mais fácil!).

Após criar seu banco, pegue o link de conexão e insira na seguinte linha do `.env`:
```env
MONGO_URI=mongodb+srv://seuUsuario:suaSenha@cluster.mongodb.net/biblioteca
```

**Lembre de trocar seuUsuario e suaSenha pelas credenciais do seu banco**

Feito isso, agora teste se está funcionando:
```bash
npm run start
```

Se aparecer "Servidor conectado na porta: 3000" e "Banco conectado", está tudo certo!

### 3. Entendendo os Testes
Nas primeiras linhas do código do `services/tests/bookRegister.spec.js` você pode encontrar este teste comentado:

```javascript
// TODO: Descomente este código para fazer seu primeiro teste!

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
```

### 4. Testando APIs com Supertest
O Supertest é uma biblioteca que permite testar rotas HTTP da sua API de forma simples e eficiente. No arquivo `services/tests/apiTest.spec.js`, você pode encontrar testes de API comentados:

```javascript
// TODO: Descomente este código para testar suas rotas de API!

/*
import request from "supertest";
import App from "../../app.js";

describe("Testando rotas da API", () => {
  test("GET / deve responder com status 200", async () => {
    const response = await request(App).get("/"); 
    expect(response.status).toBe(200);
  });

  test("GET /cadastro deve retornar página de cadastro", async () => {
    const response = await request(App).get("/cadastro");
    expect(response.status).toBe(200);
  });

  test("GET /biblioteca deve retornar página da biblioteca", async () => {
    const response = await request(App).get("/biblioteca");
    expect(response.status).toBe(200);
  });
});
*/
```

**O que o Supertest faz:**
- Simula requisições HTTP (GET, POST, PUT, DELETE) para sua API
- Testa status codes, headers e conteúdo das respostas
- Funciona sem precisar subir um servidor real
- Integra perfeitamente com Jest para testes completos

### 5. Rodando os Testes
Com o testes descomentados, execute:
```bash
npm test
```

Todos nossos testes irâo passar, no entanto apenas um irá falhar por causa de quantos exemplares existem (5) e quantos são esperados (4).

### 6. Descomentando as Rotas da API
Agora vamos implementar as rotas da API passo a passo! No arquivo `app.js`, você vai encontrar algumas rotas comentadas que precisam ser ativadas.

Procure por estas seções comentadas no `app.js`:

**6.1. Rota de Página de Cadastro (GET):**
```javascript
// TODO: Descomente esta rota para exibir a página de cadastro
/*
App.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + "/public/cadastro.html");
})
*/
```

**6.2. Rota de Cadastro de Livros (POST):**
```javascript
// TODO: Descomente esta rota para permitir cadastrar livros
/*
App.post('/cadastro', async (req, res) => {
    try{
        const novoLivro = await bookService.bookAdd(req.body.nome, req.body.exemplares, req.body.autor, req.body.ano);
        res.json(novoLivro);
        console.log(novoLivro);
    }
    catch(error){
        console.log("Erro ao cadastrar livro:", error);
        res.status(500).json({error: "Erro ao cadastrar livro"});
    }
})
*/
```

**6.3. Rota da Biblioteca (GET):**
```javascript
// TODO: Descomente esta rota para exibir a página da biblioteca
/*
App.get('/biblioteca', (req, res) => {
    res.sendFile(__dirname + "/public/biblioteca.html");  
})
*/
```

**6.4. API de Listagem de Livros:**
```javascript
// TODO: Descomente esta API para listar todos os livros
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
```

### 7. Testando a API Completa
Agora vamos testar nossa API de biblioteca! 

Primeiro, inicie o servidor:
```bash
npm run start
```

Cadastrando um livro:
Abra o navegador em `http://localhost:3000/cadastro` e preencha o formulário.

Visualizando a biblioteca:
Vá para `http://localhost:3000/biblioteca` e veja os livros cadastrados!

API direta:
Você também pode acessar `http://localhost:3000/api/livros` para ver os dados em JSON puro.

### 8. Expandindo os Testes
Agora que você entendeu o básico, pode criar mais testes! Aqui estão algumas ideias:

```javascript
// TODO: Adicione estes testes no services/tests/bookRegister.spec.js!

test("Livro deve ter todas as propriedades obrigatórias", () => {
  const livro = new CadastroLivro({
    nome: "Harry Potter",
    exemplares: 10,
    autor: "J.K. Rowling",
    ano: 1997
  });
  
  expect(livro.nome).toBe("Harry Potter");
  expect(livro.exemplares).toBe(10);
  expect(livro.autor).toBe("J.K. Rowling");
  expect(livro.ano).toBe(1997);
  expect(livro.disponibilidade).toBe(true);
});

test("BookService deve ser instanciado corretamente", () => {
  const bookService = new BookService();
  expect(bookService).toBeInstanceOf(BookService);
  expect(typeof bookService.bookListing).toBe('function');
  expect(typeof bookService.bookAdd).toBe('function');
});
```

### 9. Finalizar
Pronto! Agora você tem uma API de biblioteca funcionando com testes Jest!

Para rodar tudo novamente:
```bash
npm test
```

Qualquer dúvida, não hesite em perguntar!

### 10. Códigos Úteis

#### 10.1. Comandos de Teste
```bash
# Rodar todos os testes
npm test

# Rodar testes específicos
set NODE_OPTIONS=--experimental-vm-modules && npx jest bookRegister
set NODE_OPTIONS=--experimental-vm-modules && npx jest apiTest

# Rodar testes com mais detalhes
npm test -- --verbose

# Rodar testes em modo watch (observa mudanças)
npm test -- --watch

# Detectar problemas de limpeza após testes
npm test -- --detectOpenHandles

# Rodar apenas um teste específico (use test.only no código)
npm test -- --testNamePattern="nome do teste"
```

#### 10.2. Comandos do Servidor
```bash
# Iniciar servidor
npm start

# Iniciar com nodemon (reinicia automaticamente)
npm run dev

# Parar todos os processos Node.js
taskkill /f /im node.exe
```

#### 10.3. Snippets de Teste Jest
```javascript
// Teste básico de função
test("deve fazer algo específico", () => {
  const resultado = minhaFuncao(parametro);
  expect(resultado).toBe(valorEsperado);
});

// Teste assíncrono
test("deve funcionar com async/await", async () => {
  const resultado = await funcaoAssincrona();
  expect(resultado).toBeDefined();
});

// Teste de propriedades de objeto
test("objeto deve ter propriedades corretas", () => {
  const obj = { nome: "Teste", valor: 123 };
  expect(obj).toHaveProperty("nome");
  expect(obj.nome).toBe("Teste");
  expect(obj.valor).toBeGreaterThan(100);
});
```

#### 10.4. Snippets de Teste Supertest
```javascript
// Teste GET básico
test("GET /rota deve retornar 200", async () => {
  const response = await request(App).get("/rota");
  expect(response.status).toBe(200);
});

// Teste POST com dados
test("POST /rota deve criar recurso", async () => {
  const dados = { nome: "Teste", valor: 123 };
  const response = await request(App)
    .post("/rota")
    .send(dados)
    .expect(201);
  
  expect(response.body).toHaveProperty("id");
});

// Teste com headers
test("Rota protegida deve exigir autenticação", async () => {
  await request(App)
    .get("/admin")
    .expect(401);
    
  await request(App)
    .get("/admin")
    .set("Authorization", "Bearer token123")
    .expect(200);
});
```

#### 10.5. URLs de Teste Local
```
http://localhost:3000/           - Página inicial
http://localhost:3000/cadastro   - Página de cadastro
http://localhost:3000/biblioteca - Página da biblioteca
http://localhost:3000/api/livros - API JSON dos livros
```