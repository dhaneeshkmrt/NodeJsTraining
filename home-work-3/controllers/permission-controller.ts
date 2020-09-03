import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { PermissionService } from "../services/permission-service";

export class PermissionController {
  private permissionService: PermissionService;

  constructor() { 
    this.permissionService = Container.get(PermissionService);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.permissionService.all();
    } catch (error) {
      console.log('all error', error);
    }
  }

  async find(request: Request, response: Response, next: NextFunction) {
    try {
      return await this.permissionService.find(Number(request.params.id));
    } catch (error) {
      console.log('one error', error);
    }
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return await this.permissionService.create(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    const isUserRemoved = await this.permissionService.remove(Number(request.params.id));
    return isUserRemoved;
  }
}