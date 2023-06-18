import { Request, Response } from "express";

import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";

import { IFilmService } from "../../business/services/IFilmService";
import { IFilmController } from "./IFilmController";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

export class FilmController implements IFilmController {
    private readonly filmService: IFilmService;

    constructor(filmService: IFilmService) {
        this.filmService = filmService;
    }
    getFilms(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }
    getFilmById(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
        throw new Error("Method not implemented.");
    }
 
    public async getFilmsById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

        const films = await this.filmService.getFilmbyId(Number(id));
        return res.json(films);
       
    }

    public async createFilm(req: Request, res: Response): Promise<Response> {
        const film = await this.filmService.createFilm(req.body as CreateFilmDTO);
        return res.json(film);
    }

    public async updateFilm(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const film = await this.filmService.updateFilm(Number(id), req.body as UpdateFilmDTO);
        return res.json(film);
    }

    public async deleteFilm(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        await this.filmService.deleteFilm(Number(id));
        return res.status(204).send();
    }

}