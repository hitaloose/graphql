import { IResolversParameter } from "apollo-server";

import Book from "../models/Book";
import User from "../models/User";

const BookResolvers: IResolversParameter = {
  Query: {
    books: async () => {
      const books = await Book.findAll({
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      });

      return books;
    },
    book: async (_, { id }) => {
      const book = await Book.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      });

      return book;
    },
  },
  Mutation: {
    createBook: async (_, { name, userId }) => {
      const newBook = await Book.create({ name, userId });

      const book = await Book.findByPk(newBook.id, {
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      });

      return book;
    },
    updateBook: async (_, { id, name }) => {
      const book = await Book.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      });

      if (!book) return {};

      await book.update({ name });

      return book;
    },
    deleteBook: async (_, { id }) => {
      const book = await Book.findByPk(id);

      if (!book) return false;

      await book.destroy();

      return true;
    },
    alterBookUser: async (_, { id, userId }) => {
      const book = await Book.findByPk(id);

      if (!book) return {};

      await book.update({ userId });

      const updatedBook = await Book.findByPk(id, {
        include: [
          {
            model: User,
            as: "user",
          },
        ],
      });

      return updatedBook;
    },
  },
};

export default BookResolvers;
