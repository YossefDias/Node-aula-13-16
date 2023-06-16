import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";
import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";
import { Film } from "../entities/film.entity";

export interface IFilmRepository {
    getFilms(): Promise<Film[]>;
    getFilmbyId(id: number): Promise<Film>;
    createFilm(film: CreateFilmDTO): Promise<Film>;
    updateFilm(id: number, film: UpdateFilmDTO): Promise<Film>;
    deleteFilm(id: number): Promise<Film>;
    
}
export default IFilmRepository;