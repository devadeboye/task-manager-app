import { Response } from 'express';
import { AppService } from './app.service';
import { TaskDto } from './dto/task.dto';
import { DateTransformPipe } from './date.pipe';
import {
  okHttpResponse,
  notFoundResponse,
  createdHttpResponse,
} from './functions/sharedFunctions';
import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Res,
  Query,
} from '@nestjs/common';

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
        createdHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
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
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }

  @Get('view-task-by-day')
  viewTaskByDay(
    @Query('date', new DateTransformPipe()) date,
    @Res() res: Response,
  ) {
    this.appService
      .viewTaskByDay(date)
      .then((response) => {
        if (!response) {
          throw 'unable to fetch tasks';
        }
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }

  @Get('view-uncompleted-task-by-day')
  viewUncompletedTaskByDay(
    @Query('date', new DateTransformPipe()) date,
    @Res() res: Response,
  ) {
    this.appService
      .viewUncompletedTaskByDay(date)
      .then((response) => {
        if (!response) {
          throw 'unable to fetch tasks';
        }
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }

  @Get('view-completed-task-by-day')
  viewCompletedTaskByDay(
    @Query('date', new DateTransformPipe()) date,
    @Res() res: Response,
  ) {
    const dateValue: string = date.date;
    this.appService
      .viewCompletedTaskByDay(dateValue)
      .then((response) => {
        if (!response) {
          throw 'unable to fetch tasks';
        }
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }

  @Delete('delete')
  deleteTask(@Query() id, @Res() res: Response) {
    const idValue: string = id.id;
    this.appService
      .deleteTask(idValue)
      .then((response) => {
        if (!response) {
          throw 'unable to delete task';
        }
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }

  // @Patch()
  // editTask(@Query() id: string, @Res() res: Response) {
  //   this.appService
  //     .editTask(id)
  //     .then((response) => {
  //       if (!response) {
  //         throw 'unable to edit task';
  //       }
  //       okHttpResponse(res, response);
  //     })
  //     .catch((message) => {
  //       notFoundResponse(res, message);
  //     });
  // }

  @Patch('mark-completed')
  markCompleted(@Query() id, @Res() res: Response) {
    const idValue: string = id.id;
    this.appService
      .markCompleted(idValue)
      .then((response) => {
        if (!response) {
          throw 'unable to mark task as completed';
        }
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }

  @Patch('mark-uncompleted')
  markUnCompleted(@Query() id, @Res() res: Response) {
    const idValue: string = id.id;
    this.appService
      .markUnCompleted(idValue)
      .then((response) => {
        if (!response) {
          throw 'unable to mark task as uncompleted';
        }
        okHttpResponse(res, response);
      })
      .catch((message) => {
        notFoundResponse(res, message);
      });
  }
}
