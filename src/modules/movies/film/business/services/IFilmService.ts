import { Film } from "../../database/entities/film.entity";
import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";

export interface IFilmService {
    getFilms(): Promise<Film[]>;
    getFilmbyId(film_id: number): Promise<Film>; 
    createFilm(film: CreateFilmDTO): Promise<Film>;
    updateFilm(id: number, film: UpdateFilmDTO): Promise<Film>;
    deleteFilm(id: number): Promise<void>;
}