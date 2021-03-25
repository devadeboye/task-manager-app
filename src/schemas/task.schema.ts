import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: [true, 'please provide task title'] })
  title: string;

  @Prop({ required: [true, 'please provide task description'] })
  description: string;

  @Prop({ required: [true, 'please provide start date'] })
  startDate: string;

  @Prop({ required: [true, 'please provide start date'] })
  endDate: string;

  @Prop({ default: 'uncompleted', enum: ['uncompleted', 'completed'] })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
