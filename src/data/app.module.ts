import { Module } from '@nestjs/common';
import { ContactsService } from './services/contacts.service';
import { ContactsController } from './controllers/contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './models/contact.entity';
import { User } from './models/user.entity';
// import { Pabrik } from './models/';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Contact,
      User
    ]),
  ],
  providers: [ContactsService, UserService],
  controllers: [ContactsController, UserController]
})
export class CpoModule {}

