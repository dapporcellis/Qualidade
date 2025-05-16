const request = require('supertest');
const app = require('../index');

test('Deve criar uma nova tarefa', async() =>{
    const res = await request(app)
    .post('/tasks')
    .send({titulo:"Nova Task"})

    expect(res.statusCode).toBe(201);
    expect(res.body._id).toBeDefined();
})

test('Deve listar todas as tarefas', async() =>{
    const res = await request(app)
    .get('/tasks')
    
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(2);
})

test('Deve editar uma tarefa', async() =>{
    const res2 = await request(app)
    .put("/tasks/")
    .send({titulo:"Tarefa Editada"})

    expect(res2.statusCode).toBe(200);
    expect(res2.body.titulo).toBe("Tarefa Editada");
})

