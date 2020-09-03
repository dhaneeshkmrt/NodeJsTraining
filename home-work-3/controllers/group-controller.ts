import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { GroupService } from "../services/group-service";

export class GroupController {
  private groupService: GroupService;

  constructor() { 
    this.groupService = Container.get(GroupService);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.groupService.all();
    } catch (error) {
      console.log('all error', error);
    }
  }

  async find(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.groupService.find(Number(request.params.id));
    } catch (error) {
      console.log('one error', error);
    }
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return await this.groupService.create(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const isUserRemoved = await this.groupService.remove(Number(request.params.id));
    return isUserRemoved;
  }
}