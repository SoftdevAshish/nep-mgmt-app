import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as process from 'process';
import { Client } from '../src/routes/client/entities/Client';
import { config } from 'dotenv';

config();
const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT) || 3306,
  username: process.env.DATABASE_USERNAME || 'root',
  password: process.env.DATABASE_PASSWORD || 'ashish',
  database: process.env.DATABASE_NAME || 'nep_mgmt',
  entities: [Client],
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
};

export default typeOrmConfig;
