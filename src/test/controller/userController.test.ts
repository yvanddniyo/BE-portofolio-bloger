 import dotenv from  "dotenv"
 import supertest from "supertest"
 import connectDB from "../../config/db"
 import express  from "express"

 const app = express()


 dotenv.config()

 describe('Data connection', () => {
    test('should connect to the database', async() => {
        await connectDB()
    })
 })
   

  describe('GET /', () => {
    it('getting status 200 as sucesss', async () => {
        const response =  await supertest(app).get("/api/v1/users");
        expect(response.status).toBe(200)
    })
  })