const { Pool } = require("pg");
 
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123456",
    database: "node"
});
 
(async () => {
    try {
        const funcionarios = [
            ["joão", "joão@email.com", "(47) 9 8888-8888"],
            ["maria", "maria@email.com", "(47) 9 7777-7777"],
        ];
 
        const query = format("INSER INTO funcionarios (nome, email, telefone) VALUES %L RETURNING *", funcionarios)
        console.log(query);
 
        const res = await pool.query(`
    INSERT INTO
    funcionarios (nome, email, telefone)
    VALUES
    ($1, $2, $3)
    RETURNING *;`,
            ["pedro", "pedro@email.com", "(47) 9 9999-9999"]);
        console.log(res.rows[0]);
    } catch (error) {
        console.log(error.message);
    } finally {
        pool.end();
    }
})();
try{
    const {rows} = await pool.query(`SELECT * FROM funcionarios WHERE nome ILIKE $1`,['p%'])
    console.log(rows)
} catch (error){
    console.log(error.message)
}
finally{
    pool.end();
}