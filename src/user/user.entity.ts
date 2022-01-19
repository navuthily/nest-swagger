import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  // @Factory(faker=>faker.lorem.words(2))
  @Column()
  name: string;
  @Column()
  username: string;
  @Column()
  password: string;  
}