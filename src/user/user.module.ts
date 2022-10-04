import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]), 
  ClientsModule.register([{
    name: 'AUTH_CLIENT',
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3010
    }
  }])
],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
