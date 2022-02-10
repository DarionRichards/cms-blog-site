const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}

const schema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    blogId: {
        type: DataTypes.INTEGER,
        refernces: {
            model: "blog",
            key: "id",
        },
    },
    userId: {
        type: DataTypes.INTEGER,
        refernces: {
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
    modelName: "comment",
};

Comment.init(schema, options);

module.exports = Comment;