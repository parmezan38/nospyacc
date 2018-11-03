'use strict'
var bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,
            notNull: true,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            notNull: true,
            validate: {
                notEmpty: true
            }
        }
    }, {
        freezeTableName: true,
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }  
    });

    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    
    return User;
}