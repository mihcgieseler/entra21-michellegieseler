const db = require("./db");

(async () => {
    try {
        `		CREATE TABLE IF NOT EXISTS clientes(
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            nome text NOT NULL,
            email text UNIQUE,
            telefone numeric UNIQUE,
            numero_documento numeric NOT NULL UNIQUE,
            tipo_pessoa text NOT NULL,
            pontos integer DEFAULT 0
        );

           CREATE TABLE IF NOT EXISTS editoras(
                id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                nome_gerente text NOT NULL,
                telefone numeric NOT NULL
        );

        CREATE TABLE IF NOT EXISTS enderecos (
            id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            rua text NOT NULL,
            numero integer NOT NULL,
            cidade text NOT NULL,
            estado text NOT NULL,
            cep text NOT NULL,
            id_cliente uuid,
            FOREIGN KEY (id_cliente) REFERENCES clientes (id)
        );
        CREATE TABLE IF NOT EXISTS livros(
            isbn uuid PRIMARY KEY DEFAULT gen_random_uuid(),
            nome_autor text NOT NULL,
            assunto text NOT NULL,
            quantidade_estoque integer NOT NULL,
            preco numeric NOT NULL,
            id_editora uuid,
            FOREIGN KEY (id_editora) REFERENCES editoras (id)
        );
        CREATE TABLE IF NOT EXISTS compras (
            id_cliente uuid,
            id_livro uuid,
            data timestamp NOT NULL,
            valor numeric NOT NULL,
            PRIMARY KEY (id_cliente, id_livro, data),
            FOREIGN KEY (id_cliente) REFERENCES clientes (id),
            FOREIGN KEY (id_livro) REFERENCES livros (isbn)
        );
    );`
    console.log("tabelas criadas")
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();