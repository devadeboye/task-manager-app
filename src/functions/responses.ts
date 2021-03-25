import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export const successResponse = (res: Response, response) => {
  res.status(HttpStatus.CREATED).json({
    message: 'success',
    response,
  });
};

export const errorResponse = (res: Response, message) => {
  res.status(HttpStatus.NOT_FOUND).json({
    error: true,
    message,
  });
};
