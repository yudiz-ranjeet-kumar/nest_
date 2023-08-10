import { PartialType } from '@nestjs/mapped-types';
import { CreateMatchDto } from './create-match.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength } from 'class-validator';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  matchName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(100)
  matchKey: string;
}
