import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common'
import { DailyReport } from '../models/daily-report.entity';
import { User } from '../models/user.entity';
import { DailyReportService } from '../services/daily-report.service';


@Controller('dailyReport')
export class DailyReportController {
   
  constructor(private dailyReportService: DailyReportService) {
  }
  
  @Get()
  index(): Promise<DailyReport[]> {
    return this.dailyReportService.findAll();
  }   

  @Post('create')
  async create(@Body() dailyReportData: DailyReport): Promise<any> {
    return this.dailyReportService.create(dailyReportData);
  }  

  @Put(':id/update')
  async update(@Param('id') id, @Body() dailyReportData: DailyReport): Promise<any> {
      dailyReportData.id = Number(id);
      console.log('Update #' + dailyReportData.id)
      return this.dailyReportService.update(dailyReportData);
  }  
  
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.dailyReportService.delete(id);
  }

}
