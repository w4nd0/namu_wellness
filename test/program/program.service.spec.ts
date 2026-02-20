import { Test, TestingModule } from '@nestjs/testing';
import { ProgramService } from '../../src/program/program.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Program } from '../../src/program/entities/program.entity';
import { Category } from '../../src/program/dto/create-program.dto';
import { Repository } from 'typeorm';

describe('ProgramService', () => {
  let service: ProgramService;
  let repository: Repository<Program>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProgramService,
        {
          provide: getRepositoryToken(Program),
          useValue: {
            create: jest.fn(),
            findBy: jest.fn(),
            findOneBy: jest.fn(),
            merge: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ProgramService>(ProgramService);
    repository = module.get<Repository<Program>>(getRepositoryToken(Program));
  });

  it('should create an program correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'save')
      .mockImplementationOnce(() => Promise.resolve(program(1)));

    const resp = await service.create({
      name: 'name-test',
      description: 'description-test',
      category: Category.EXERCICIO,
      durationWeeks: 4,
    });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp.id).toBe(1);
  });

  it('should find a program with the provided id', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(program(2)));

    const resp = await service.findOne(2);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp!.id).toBe(2);
  });

  it('should update a program correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(program(1)));
    jest
      .spyOn(repository, 'save')
      .mockImplementationOnce(() => Promise.resolve(program(1, 'new_name')));

    const resp = await service.update(1, { name: 'new_name' });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp!.name).toBe('new_name');
  });

  it('should delete a program correctly', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(program(1)));
    jest
      .spyOn(repository, 'remove')
      .mockImplementationOnce(() => Promise.resolve(program(1)));

    const resp = await service.remove(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp!.id).toBe(1);
  });

  it('should return null if the program to be found does not exist', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(null));

    const resp = await service.findOne(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp).toBeNull();
  });

  it('should return null if the program to be updated does not exist', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(null));

    const resp = await service.update(1, { name: 'new_name' });

    expect(spyRepository).toHaveBeenCalled();
    expect(resp).toBeNull();
  });

  it('should return null if the program to be deleted does not exist', async () => {
    const spyRepository = jest
      .spyOn(repository, 'findOneBy')
      .mockImplementationOnce(() => Promise.resolve(null));

    const resp = await service.remove(1);

    expect(spyRepository).toHaveBeenCalled();
    expect(resp).toBeNull();
  });
});

const program = (id: number, name?: string) => ({
  id,
  name: name || 'name-test',
  description: 'description-test',
  category: Category.EXERCICIO,
  durationWeeks: 4,
});
