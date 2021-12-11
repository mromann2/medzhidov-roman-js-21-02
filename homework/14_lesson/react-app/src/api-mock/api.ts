import { CommentResponse } from '../types/responses';

export const apiResponse: CommentResponse = {
  status: 'ok',
  result: [{
    name: 'Roman',
    text: 'Salam',
  },
  {
    name: 'Ivan',
    text: 'Salam Aleikum',
  },
  {
    name: 'Katarina',
    text: 'Salam E',
  }],
};
