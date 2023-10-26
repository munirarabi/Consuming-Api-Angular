import { IBook } from './IBook';

export interface IData {
  statusError: boolean;
  statusCode: number;
  data?: Array<IBook>;
  message?: string;
  messageError?: string;
}
