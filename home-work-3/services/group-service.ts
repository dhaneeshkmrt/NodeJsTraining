import { Service } from "typedi";
import { getRepository } from "typeorm";
import { Group } from "../data-access/group.entity";
import { User } from "../data-access/user.entity";
import { UserService } from "./user-service";

@Service()
export class GroupService {
  private GroupRepository = getRepository(Group);
  constructor(private userService: UserService) { }

  async all() {
    return this.GroupRepository.find();
  }

  async find(id: number) {
    return this.GroupRepository.findOne(id);
  }

  async create(group: Partial<Group>) {
    return this.GroupRepository.save(group);
  }

  async update(id: number, group: Partial<Group>) {
    let existingGroup = await this.GroupRepository.findOne(id);
    const updatedGroup = {
      ...existingGroup,
      ...group
    }
    return updatedGroup.save();
  }

  async remove(id: number) {
    let userToRemove = await this.GroupRepository.findOne(id);
    const user = await this.GroupRepository.remove(userToRemove);
    return !!user;
  }

}