import request from 'supertest';
<<<<<<< HEAD
 import connectDB from "../../config/db"
 import express  from "express"
import app from "../../app";
=======
import connectDB from "../../config/db";
import app from "../../app";
import { Express, Response , Request} from "express"
>>>>>>> ft-testing


 describe('Data connection', () => {
    test('should connect to the database', async() => {
        await connectDB()
    })
 })
   
 describe('GET /', () => {
  it('should return status 200 and an array of users', async () => {
    const response = await request(app).get('/api/v1/users');

    expect(response.statusCode).toBe(200);
  });
 })

describe("create new user POST /api/v1/auth/users", () => {
  it("should return status 201 for user created", async () => {
      const response = await request(app)
      .post('/api/v1/auth/users')
      .send({
          username: "testSixx",
          email: 'testSixx@gmail.com',
          password: 'testSixx'
      });
      expect(response.statusCode).toBe(201);
  })
})

let stringT: string;

 describe("login in admin as POST /", () => {
   it("should return status 201 or user", async() => {
    const login = await request(app)
    .post("/api/v1/auth/login")
    .send({
      email:  "adminthree@gmail.com",
      password : "adminthree"
    });
    stringT = login.body.token
    console.log(`my token is this: ${stringT}`)
    expect(login.status).toBe(200);
    // const token = await login;
    console.log(`my token is this: ${login.headers}`);
  })
 })

describe("get user by id GET /api/v1/users/:id", () => {
  it("should return status 200 for retrieving a user", async () => {
      const userId = "65fcb7eb669ca3604c8b60b4";
      const user = await request(app).get(`/api/v1/users/${userId}`);
      expect(user.statusCode).toBe(200);
  })
})

describe("DELETE /api/v1/users/:id", () => {
  it("should return status 200 for deleting a user",  async() => {
      const userId = "65fcb7eb669ca3604c8b60b4";
      const user = await request(app)
      .del(`/api/v1/users/${userId}`)

      expect(user.statusCode).toBe(200)
  });
});

