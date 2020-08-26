import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Group } from "../data-access/group.entity";
import { Permission } from "../data-access/permission.entity";
import { UserService } from "./user-service";

@Service()
export class PermissionService {
  private permissionRepository = getRepository(Permission);
  constructor(private userService: UserService) { }

  async all() {
    return this.permissionRepository.find();
  }

  async find(id: number) {
    return this.permissionRepository.findOne(id);
  }

  async create(permission: Partial<Permission>) {
    const newPermission = Permission.create(permission);
    return newPermission.save().catch(err=> console.log(err));
  }

  async update(id: number, permission: Partial<Permission>) {
    let existingPermission = await this.permissionRepository.findOne(id);
    const updatedPermission = {
      ...existingPermission,
      ...permission
    }
    return updatedPermission.save();
  }

  async remove(id: number) {
    let userToRemove = await this.permissionRepository.findOne(id);
    const user = await this.permissionRepository.remove(userToRemove);
    return !!user;
  }

}