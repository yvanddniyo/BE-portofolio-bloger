import supertest from "supertest";
import app from "../app";
import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";
import { test, it, describe, expect, beforeAll, afterAll } from "@jest/globals";
import Users from "../models/userModel";


beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL_TEST as string);
    
  });

afterAll(async () => {
    await Users.deleteMany({});
    await mongoose.connection.close();
}, 10000)

let token: string;
let userId: string;
const id = "65f2ce85a186e2957a79fa9b"


describe("GET /", () => {
    it('responds with status 200 successs!', async () => {
      const response = await supertest(app).get("/api/v1/users");
      expect(response.status).toBe(401);
    });
});

describe("POST /users", () => {
    it('responds with status 201 user created!', async () => {
      const response = await supertest(app).post("/api/v1/auth/users").send({
        username: "yvanones",
        email: "adminone@gmail.com",
        password: "yvan123",
      });
      expect(response.statusCode).toBe(200);
    })

    it("should login user in", async () => {
      const response = await supertest(app).post("/api/v1/auth/login")
        .send({ email: "adminone@gmail.com", password: 'yvan123' });
        token = response.body.token;
        console.log("My Token is:", token);
      expect(response.status).toBe(200);
    });

    it("user not found", async () => {
      const response = await supertest(app).post("/api/v1/auth/login")
        .send({ email: "duhh@gmail.com", password: '12345' });
      expect(response.status).toBe(400);
    });

});

// describe("Test Blog controllers", () => {

//     it("should return all blogs", async () => {
//         const response = await supertest(app).get("/api/v1/blogs");
//         expect(response.status).toBe(200);
//     })

//     test("with no title field", async () => {
//       const res = await supertest(app)
//         .post('/api/v1/blogs')
//         .send({
//           content: "this is a description",
//           image: ""
//         }).set('auth-token :', token)
//       expect(res.status).toBe(400);
//     });

//     it("should return unauthorized 401", async () => {
//       const res = await supertest(app)
//         .post('/api/v1/blogs')
//         .send({
//           title: "Test Blog",
//           content: "this is a description",
//           image: ""
//         })
//         expect(res.status).toBe(401)
//     })

// })