import request from 'supertest';
 import connectDB from "../../config/db"
 import express  from "express"
import app from "../../app";


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

describe("POST /", () => {
  test("should return status 201 for user created", async () => {
      const response = await request(app).post('/api/v1/auth/register').send({
          username: "testFour",
          email: 'testFour@gmail.com',
          password: 'testFour'
      });
      expect(response.statusCode).toBe(201);
  })
})

describe("GET /:id", () => {
  test("should return status 200 for retrieving a user", async () => {
      const userId = "65f98774bb89bde4a2836058";
      const user = await request(app).get(`/api/v1/users/${userId}`);
      expect(user.statusCode).toBe(200);
  })
})