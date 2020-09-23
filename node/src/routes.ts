import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({ name: 'Luísa', email: 'luisa@gmail.com', password: '123456' });

  return response.json(user)
};
