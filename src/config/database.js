import { Sequelize } from "sequelize"

//Configuração de conexão com o banco de dados
const conexao = {
    dialect: 'mysql',
    host:'localhost',
    username:'root',
    password:'ANSKk08aPEDbFjDO',
    database: 'testing',
    port: 3307,
    define: {
        timestamps:true
    }
}
//Cria a conexão com o banco de dados
const sequelize = new Sequelize(conexao)

export default sequelize