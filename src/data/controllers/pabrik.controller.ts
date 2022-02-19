import { Controller, Get, Post, Put, Delete, Body, Param } from  '@nestjs/common'
import { Pabrik } from '../models/pabrik.entity';
import { PabrikService } from '../services/pabrik.service';



@Controller('pabrik')
export class PabrikController {
   
  /**
   *
   */
  constructor(private pabrikService: PabrikService) {
  }
  
  @Get()
  index(): Promise<Pabrik[]> {
    return this.pabrikService.findAll();
  }   

  @Post('create')
  async create(@Body() pabrikData: Pabrik): Promise<any> {
    return this.pabrikService.create(pabrikData);
  }  

  @Put(':id/update')
  async update(@Param('id') id, @Body() pabrikData: Pabrik): Promise<any> {
       pabrikData.id = Number(id);
      console.log('Update #' + pabrikData.id)
      return this.pabrikService.update(pabrikData);
  }  
  
  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.pabrikService.delete(id);
  }

}
