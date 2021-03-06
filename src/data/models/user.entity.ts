import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    group: string;

    @Column()
    email: string;

    @Column()
    password: string;

}