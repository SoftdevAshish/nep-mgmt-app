import { Column } from 'typeorm';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClient {
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @Column()
  @IsNotEmpty()
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
}
