module.exports = (sequelize, DataTypes) => {
    const Burgers = sequelize.define('Burger', {
        burger: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        devoured: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      });
      return Burgers;
};