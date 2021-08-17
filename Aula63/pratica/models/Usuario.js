const { DataTypes, Sequelize, Model } = require("sequelize");
const { hashSync, compareSync } = require("bcrypt");


class Usuario extends Model {
    static init(sequelize) {
        super(
            {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4
            },
                nome: {
                type: DataTypes.STRING,
                allowNull: false
            },
                email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                    msg: "E-mail inválido!"
                    }
                }
            },
                senha: {
                type: DataTypes.STRING,
                allowNull: false,
                set(value) {
                    this.setDataValue("senha", hashSync(value, 10));
                    }
                }
            }, {sequelize});
    }

    static associate(models){
        this.belongsToMany(models.Projeto, {
            through: "UsuariosProjetos",
            as: {
                singular: "projeto",
                plural: "projetos"
            }
        });
        
        this.hasOne(models.Endereco, {
            foreignKey: {
                name: "idUsuario",
                allowNull: false
            }
        });  
    }

    checarSenha(senha) {
    return compareSync(senha, this.senha);
    }
};



sequelize.sync ({force : true})
    .then(_ => console.log("Tabelas Criadas!"));

module.exports = Usuario;