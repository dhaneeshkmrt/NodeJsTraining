import { Service } from "typedi";
import { getRepository } from "typeorm";
import { User } from "../data-access/user.entity";

@Service()
export class UserService {
  private userRepository = getRepository(User);

  async all() {
    return this.userRepository.find();
  }

  async one1(id: number) {
    return this.userRepository.findOne(id);
  }

  async save(user: Partial<User>) {
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    let userToRemove = await this.userRepository.findOne(id);
    const user = await this.userRepository.remove(userToRemove);
    return !!user;
  }
}