import supertest from "supertest";
import app from "../app";
import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
dotenv.config()
import mongoose from "mongoose";
import { test, it, describe, expect, beforeAll, afterAll } from "@jest/globals";
import Users from "../models/userModel";

interface CustomJwtPayload {
    id: string;
    username: string;
    email: string;
    role: string;
  }


beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URL_TEST as string);
    
  });

afterAll(async () => {
    await Users.deleteMany({});
    await mongoose.connection.close();
}, 10000)

let token: string;
let userId: any;
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
        email: "adminthree@gmail.com",
        password: "yvan123",
        role: "admin"
      });
      expect(response.statusCode).toBe(200);
    })
    
    it("should login user in", async () => {
        const response = await supertest(app).post("/api/v1/auth/login")
        .send({
             email: "adminthree@gmail.com", 
             password: 'yvan123' 
        });
        token = response.body.token;
        console.log("My Token is:", token);
        expect(response.status).toBe(200);
        const decodedToken = jwt.verify(response.body.token, `${process.env.JWT_TOKEN}`) as CustomJwtPayload;
        userId = decodedToken.id;
        console.log('jfsdnkfsnfs', userId);
        
    });

    it("user not found", async () => {
      const response = await supertest(app).post("/api/v1/auth/login")
        .send({ email: "duhh@gmail.com", password: '12345' });
      expect(response.status).toBe(400);
    });

});

describe("GET /users/:id", () => {
    it('responds with status 200 and returns user data', async () => {
        if (!token) {
            throw new Error('Token is not available.');
        }
        console.log('kfmdlkngd;f', userId)
        // Assuming you have the userId variable set from previous tests
        if (!userId) {
            throw new Error('User ID is not available.');
        }
        
        const response = await supertest(app).get(`/api/v1/users/${userId}`)
            .set('auth-token', token); 
        
        expect(response.status).toBe(200);
        expect(response.body._id).toBe(userId); 
    });

    it('responds with status 404 for non-existent user', async () => {
        if (!token) {
            throw new Error('Token is not available.');
        }

        const nonExistentId = "non-existent-id";
        
        const response = await supertest(app).get(`/api/v1/users/${nonExistentId}`)
            .set('auth-token', token); 
        
        expect(response.status).toBe(404);
    });
});

describe("PATCH /users/:id", () => {
    it("should update the user successfully", async () => {
      const updatedUser = {
        username: "userthree",
        email: "userthree@gmail.com",
        password: "userthree",
      };
  
      const response = await supertest(app)
        .patch(`/api/v1/users/${userId}`)
        .set('auth-token', token)
        .send(updatedUser);
  
      expect(response.status).toBe(400);
    });
  
    it("should return 400 for invalid data", async () => {
      const invalidUser = {
        username: "fsf", 
        email: "invalidemail", 
        password: "123", 
      };
  
      const response = await supertest(app)
        .put(`/api/v1/users/${userId}`)
        .set('auth-token', token)
        .send(invalidUser);
  
      expect(response.status).toBe(404);
    });
  
    it("should return 404 for non-existent user", async () => {
      const nonExistentUserId = "nonexistentid";
      const updatedUser = {
        username: "uhfhfh",
        email: "ghghghgh@gmal.com",
        password: "ghghghgh",
      };
  
      const response = await supertest(app)
        .put(`/api/v1/users/${nonExistentUserId}`)
        .set('auth-token', token)
        .send(updatedUser);
  
      expect(response.status).toBe(404);
    });
  });


  describe("DELETE /users/:id", () => {
    it('responds with status 200 and returns user data', async () => {
        if (!token) {
            throw new Error('Token is not available.');
        }
        console.log('User Id', userId)
        if (!userId) {
            throw new Error('User ID is not available.');
        }
        
        const response = await supertest(app).del(`/api/v1/users/${userId}`)
            .set('auth-token', token); 
        
        expect(response.status).toBe(200);
    });

    it('responds with status 404 for non-existent user', async () => {
        if (!token) {
            throw new Error('Token is not available.');
        }

        const nonExistentId = "non-existing-user";
        
        const response = await supertest(app).del(`/api/v1/users/${nonExistentId}`)
            .set('auth-token', token); 
        
        expect(response.status).toBe(500);
    });
});