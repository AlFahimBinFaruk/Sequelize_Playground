const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config");

class Blog extends Model {}

Blog.init(
  {
    blogId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "blog",
    timestamps: true,
  }
);

module.exports = Blog;
