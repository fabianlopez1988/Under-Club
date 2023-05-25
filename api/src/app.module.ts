import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { PackagesModule } from './packages/packages.module';
import { FormSwornModule } from './forms-sworn/form-sworn.module';
import { EpisodesModule } from './episodes/episodes.module';
import { json } from 'express';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://edgar_lagos:hcB1I3QbOiiYdeA6@cluster0.nuwmk5t.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
    PackagesModule,
    FormSwornModule,
    EpisodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(json({ limit: '50mb' })).forRoutes('*');
  }
}
