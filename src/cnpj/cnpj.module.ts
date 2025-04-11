import { Module } from '@nestjs/common';
import { CnpjService } from './cnpj.service';
import { CnpjController } from './cnpj.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CnpjController],
  providers: [CnpjService],
})
export class CnpjModule {}
