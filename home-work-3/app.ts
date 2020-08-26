import "reflect-metadata";
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
import { User } from './data-access/user.entity';
import { ROUTES } from './routes';

const app = express();
app.use(express.json());
const PORT = 4000;

app.listen(PORT, async () => {
 
  try {
    await createConnection();
    createRoutes();
    console.log(`server is running on ${PORT}.`);
  } catch (error) {
    console.log('error connections', error);
  }

});

function createRoutes() {
  // register express routes from defined application routes
  ROUTES.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
      const result = (new (route.controller as any))[route.action](req, res, next);
      if (result instanceof Promise) {
        result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    });
  });
}