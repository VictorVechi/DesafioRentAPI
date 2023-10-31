import { Sequelize, DataTypes } from "sequelize"
import sequelize from "../config/database.js"
const VeiculosModel = sequelize.define('Veiculos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    locadora : {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    modelo: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    marca: {
        type: DataTypes.STRING(150),
        allowNull: false,
    },
    ano: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    motor: {
        type: DataTypes.STRING(150),
        allowNull:false,
    },
    portas: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    cambio: {
        type: DataTypes.STRING(150),
        allowNull:false,
    },
    ar_condicionado: {
        type: DataTypes.BOOLEAN,
        allowNull:false
    }
})
export default VeiculosModel
