const mongoose = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Mongoose 7+ ya no necesita estas opciones, están habilitadas por defecto
mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("✅ Conectado a MongoDB correctamente");
    app.listen(PORT, () => {
      console.log("#####################");
      console.log("##### API REST #####");
      console.log("#####################");
      console.log(`🚀 Servidor escuchando en el puerto http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
    process.exit(1);
  });
