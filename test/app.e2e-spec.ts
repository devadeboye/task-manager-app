import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  // it(`/GET hello`, (done) => {
  //   return request(app.getHttpServer())
  //     .get('/hello')
  //     .end((err, res) => {
  //       expect(res.status).toBe(200);
  //       expect(res.body.message).toBe('success');
  //       done();
  //     });
  // });

  it(`/POST add-task`, (done) => {
    const taskInformation = {
      title: 'Test Task',
      description: 'This is a test task',
      startDate: Date.now(),
      endDate: Date.now() + 20000,
    };

    return request(app.getHttpServer())
      .post('/add-task')
      .send(taskInformation)
      .end((err, res) => {
        console.log(res.body);
        expect(res.status).toBe(201);
        expect(res.body.message).toBe('success');
        done();
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
