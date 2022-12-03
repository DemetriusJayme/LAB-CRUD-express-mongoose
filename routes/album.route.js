import express from "express";
import AlbumModel from "../models/album.model.js";
const albumRoute = express.Router();

console.log("estou no album.route.js");

//Post - MongoDB - /create-album
albumRoute.post("/create-album", async (req, res) => {
  console.log("entrei no create Album");

  try {
    const form = req.body;

    const newAlbum = await UserAlbum.create(form);

    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error.errors);
    return res.status(500).json(error.errors);
  }
});

//Get - MongoDB - /all-albums
albumRoute.get("/all-albums", async (req, res) => {
  try {
    // find vazio -> todas as ocorrencias
    // projections -> define os campos que vão ser retornados
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

//Get - MongoDB - /get-album/:userID
albumRoute.get("/get-album/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const user = await UserModel.findById(albumId).populate("albums");

    console.log("entrei no get-album");
    console.log(userId);

    if (!user) {
      return res.status(400).json({ msg: "Album não encontrado!" });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//Put - MongoDB - /update-album/:userId
albumRoute.put("/update-album/:userId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const updatedAlbum = await UserModel.findByIdAndUpdate(
      albumId,
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedAlbum);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

//Delete - MongoDB - /delete-album/:userId
albumRoute.delete("/delete-album/:id", async (req, res) => {
  try {
    const { albumId } = req.params;

    const deletedAlbum = await UserModel.findByIdAndDelete(id);

    if (!deletedAlbum) {
      return res.status(400).json({ msg: "Album não encontrado!" });
    }

    const albums = await AlbumModel.find();

    //Deleta TODAS as receitas onde o usuário esta relacionado
    await AlbumModel.deleteMany({ user: albumId });

    return res.status(200).json(albums);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.errors);
  }
});

export default albumRoute;
