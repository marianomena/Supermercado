const express = require ("express");
const app = express();
const bodyParser = require ("body-parser");
const cors = require ("cors");
const mongoose = require("mongoose");
require("dotenv/config");


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
	process.env.DB_CONNECTION,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true
	}
), (req,res) => {
	console.log("conectado a la base de datos");
}

const proveedoresRoutes = require("./api/Routes/proveedores/proveedores");

app.use("/api/routes/proveedores/", proveedoresRoutes);

app.listen(PORT, () =>{
	console.log("escuchando puerto 5000")
})

