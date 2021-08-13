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
                %L
            RETURNING id;`, livrosVetor));
        

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
        id_editora: 456

    },
    {
        nome_autor: "Rafaela",
        assunto: "Terror",
        preco: "25.90",
        quantidade_estoque: 7,
        id_editora: 456
    },
    {
        nome_autor: "Rafaela",
        assunto: "Terror",
        preco: "25.90",
        quantidade_estoque: 7,
        id_editora: 456
    },
    {
        nome_autor: "Rafaela",
        assunto: "Terror",
        preco: "25.90",
        quantidade_estoque: 7,
        id_editora: 456
    },
    { 
        nome_autor: "Rafaela",
        assunto: "Terror",
        preco: "25.90",
        quantidade_estoque: 7,
        id_editora: 456
    }
];

insereLivros(livros);