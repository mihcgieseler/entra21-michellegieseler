const format = require("pg-format");
const db = require("./db");

async function insereLivros(livros) {
    // Separando livros
    const livrosVetor = [];
    
    livros.forEach(livro => {
        livrosVetor.push([  
            livro.nome_autor,
            livro.assunto, 
            livro.preco, 
            livro.quantidade_estoque,
            livro.id_editora  
        ]);
    });

    try {
        await db.query("BEGIN;");

        const {rows} = await db.query(format(`            
            INSERT INTO 
                livros (nome_autor, assunto, preco, quantidade_estoque, id_editora)
            VALUES 
                %L;`, livrosVetor));
        

        await db.query(" COMMIT;");        
        console.log("Os livros foram cadastradas com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}

const livros = [
    {
        nome_autor: "Rafaela",
        assunto: "Terror",
        preco: "25.90",
        quantidade_estoque: 7,
        id_editora: "ef889c20-f104-4031-968f-a5f5bab414c6"

    },
    {
        nome_autor: "Júlia",
        assunto: "Suspense",
        preco: "30",
        quantidade_estoque: 7,
        id_editora: "d3ea9255-5485-4fb1-9579-922c87ec1257"
    },
    {
        nome_autor: "Carolina",
        assunto: "Romance",
        preco: "55.90",
        quantidade_estoque: 7,
        id_editora: "c63a6989-e478-453b-abea-93660e0f2659"
    },
    {
        nome_autor: "Bruna",
        assunto: "Comédia",
        preco: "33.50",
        quantidade_estoque: 7,
        id_editora: "6fffba89-7ceb-4e62-b9a1-fa6214fc7644"
    },
    { 
        nome_autor: "Cláudia",
        assunto: "HQ",
        preco: "44.90",
        quantidade_estoque: 7,
        id_editora: "3ccbe3ed-fcc4-4d5f-8ca7-f278c3244511"
    }
];

insereLivros(livros);