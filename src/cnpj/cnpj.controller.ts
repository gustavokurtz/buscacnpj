import { Controller, Get, Param } from '@nestjs/common';
import { CnpjService } from './cnpj.service';

@Controller('cnpj')
export class CnpjController {
  constructor(private readonly cnpjService: CnpjService) {}

  @Get(':cnpj')
  async findCnpj(@Param('cnpj') cnpj: string) {
    return this.cnpjService.findCnpj(cnpj);
  }

}
