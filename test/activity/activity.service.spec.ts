import { Test, TestingModule } from '@nestjs/testing';
import { ActivityService } from '../../src/activity/activity.service';
import { DayOfWeek } from '../../src/activity/dto/create-activity.dto';
import { Repository } from 'typeorm';
import { Activity } from '../../src/activity/entities/activity.entity';
import { Program } from '../../src/program/entities/program.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Participation } from '../../src/participation/entities/participation.entity';

describe('ActivityService', () => {
  let service: ActivityService;
  let repository: Repository<Activity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ActivityService,
        {
          provide: getRepositoryToken(Activity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findBy: jest.fn(),
            findOneBy: jest.fn(),
            merge: jest.fn(),
            remove: jest.fn(),
            createQueryBuilder: () => ({
              where: jest.fn().mockReturnThis(),
              getCount: jest.fn().mockReturnValue(1),
              innerJoin: jest.fn().mockReturnThis(),
              select: jest.fn().mockReturnThis(),
              addSelect: jest.fn().mockReturnThis(),
              groupBy: jest.fn().mockReturnThis(),
              orderBy: jest.fn().mockReturnThis(),
              getRawMany: jest.fn().mockReturnValue([
                {
                  user: 'user-test',
                  totalParticipations: 1,
                },
              ]),
            }),
          },
        },
      ],
    }).compile();

    service = module.get<ActivityService>(ActivityService);
    repository = module.get<Repository<Activity>>(getRepositoryToken(Activity));
  });

  it('should create an activity correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'save')
      .mockImplementationOnce(() => Promise.resolve(activity(3)));

    const resp = await service.create({
      programId: 1,
      durationMinutes: 60,
      dayOfWeek: DayOfWeek.DOMINGO,
      description: 'title-description',
      title: 'title-test',
    });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp.id).toBe(3);
  });

  it('should find and return all activities of a program', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findBy')
      .mockImplementationOnce(() =>
        Promise.resolve([activity(1), activity(2)]),
      );

    const resp = await service.findAll(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp.length).toBe(2);
    expect(resp[1].id).toBe(2);
  });

  it('should update an activity correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(activity(1)));
    jest
      .spyOn(repository, 'save')
      .mockImplementationOnce(() => Promise.resolve(activity(1, 'new_title')));

    const resp = await service.update(1, { title: 'new_title' });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp!.title).toBe('new_title');
  });

  it('should delete an activity correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(activity(1)));
    jest
      .spyOn(repository, 'remove')
      .mockImplementationOnce(() => Promise.resolve(activity(1)));

    const resp = await service.remove(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp!.id).toBe(1);
  });

  it('should return null if the activity to be updated does not exist', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(null));

    const resp = await service.update(1, { title: 'new_title' });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp).toBeNull();
  });

  it('should return null if the activity to be deleted does not exist', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(null));

    const resp = await service.remove(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp).toBeNull();
  });

  it('should find information related to a program id', async () => {
    const spyRepository = jest.spyOn(repository, 'createQueryBuilder');

    const report = await service.summary(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(report.totalActivities).toBe(1);
    expect(report.totalParticipations).toBe(1);
    expect(report.mostActiveParticipants[0].user).toBe('user-test');
    expect(report.mostActiveParticipants[0].totalParticipations).toBe(1);
  });
});

const activity = (id: number, title?: string) => ({
  id,
  programId: 1,
  title: title || 'title-test',
  description: 'description-test',
  dayOfWeek: DayOfWeek.DOMINGO,
  durationMinutes: 60,
  program: new Program(),
  participation: new Participation(),
});
