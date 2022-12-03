import express from "express";
import * as dotenv from "dotenv";
import connect from "./config/db.config.js";
import albumRoute from "./routes/album.route.js";
import purchaseRoute from "./routes/purchase.route.js";

const app = express();

dotenv.config();
connect();
app.use(express.json());

// SUAS ROTAS AQUI!!! v v v não esqueça de importá-las!
app.use("/create-album", albumRoute);
app.use("/all-albums", albumRoute);
app.use("/get-album", albumRoute);
app.use("/update-album", albumRoute);
app.use("/delete-album", albumRoute);
//app.use("/create-purchase", purchaseRoute);
//app.use("/get-purchase", purchaseRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server up and running on port: ${process.env.PORT}!`);
});
