import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";

import User from "./User";

@Table
export default class Book extends Model<Book> {
  @Column
  name: string;

  @Column
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
