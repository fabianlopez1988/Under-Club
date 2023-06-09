import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AgencyModule } from './agency/agency.module';
import { ResidentModule } from './residents/residents.module';
import { EventsModule } from './events/events.module';
import { EpisodesModule } from './episodes/episodes.module';
import { PodcastsModule } from './podcast/podcast.module';
import { NewsModule } from './news/news.module';
import { MailModule } from './mail/mail.module';
import { json } from 'express';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AuthModule,
    AgencyModule,
    ResidentModule,
    PodcastsModule,
    EventsModule,
    EpisodesModule,
    NewsModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(json({ limit: '50mb' })).forRoutes('*');
  }
}
