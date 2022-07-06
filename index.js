require('dotenv').config();
let express = require('express');
let sequelize = require('./db');
let models = require('./models/models');
let userRouter = require('./routes/userRoutes');

const PORT = process.env.PORT || 5000;

let app = express();

app.use(express.json());
app.use('/api', userRouter);

async function start() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Started on ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();