const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('chrome-ext', 'postgres','password' ,{
  host: 'localhost',
  dialect: 'postgres',
  port: 5432  
});

sequelize.authenticate().then(()=>{
    console.log("Connection successfull!")
}).catch((err)=>{
    console.log(err)
});

const Profile = sequelize.define('Profile', {
    name: { type: DataTypes.STRING, allowNull: false },
    url: { type: DataTypes.STRING, allowNull: false },
    about: { type: DataTypes.TEXT },
    bio: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING },
    followerCount: { type: DataTypes.INTEGER },
    connectionCount: { type: DataTypes.INTEGER }
  });
  

Profile.sync().then((data)=>{
    console.log("Table and model synced successfully!");
}).catch((err)=>{
    console.log("Error syncing the table and model!")
})

module.exports = {Profile,sequelize};