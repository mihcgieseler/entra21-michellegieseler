const format = require("pg-format");
const db = require("./db");

async function insereEditoras(editoras) {
    // Separando editoras
    const editorasVetor = [];
    
    editoras.forEach(editora => {
        editorasVetor.push([
            editora.nome_gerente,  
            editora.telefone, 
        ]);
    });

    try {
        await db.query("BEGIN;");

        const {rows} = await db.query(format(`            
            INSERT INTO 
                editoras (nome_gerente, telefone)
            VALUES 
                %L
            RETURNING id;`, editorasVetor));
        

        await db.query(" COMMIT;");        
        console.log("Editoras foram cadastradas com sucesso!");
    } catch (error) {
        await db.query("ROLLBACK;")
        console.log(error.message);
    } finally {
        db.end();
    }
}

const editoras = [
    {
        nome_gerente: "Júlia",
        telefone: "(47) 9 8856-1413"

    },
    {
        nome_gerente: "Roberta",
        telefone: "(47) 9 8865-1414"
    },
    {
        nome_gerente: "Paula",
        telefone: "(47) 9 9945-1515"
    },
    {
        nome_gerente: "Janaína",
        telefone: "(47) 9 9102-1616"
    },
    { 
        nome_gerente: "Marcela",
        telefone: "(47) 9 9356-1818"
    }
];

insereEditoras(editoras);