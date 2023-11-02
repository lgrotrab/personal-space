//implementar usando faker
import mongoose from "mongoose";
import { faker } from "@faker-js/faker";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function seedDB() {
  const uri = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@localhost:27017/${process.env.MONGO_INITDB_DATABASE}`;
  try {
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
    });
    const userSchema = new mongoose.Schema({
      email: String,
      password: String,
      name: String,
      posts: [],
    });
    const User = mongoose.model("User", userSchema);
    await User.deleteMany();
    for (let i = 0; i < 30; i++) {
      const newPosts = [];
      for (let i = 0; i < randomIntFromInterval(1, 5); i++) {
        newPosts.push({
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraph(),
          likes: randomIntFromInterval(0, 100),
        });
      }
      const newUser = new User({
        email: faker.internet.email(),
        password: faker.internet.password(),
        name: faker.person.fullName(),
        posts: newPosts,
      });
      await newUser.save();
    }
  } catch (err) {
    console.log(err.message);
    throw err;
  } finally {
    await mongoose.connection.close();
  }
}

seedDB();
