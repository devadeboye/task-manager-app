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

  // it(`/POST add-task`, (done) => {
  //   const taskInformation = {
  //     title: 'Test Task',
  //     description: 'This is a test task',
  //     startDate: new Date('2021-03-25').toDateString(),
  //     endDate: new Date('2021-03-26').toDateString(),
  //   };

  //   return request(app.getHttpServer())
  //     .post('/add-task')
  //     .send(taskInformation)
  //     .end((err, res) => {
  //       console.log(res.body);
  //       expect(res.status).toBe(201);
  //       expect(res.body.message).toBe('success');
  //       done();
  //     });
  // });

  // it(`/GET view-all`, (done) => {
  //   return request(app.getHttpServer())
  //     .get('/view-all')
  //     .end((err, res) => {
  //       expect(res.status).toBe(200);
  //       expect(res.body.message).toBe('success');
  //       done();
  //     });
  // });

  it(`/GET view-task-by-day`, (done) => {
    return request(app.getHttpServer())
      .get('/view-task-by-day/?date=Thu+Mar+25+2021')
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('success');
        done();
      });
  });

  // it(`/PATCH mark-completed`, (done) => {
  //   return request(app.getHttpServer())
  //     .patch('/mark-completed/?id=605d914f5f5c366de2327638')
  //     .end((err, res) => {
  //       expect(res.status).toBe(200);
  //       expect(res.body.message).toBe('success');
  //       done();
  //     });
  // });

  // it(`/PATCH mark-uncompleted`, (done) => {
  //   return request(app.getHttpServer())
  //     .patch('/mark-uncompleted/?id=605d914f5f5c366de2327638')
  //     .end((err, res) => {
  //       expect(res.status).toBe(200);
  //       expect(res.body.message).toBe('success');
  //       done();
  //     });
  // });

  afterAll(async () => {
    await app.close();
  });
});
