import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export const okHttpResponse = (res: Response, response) => {
  res.status(HttpStatus.OK).json({
    message: 'success',
    response,
  });
};

export const createdHttpResponse = (res: Response, response) => {
  res.status(HttpStatus.CREATED).json({
    message: 'success',
    response,
  });
};

export const notFoundResponse = (res: Response, message) => {
  res.status(HttpStatus.NOT_FOUND).json({
    error: true,
    message,
  });
};
