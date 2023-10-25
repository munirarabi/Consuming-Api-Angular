import { IBook } from './IBook';

export interface IData {
  data?: Array<IBook>;
  message?: string;
  statusError: boolean;
  statusCode: number;
  messageError?: string;
}
