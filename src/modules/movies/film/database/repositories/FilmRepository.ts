import { Repository } from "typeorm";

import { Film } from "../entities/film.entity";

import { IFilmRepository } from "./IFilmRepository";

import { CreateFilmDTO } from "../../dtos/CreateFilmDTO";

import { UpdateFilmDTO } from "../../dtos/UpdateFilmDTO";

export class FilmRepository implements IFilmRepository {
    
}