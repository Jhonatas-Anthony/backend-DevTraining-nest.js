import { randomUUID } from 'node:crypto';
import { CoursesService } from './courses.service';
import { CreateCourseDTO } from './dto/create-courses.dto';
import { UpdateCourseDTO } from './dto/update-course.dto';

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
      findOne: jest.fn().mockReturnValue(Promise.resolve(expectOutputCourses)),
    };
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should create a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const createCourseDTO: CreateCourseDTO = {
      name: 'test',
      description: 'test course',
      tags: ['nestjs'],
    };

    const newCourse = await service.create(createCourseDTO);

    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(newCourse);
  });

  it('Should list all courses', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;

    const courses = await service.findAll();

    expect(mockCoursesRepository.find).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(courses);
  });

  it('Should get a course by id', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;

    const course = await service.findOne(id);

    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('Should update a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;
    //@ts-expect-error defined part of methods
    service['tagRepository'] = mockTagRepository;

    const updateCourseDTO: UpdateCourseDTO = {
      name: 'test',
      description: 'test course',
      tags: ['nestjs'],
    };

    const course = await service.update(id, updateCourseDTO);

    expect(mockCoursesRepository.save).toHaveBeenCalled();
    expect(mockCoursesRepository.preload).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });

  it('Should delete a course', async () => {
    //@ts-expect-error defined part of methods
    service['courseRepository'] = mockCoursesRepository;

    const course = await service.remove(id);

    expect(mockCoursesRepository.findOne).toHaveBeenCalled();
    expect(mockCoursesRepository.remove).toHaveBeenCalled();
    expect(expectOutputCourses).toStrictEqual(course);
  });
});
