const sequelize = require("./database");
const Usuario = require("./models/Usuario");
const Projeto = require("./models/Projeto");

(async () => {
    try {

        //Criando todas as tabelas
        await sequelize.sync ({force : true});
        
        //Inserindo um usuário
        const pedro = await Usuario.create({
            nome: "pedro",
            email:"pedro@ped.com",
            senha:"123456"
            });

        //Criando um projeto
        const projeto = await Projeto.create({
            nome: "Projeto Verão 2021",
            quantidadeHoras: 60
        });
        await projeto.addUsuario(pedro);
        await projeto.removeUsuarios();
    

        //Criando um endereço
        // await Endereco.create({
        //     rua: "Rua 01",
        //     numero: 123,
        //     idUsuario: pedro.id
        // });
        // console.log("Endereço criado com sucesso!");

        await pedro.createEndereco({
            rua: "Rua 01",
            numero: 123
        });
        console.log("Endereço criado com sucesso!");

        // Cria 1 tabela
        // await Usuario.sync({force:true})
        // console.log("ok")
 
        // // cria todas as tabelas
        // // await sequelize.sync({force:true});
        // const pedro = await Usuario.create({
        //     nome: "pedro",
        //     email:"pedro@ped.com",
        //     senha:"123456"
        //     });
        //     console.log(pedro.toJSON())
        // //modificar pedro
        // pedro.email = "pedrao@email.com"
        // await pedro.save();
        // console.log("#atualizado")
        
        // await pedro.destroy();
        // console.log("#destruido")
 
        // const usuarios = await Usuario.bulkCreate([
        //     {
        //         nome: "pedro",
        //         email:"pedro@ped.com",
        //         senha:"123456"
        //     },
        //     {
        //         nome: "jose",
        //         email:"jose@ped.com",
        //         senha:"123456"
        //     },
        //     {
        //         nome: "paulo",
        //         email:"paulo@ped.com",
        //         senha:"123456"
        //     }
        // ]);
        // console.log(usuarios)
        // usuarios.forEach(usuario => console.log(usuario.toJSON()));
        
        //comparando senha
 
        // console.log(compareSync("123456",usuarios[0].toJSON().senha))
 
        // //mostrando todos users
        // const todosUsuarios = await Usuario.findAll(
        //     {
        //         where: {
        //             nome: {
        //                 [Op.iLike]:"p%"
        //             }
        //         }
        //     }
        // );
        // for(let u of todosUsuarios){
        //     console.log(u.toJSON())
        // }
   
        // const umUser = await Usuario.findOne({
        //     where: {
        //             nome:"paulo"
        //         }
        // })
 
        // console.log(umUser.toJSON())
 
        // const jose = await Usuario.findByPk("aaa4a450-c55f-4c29-8540-e36c43994b47");
        // console.log(jose.toJSON())
    } catch (err){
        console.log(err.message)
    } finally{
        sequelize.close();
    }
})();