const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const Users = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Debe ser un mail valido"
            }
        }
    },
    userPassword: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            len: {
                args: [8, 20],
                msg: 'La contraseña debe tener entre 8 y  20 caracteres.'
            },
            noSpaces(value) {
                if (/\s/.test(value)) {
                  throw new Error('El nombre no debe contener espacios.');
                }
              }
        }
        
    },
    fullName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            len: {
                args: [2, 200],
                msg: 'El nombre debe ser valido.'
            }
        }
    },
    telephone: {
        type: DataTypes.STRING,
        validate: {
            len: {
                args: [9, 13],
                msg: 'El telefono debe ser valido.'
            }
        }
    },
    dni: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: {
                args: [7, 9],
                msg: 'El dni debe ser valido.'
            }
        }
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    rol: {
        type: DataTypes.ENUM('admin', 'user', 'staff'),
        allowNull: false,
        defaultValue: 'user'
    }
});

module.exports = Users