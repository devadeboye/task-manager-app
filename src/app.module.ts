import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskSchema } from './schemas/task.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/task-manager-app'), //, {
    //   useFindAndModify: false,
    // }),
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }]),
  ],
  exports: [MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
