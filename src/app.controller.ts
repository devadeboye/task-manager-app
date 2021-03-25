import { Controller, Get, Post, Patch, Delete, Body, Res, HttpStatus, } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { TaskDto } from './dto/task.dto';
import { successResponse, errorResponse } from './functions/responses';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add-task')
  addTask(@Body() task: TaskDto, @Res() res: Response): void {
    this.appService
      .addTask(task)
      .then((response) => {
        if (!response) {
          throw 'unable to add task';
        }
        successResponse(res, response);
      })
      .catch((message) => {
        errorResponse(res, message);
      });
  }

  @Get('view-all')
  viewAllTasks(@Res() res: Response) {
    this.appService
      .viewAllTasks()
      .then((response) => {
        if (!response) {
          throw 'unable to fetch tasks';
        }
        successResponse(res, response);
      })
      .catch((message) => {
        errorResponse(res, message);
      });
  }
}
