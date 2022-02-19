import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pabrik {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pt: string;

    @Column()
    pulau: string;

    @Column()
    pabrik: string;

    @Column()
    kapasitas: number;

}