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
    return this.taskModel.find({});
  }

  viewTaskByDay(date: string) {
    // TODO: implement a report which tells percentage completed for the day
    return this.taskModel.find({ startDate: date });
  }

  viewUncompletedTaskByDay(date: string) {
    return this.taskModel.find({
      startDate: date,
      status: 'uncompleted',
    });
  }

  viewCompletedTaskByDay(date: string) {
    const readableFormat = new Date(date).toDateString();
    return this.taskModel.find({
      startDate: readableFormat,
      status: 'completed',
    });
  }

  // editTask(id: string) {
  //   return this.taskModel.findOneAndUpdate(
  //     { _id: id },
  //     { title, description, startDate, endDate },
  //     { new: true },
  //   );
  // }

  markCompleted(id: string) {
    return this.taskModel.findOneAndUpdate(
      { _id: id },
      { status: 'completed' },
      { new: true },
    );
  }

  markUnCompleted(id: string) {
    return this.taskModel.findOneAndUpdate(
      { _id: id },
      { status: 'uncompleted' },
      { new: true },
    );
  }

  deleteTask(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }

  // deleteMultipleTask() {
  //
  // }

  // clearAllTask() {
  //
  // }
}
