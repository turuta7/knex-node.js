const express = require('express');
const router = require('./routers')

const app = express();

app.use(express.json());
app.use('/api', router)

app.listen(8080, () => console.log('start sercer'))
