import { MongoClient } from 'mongodb'

const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017`;
const client = new MongoClient(url);
const dbName = 'myProject'; // zoals een database in MySQL

async function main() {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('documents'); // ruwweg zoals een tabel in MySQL, hoef je niet op vop voorhand aan te maken
  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);

  return 'inserts hebben plaatsgevonden.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());