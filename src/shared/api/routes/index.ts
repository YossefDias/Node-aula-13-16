import { Router } from "express";

import FilmRouter from "@modules/movies/film/api/routes/film.routes";

export const router = Router();

router.use('/films', FilmRouter);