import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pabrik } from '../models/pabrik.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class PabrikService {

    /**
     *
     */
    constructor(@InjectRepository(Pabrik)
    private pabrikRepository: Repository<Pabrik>) {
    }
    /**
     *
     */

    async  findAll(): Promise<Pabrik[]> {
        return await this.pabrikRepository.find();
    }

    async  create(pabrik: Pabrik): Promise<Pabrik> {
        return await this.pabrikRepository.save(pabrik);
    }

    async update(pabrik: Pabrik): Promise<UpdateResult> {
        return await this.pabrikRepository.update(pabrik.id, pabrik);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.pabrikRepository.delete(id);
    }
}
