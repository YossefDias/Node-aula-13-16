import { Film } from "../entities/film.entity";

export interface IFilmRepository {
    getFilms(): Promise<Film[]>;
    getFilmbyId(id: number): Promise<Film>;
    createFilm(film: Film): Promise<Film>;
    updateFilm(id: number, film: Film): Promise<Film>;
    deleteFilm(id: number): Promise<Film>;
    
}
export default IFilmRepository;