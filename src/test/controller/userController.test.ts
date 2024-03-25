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



describe("create new user POST /api/v1/auth/users", () => {
  it("should return status 201 for user created", async () => {
      const response = await request(app)
      .post('/api/v1/auth/register')
      .send({
          username: "testSixx",
          email: 'testSixx@gmail.com',
          password: 'testSixx'
      });
      expect(201);
  })
})

let token : any;

describe("login in admin as POST /", () => {
  it("should return status 201 or user", () => {
    return request(app)
      .post("/api/v1/auth/login")
      .send({ email: "adminthree@gmail.com", password: "adminthree" })
      .then((loginResponse) => {
        expect(loginResponse.status).toBe(200);

       token = loginResponse.body.token;
        // console.log(`my token is this: ${token}`);
      });
  });
});

describe("get user by id GET /api/v1/users/:id", () => {
  it("should return status 200 for retrieving a user", async () => {
      const userId = "65fcb7eb669ca3604c8b60b4";
      const user = await request(app).get(`/api/v1/users/${userId}`);
      expect(user.statusCode).toBe(200);
  })
})

describe("update existing user", () => {
  it("return update blog", async()=> {
    const userId = "65ff7cd59461722226791d99"
    const  { username, email, password} = token
    await request(app)
    .patch(`/api/v1/users/${userId}`)
    .send({
      username: username,
      email: email,
      password: password
    })
    .set('auth-token', token)
    .expect(201)
    console.log('this is the updating :', token)
  })
})

describe("DELETE /api/v1/users/:id", () => {
  it("should return status 200 for deleting a user",  async() => {
      const userId = "65fdbaf7d407ccb9b1ec7f0c";
      const user = await request(app)
      .del(`/api/v1/users/${userId}`)

      expect(user.statusCode).toBe(200)
  });
})

