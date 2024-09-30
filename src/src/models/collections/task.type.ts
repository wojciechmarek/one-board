import { Models } from 'appwrite';

export type Task = {
  taskName: string;
  description: string;
  isDone: boolean;
};

export type TaskDocument = Task & Models.Document;
