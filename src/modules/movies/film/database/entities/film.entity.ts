import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Film {
    @PrimaryGeneratedColumn()
    filmId: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    release_year: number;

    @Column()
    language_id: number;

    @Column()
    rental_duration: number;

    @Column()
    rental_rate: number;

    @Column()
    length: number;

    @Column()
    replacement_cost: number;

    @Column()
    rating: string;

    @Column()
    last_update: Date;

    @Column()
    special_features: string;

    @Column()
    fulltext: string;

}