import { Service } from "typedi";
import { getRepository } from "typeorm";
import { User } from "../data-access/user.entity";
import { GroupService } from "./group-service";

@Service()
export class UserService {
  private userRepository = getRepository(User);

  constructor(private groupService: GroupService) { }

  async all() {
    return this.userRepository.find();
  }

  async find(id: number) {
    return this.userRepository.findOne(id, { relations: ['groups'] });
  }

  async save(user: Partial<User>) {
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    let userToRemove = await this.userRepository.findOne(id);
    const user = await this.userRepository.softRemove(userToRemove);
    return !!user;
  }

  async addUsersToGroup({ groupId, userIds = [] }) {
    const group = await this.groupService.find(groupId);
    if (!group) {
      throw new Error('Unable to find Group');
    }
    const affectedUsers = [];

    for (const userId of userIds) {
      const user = await this.find(userId)
      user.groups.push(group);
      affectedUsers.push(user);
      await group.save();
    }
    return affectedUsers;
  }
}