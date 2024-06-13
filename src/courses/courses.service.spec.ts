import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';

describe('CoursesService unit tests', () => {
  let service: CoursesService;
  let id: string;
  let created_at: Date;
  let expectedOutputTags: any[];
  let expectOutputCourses: any;

  let mockCoursesRepository: any;
  let mockTagRepository: any;

  beforeEach(async () => {
    service = new CoursesService();
    id = randomUUID();
    created_at = new Date();

    expectedOutputTags = [{ id: id, name: 'nestjs', created_at: created_at }];
    expectOutputCourses = {
      id: id,
      name: 'test',
      descrption: 'test course',
      created_at: created_at,
      tags: expectedOutputTags,
    };

    mockCoursesRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      save: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      update: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      preload: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      find: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
      remove: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };

    mockTagRepository = {
      create: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
      findAll: jest.fn().mockReturnValue(Promise.resolve(expectedOutputTags)),
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
