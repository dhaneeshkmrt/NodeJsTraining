import express, { Application, Request, Response } from 'express';
import isAlphaNumeric from 'validator/es/lib/isAlphanumeric';
import isLength from 'validator/es/lib/isLength';
import isInt from 'validator/es/lib/isInt';
import { v4 } from 'uuid';
import { data } from './data';
import { User } from './user';
import { validateUser } from './validate-user';
import { getAutoSuggestUsers } from './utils';
import validator from 'validator';

const app: Application = express();
const port = 4000;

app.use(express.json());

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  const selectedUser = data.find(user => user.id === id);
  if (!selectedUser) {
    return res.json("invalid user id");
  }
  res.json(selectedUser);
});

app.post('/user', (req: Request, res: Response) => {
  if (validateUser(req.body)) {
    return res.json('Error in input');
  }
  const newUser: User = {
    id: v4(),
    login: req.body?.login,
    password: req.body?.password,
    age: req.body?.age,
    isDeleted: false,
  };
  data.push(newUser);
  res.json(newUser);
});

app.put('/user/:id', (req, res) => {
  const id = req.params?.id;
  const index = data.findIndex(user => user.id === id);

  if (index === -1) {
    return res.json("invalid user id");
  }

  const oldUser = data[index];

  if (!validator.isAlphanumeric(req.body?.password)) {
    oldUser.password = req.body?.password;
  }

  if (!validator.isLength(req.body?.login, { min: 1 })) {
    oldUser.password = req.body?.password;
  }

  if (!validator.isInt(req.body?.age, { min: 4, max: 130 })) {
    oldUser.age = req.body?.age;
  }
  res.json(oldUser);
});

app.delete('/user/:id', (req, res) => {
  const id = req.params?.id;
  const index = data.findIndex(user => user.id === id);
  if (index === -1) {
    return res.json("invalid user id");
  }
  const oldUser = data[index];
  oldUser.isDeleted = true;
  res.send(true);
});

app.get('/auto-suggest/:login/:limit', (req, res) => {
  const login = req.params?.login;
  const limit = Number(req.params?.limit) || 10;
  const users = getAutoSuggestUsers(login, limit);
  res.json(users);
});

app.listen(4000, () => {
  console.log(`server is running on port ${port}`);
});