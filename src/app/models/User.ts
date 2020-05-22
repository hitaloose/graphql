import { Table, Model, Column } from "sequelize-typescript";

@Table
export default class User extends Model<User> {
  @Column
  name: string;

  @Column
  email: String;
}
