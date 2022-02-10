const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Blog extends Model {}

const schema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: { type: DataTypes.STRING, allowNull: false },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id",
        },
    },
};

const options = {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "blog",
};

Blog.init(schema, options);

module.exports = Blog;