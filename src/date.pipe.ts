import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class DateTransformPipe implements PipeTransform<string, string> {
  transform(value: any, metadata: ArgumentMetadata): string {
    // TODO: validate if date is in YYYY-MM-DD format here
    const readableFormat = new Date(value).toDateString();
    return readableFormat;
  }
}
