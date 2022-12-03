import express from "express";
import PurchaseModel from "../models/purchase.model.js";

const purchaseRoute = express.Router();

console.log("estou no purchase.route.js");

//Post - MongoDB - /create-purchase
purchaseRoute.post("/create-purchase", async (req, res) => {
  console.log("entrei no create Purchase");

  try {
    const form = req.body;

    const newPurchase = await UserPurchase.create(form);

    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error.errors);
    return res.status(500).json(error.errors);
  }
});

//Get - MongoDB - /get-album/:userID
purchaseRoute.get("/get-purchase/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const purchase = await PurchaseModel.findById(albumId).populate(
      "purchases"
    );

    console.log("entrei no get-purchase");
    console.log(albumId);

    if (!purchase) {
      return res.status(400).json({ msg: "Compra não encontrada!" });
    }

    return res.status(200).json(purchase);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default purchaseRoute;
