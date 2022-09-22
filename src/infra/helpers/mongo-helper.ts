import { Db, MongoClient as Mongo, Collection, Document } from "mongodb";

interface IMongoHelper {
  connection?: Mongo;
  db?: Db;
  connect(uri: string): Promise<void>;
  disconnect(): Promise<void>;
  getCollection<T extends Document>(
    collection: string
  ): Collection<T> | undefined;
}

export const MongoHelper: IMongoHelper = {
  connection: undefined,
  db: undefined,

  async connect(uri: string): Promise<void> {
    this.connection = await Mongo.connect(uri);
    this.db = await this.connection.db();
  },

  async disconnect(): Promise<void> {
    await this.connection?.close();
  },

  getCollection<T extends Document>(
    collection: string
  ): Collection<T> | undefined {
    return this.db?.collection<T>(collection);
  },
};
