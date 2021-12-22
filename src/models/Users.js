const { Model, DataTypes } = require("sequelize");

const connection = require("../config/connection");

class User extends Model {}

const schema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

const options = {
    connection,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
};

User.init(schema, options);

module.exports = User;