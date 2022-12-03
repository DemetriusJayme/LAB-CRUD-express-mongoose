import express from "express";
import AlbumModel from "../models/album.model.js";
const albumRoute = express.Router();

//Post - MongoDB - /create
albumRoute.post("/create", async (req, res) => {
  try {
    const form = req.body;

    const newAlbum = await UserAlbum.create(form);

    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error.errors);
    return res.status(500).json(error.errors);
  }
});

//Get - MongoDB - /albums
albumRoute.get("/albums", async (req, res) => {
  try {
    // find vazio -> todas as ocorrencias
    // projections -> defini os campos que vão ser retornados
    // sort() -> ordenada o retorno dos dados
    // limit() -> define quantas ocorrencias serão retornadas
    const albums = await AlbumModel.find({}, { __v: 0, updatedAt: 0 })
      .sort({
        title: 1,
      })
      .limit(100);

    return res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default albumRoute;
