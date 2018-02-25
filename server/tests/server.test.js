const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => { //mocha
  Todo.remove({}).then(() => done());//mongoose
});

describe('POST /todos', () => {   //mocha
  //---------------Test 1 (Comment our Test 1 or Test 2)-----------------------
  it('should create a new todo', (done) => {  //mocha
    var text = 'Test todo text';

    request(app)   //supertest
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => { //mongoose
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

//-------------Test 1 (Comment our Test 1 or Test 2)--------------------
  it('should not create todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(0);
          done();
        }).catch((e) => done(e));
      });
  });
});
