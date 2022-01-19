import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
import { CreateUserDto, UpdateUser } from "./user.model";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) { }
  async all():Promise<User[]>{
    return this.userRepository.find();
  }
  async getOneUser(item:number):Promise<User>{
    return this.userRepository.findOne(item)
  }
  createUser(item: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(item);
    return this.userRepository.save(user);
  }
  updateUser(item:UpdateUser, id:number){
    return this.userRepository.update(id,item);
    // return this.userRepository.save(user);
  }
  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }
  async findOne(username: string): Promise<User> {
    const users = await this.userRepository.find();
    return users.filter(user=>user.username===username)[0];
  }

}