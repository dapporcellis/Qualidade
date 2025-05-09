const request = require('supertest');
const app = require('../index');

test('Deve criar uma nova tarefa', async() =>{
    const res = await request(app)
    .post('/tasks')
    .send({titulo:"Nova Task"})

    expect(res.statusCode).toBe(201);
    expect(res.body._id).toBeDefined();
},50000)

