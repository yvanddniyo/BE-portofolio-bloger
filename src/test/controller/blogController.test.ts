import request from 'supertest';
import connectDB from "../../config/db";
import app from "../../app";


describe('Data connection', () => {
    test('should connect to the database', async() => {
        await connectDB()
        console.log('mongo connected successfully.')
    })
})

let token: string;
let adminToken: string;

describe("login as admin", () => {
  beforeAll(async () => {
    const loginResponse = await request(app)
      .post("/api/v1/auth/login")
      .send({ "email": "adminthree@gmail.com", password: "adminthree" });
    adminToken = loginResponse.body.token;
    expect(loginResponse.status).toBe(200);
  });

  it("should log the admin token", async () => {
    console.log(`Admin token: ${adminToken}`);
  });
});

describe("login in admin as POST /", () => {
  beforeAll(async () => {
    const loginResponse = await request(app)
      .post("/api/v1/auth/login")
      .send({ "email": "userones@gmail.com", password: "userones" });
    token = loginResponse.body.token;
    expect(loginResponse.status).toBe(200);
  });
});

describe("get a blogs does not exist",() => {
  it("it should retun status 404", async() => {
     await request(app).get("/api/v1/blogs")
     .set('auth-token', token)
     .expect(404)
  })
})

  describe('get blog does exist', () => {
    it('should return status 200', async () => {
      await request(app)
      .get('/api/v1/blogs')
      .set('auth-token', token)
      .expect(200)
      console.log('token gettong user :', token);
    });
   });

  describe("get blog by id", () => {
    it("should return status 200 for retrieving a blog", async () => {
      const blogId = "66015bbb84cc641d59f08664";
      const user = await request(app)
        .get(`/api/v1/blogs/${blogId}`)
        .set('auth-token', token);
        expect(user.status).toBe(201)
    });

    it("should return status 200 for retrieving a blog", async () => {
      const blogId = "my_blogerId";
       await request(app)
        .get(`/api/v1/blogs/${blogId}`)
        .set('auth-token', token)
        expect(404)
    });
  });

  describe("delete user by id", () => {
    it("should delete status 200 for retrieving a blog", async () => {
      const blogId = "66015bad84cc641d59f08662";
      const user = await request(app)
        .del(`/api/v1/blogs/${blogId}`)
        .set('auth-token', token);
        expect(user.status).toBe(200)
    });
    it("should delete status 200 for retrieving a blog", async () => {
      const blogId = "my_blogerId";
       await request(app)
        .del(`/api/v1/blogs/${blogId}`)
        .set('auth-token', adminToken)
        expect(404)
    });
  });
 