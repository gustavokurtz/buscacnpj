import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CnpjModule } from './cnpj/cnpj.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';


@Module({
  imports: [
    ThrottlerModule.forRoot({
     throttlers: [
       {
         ttl: 60000,
         limit: 5,
       },
     ],
     
   }),
   CnpjModule
 ],
  controllers: [AppController],
  providers: [ {
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  } , AppService],
})
export class AppModule {}
