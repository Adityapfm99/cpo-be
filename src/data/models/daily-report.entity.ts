import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DailyReport {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    periode: Date;

    @Column()
    pt: string;

    @Column()
    tbs: number;

    @Column()
    cpo: number;

    @Column()
    pulau : string;

}