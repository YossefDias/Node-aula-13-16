import { Request, Response } from "express";

import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";

import { IFilmService } from "../../business/services/IFilmService";
import { IFilmController } from "./IFilmController";

export class FilmController implements IFilmController {
    private readonly filmService: IFilmService;

    constructor(filmService: IFilmService) {
        this.filmService = filmService;
    }

    public async getFilmsById(req: Request, res: Response): Promise<Response> {
        const films = await this.filmService.getFilms();
        return res.json(films);
       
    }

    public async createFilm(req: Request, res: Response): Promise<Response> {
        const film = await this.filmService.createFilm(req.body as CreateFilmDTO);
        return res.json(film);
    }

    public async updateFilm(req: Request, res: Response): Promise<Response> {
        const { film_id } = req.params;

        const film = await this.filmService.updateFilm(Number(film_id), req.body as UpdateFilmDTO);
        return res.json(film);
    }

    public async deleteFilm(req: Request, res: Response): Promise<Response> {
        const { film_id } = req.params;
        await this.filmService.deleteFilm(Number(film_id));
        return res.status(204).send();
    }

}