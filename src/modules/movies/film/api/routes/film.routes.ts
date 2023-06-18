import express from "express";

import { FilmController } from "../controllers/FilmController";
import { FilmService } from "../../business/services/FilmService";
import { FilmRepository } from "../../database/repositories/FilmRepository";

const router = express.Router();
const filmRepository = new FilmRepository();
const filmService = new FilmService(filmRepository);
const filmController = new FilmController(filmService);

router.get('/', (req, res) => filmController.getFilms(req, res));
router.get('/:id', (req, res) => filmController.getFilmsById(req, res));
router.post('/', (req, res) => filmController.createFilm(req, res));
router.put('/:id', (req, res) => filmController.updateFilm(req, res));
router.delete('/:id', (req, res) => filmController.deleteFilm(req, res));

export default router;