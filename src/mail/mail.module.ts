import {Global, Module} from '@nestjs/common';
import { MailService } from './mail.service';
import {MailerModule} from "@nestjs-modules/mailer";
import {join} from 'path';
import {HandlebarsAdapter} from "@nestjs-modules/mailer/dist/adapters/handlebars.adapter";
@Global()
@Module({
  imports:[MailerModule.forRoot({
    transport:{
      host:'smtp.gmail.com',
      port:587,
      secure:false,
      auth:{
        user:'testnestjs122@gmail.com',
        pass:'MEMNxk8VJXdZ'
      },
    },
    defaults:{
      from:'testnestjs122@gmail.com'
    },
    template:{
      dir:join(__dirname, 'templates'),
      adapter:new HandlebarsAdapter(),
      options:{
        strict:true
      }
    }
  })],
  providers: [MailService],
  exports:[MailService]
})
export class MailModule {}
