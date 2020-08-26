import { BaseEntity, Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Permission } from "./permission.entity";
import { User } from "./user.entity";
// export enum Permission {
//   READ = 'READ',
//   WRITE = 'WRITE',
//   DELETE = 'DELETE',
//   SHARE = 'SHARE',
//   UPLOAD_FILES ='UPLOAD_FILES'
// }

@Entity()
export class Group extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => Permission, permission => permission.name)
  permissions: Permission[];
}