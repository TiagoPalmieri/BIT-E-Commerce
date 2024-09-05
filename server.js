const app = require('./app');
const PORT = process.env.PORT || 3000;
const sequelize = require('./sequelizeConfig')

(async () => {
    try {
      await sequelize.sync(); 
      app.listen(PORT); 
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    } catch (error) {
      console.error('Error al iniciar el servidor:', error);
    }
  })();