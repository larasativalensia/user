import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  
  imports: [UserModule, MongooseModule.forRoot('mongodb://localhost/User'),
  
],
  
})
export class AppModule {}
