import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyReport } from '../models/daily-report.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class DailyReportService {

  
    constructor(@InjectRepository(DailyReport)
    private dailyReportRepository: Repository<DailyReport>) {
    }

    async  findAll(): Promise<DailyReport[]> {
        return await this.dailyReportRepository.find();
    }

    async  create(DailyReport: DailyReport): Promise<DailyReport> {
        return await this.dailyReportRepository.save(DailyReport);
    }

    async update(DailyReport: DailyReport): Promise<UpdateResult> {
        return await this.dailyReportRepository.update(DailyReport.id, DailyReport);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.dailyReportRepository.delete(id);
    }
}
