import { IBook } from './IBook';

export interface IData {
  statusError: boolean;
  statusCode: number;
  message?: string;
  data?: Array<IBook>;
  messageError?: string;
}
