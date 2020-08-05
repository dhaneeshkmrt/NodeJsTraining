import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { UserService } from "../services/user-service";

export class UserController {
  private userService: UserService;

  constructor() { 
    this.userService = Container.get(UserService);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.userService.all();
    } catch (error) {
      console.log('all error', error);
    }
  }

  async one(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.userService.one1(Number(request.params.id));
    } catch (error) {
      console.log('one error', error);
    }
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return await this.userService.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const isUserRemoved = await this.userService.remove(Number(request.params.id));
    return isUserRemoved;
  }
}