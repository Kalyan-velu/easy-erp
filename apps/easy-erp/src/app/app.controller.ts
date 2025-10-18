import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { erpSchemas } from '@easy-erp/erp-schemas';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log(erpSchemas())
    return this.appService.getData();
  }
  @Get('receive')
  receivedData() {
    return { data: 'received' };
  }
}
