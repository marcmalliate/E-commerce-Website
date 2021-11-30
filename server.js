const express = require('express');
const routes = require('./routes');
// Imported sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sequelize models synced to the database and server turned on
sequelize.sync({ force: false }).then(() => {

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});