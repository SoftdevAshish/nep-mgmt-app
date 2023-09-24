import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from './entities/Client';
import { Repository } from 'typeorm';
import { CreateClientParams, UpdateClientParams } from './types/Types';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client) private clientRepository: Repository<Client>,
  ) {}

  getAllClient() {
    return this.clientRepository.find();
  }

  async saveClient(clientDetails: CreateClientParams) {
    const dupSlug = await this.clientRepository.findBy({
      slug: clientDetails.slug,
    });
    // console.log('dupSlug', dupSlug, dupSlug.length);
    if (dupSlug.length > 0) {
      // console.log('Slug Duplicate found');
      throw new HttpException(
        'Already use this slug!! Please use new and unique Slug.',
        HttpStatus.CONFLICT,
      );
    } else {
      return this.clientRepository.save(
        this.clientRepository.create({ ...clientDetails }),
      );
    }
  }

  getClientById(id: number) {
    return this.clientRepository.findBy({ id });
  }

  async updateClient(id: number, clientDetails: UpdateClientParams) {
    // console.log(id, clientDetails);
    const clientData = await this.clientRepository.findBy({ id });
    if (clientData.length > 0) {
      return this.clientRepository.update(id, clientDetails);
    } else {
      throw new NotFoundException('Entity not found');
    }
  }

  destroyClient(id: number) {
    return this.clientRepository.delete(id);
  }
}
