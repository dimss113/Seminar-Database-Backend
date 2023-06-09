const express = require('express');
const app = express();
const port = 8888;
const cors = require('cors');
const acaraSeminarRouter = require('../app/routes/acaraseminarRoute');
const pembayaranRouter = require('../app/routes/pembayaranRoute');
const pembicaraRouter = require('../app/routes/pembicaraRoute');
const pendaftaranRouter = require('../app/routes/pendaftaranRoute');
const penggunaRouter = require('../app/routes/penggunaRoute');
const penyelenggaraRouter = require('../app/routes/penyelenggaraRoute');
const tempatDudukRouter = require('../app/routes/tempatdudukRoute');

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

// app.get("/", (req, res) => res.send("Testing port"));
app.use('/acaraseminar', acaraSeminarRouter);
app.use('/pembayaran', pembayaranRouter);
app.use('/pembicara', pembicaraRouter);
app.use('/pendaftaran', pendaftaranRouter);
app.use('/pengguna', penggunaRouter);
app.use('/penyelenggara', penyelenggaraRouter);
app.use('/tempatduduk', tempatDudukRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}`));
