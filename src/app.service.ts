import { Injectable } from '@nestjs/common';
import { TaskDto } from './dto/task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { TaskDocument } from './schemas/task.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('Task') private taskModel: Model<TaskDocument>) {}

  async addTask(task: TaskDto): Promise<TaskDocument> {
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async viewAllTasks() {
    // TODO: display all tasks and categorise them based on date
    return this.taskModel.find({});
  }

  viewTaskByDay() {
    // TODO: implement a report which tells percentage completed for the day
  }

  viewUncompletedTaskByDay() {
    // TODO: filter them with start date
  }

  viewCompletedTaskByDay() {}

  editTask() {}

  deleteTask() {}

  deleteMultipleTask() {}

  clearAllTask() {
    // wipe the db
  }
}
