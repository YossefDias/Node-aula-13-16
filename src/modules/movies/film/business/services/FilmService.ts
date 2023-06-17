import { Film } from "../../database/entities/film.entity";
import IFilmRepository from "../../database/repositories/IFilmRepository";

import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";
import { IFilmService } from "./IFilmService";

export class FilmService implements IFilmService {
    private readonly filmRepository: IFilmRepository;

    constructor(filmRepository: IFilmRepository) {
        this.filmRepository = filmRepository;
    }

    async getFilms(): Promise<Film[]> {
        return this.filmRepository.getFilms();
    }

    async getFilmbyId(film_id: number): Promise<Film> {
        return this.filmRepository.getFilmbyId(film_id);
    }

    async createFilm(film: CreateFilmDTO): Promise<Film> {
        return this.filmRepository.createFilm(film);
    }

    async updateFilm(id: number, film: UpdateFilmDTO): Promise<Film> {
        return this.filmRepository.updateFilm(id, film);
    }

    async deleteFilm(id: number): Promise<void> {
        return this.filmRepository.deleteFilm(id);
    }
}