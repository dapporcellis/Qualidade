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
    //trocar o id para um existente
    const res = await request(app)
    .put("/tasks/681e6fd83d0d325876f9f186")
    .send({titulo:"Tarefa Editada"})

    expect(res.statusCode).toBe(200);
    expect(res.body.titulo).toBe("Tarefa Editada");
})

test('Deve deletar uma tarefa', async() =>{
    //trocar o id para um existente
    const res = await request(app)
    .delete("/tasks/681e6fd83d0d325876f9f186")

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Tarefa deletada com sucesso");
})
