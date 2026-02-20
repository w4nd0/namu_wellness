import { Test, TestingModule } from '@nestjs/testing';
import { ParticipationService } from '../../src/participation/participation.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Participation } from '../../src/participation/entities/participation.entity';
import { Repository } from 'typeorm';
import { Activity } from '../../src/activity/entities/activity.entity';

describe('ParticipationService', () => {
  let service: ParticipationService;
  let repository: Repository<Participation>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ParticipationService,
        {
          provide: getRepositoryToken(Participation),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            findOneBy: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ParticipationService>(ParticipationService);
    repository = module.get<Repository<Participation>>(
      getRepositoryToken(Participation),
    );
  });

  it('should create an participation correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'save')
      .mockImplementationOnce(() => Promise.resolve(participation()));

    const resp = await service.create({
      userName: 'userName-test',
      activityId: 10,
      completedAt: '2025-01-20 08:30:00',
      notes: 'notes-test',
    });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp.activityId).toBe(10);
  });

  it('should find a participation with the provided id', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(participation()));

    const resp = await service.findOne(3);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp!.id).toBe(1);
  });
});

const participation = () => ({
  id: 1,
  userName: 'userName-test',
  activityId: 10,
  completedAt: '2025-01-20 08:30:00',
  notes: 'notes-test',
  activity: new Activity(),
});
