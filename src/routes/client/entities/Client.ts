import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'clients' })
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @Column({ type: 'datetime' })
  @IsNotEmpty()
  @IsDate()
  @ApiProperty()
  expiryDate: Date;

  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  contact: string;

  @Column({ unique: true })
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  slug: string;

  @Column({ default: false })
  @IsBoolean()
  @ApiProperty()
  active: boolean;

  @CreateDateColumn()
  @IsNotEmpty()
  @ApiProperty()
  created_at: Date;

  @UpdateDateColumn()
  @IsNotEmpty()
  @ApiProperty()
  updated_at: Date;
}
