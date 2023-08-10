import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMatchDto {
  @ApiProperty()
  @IsString()
  @MaxLength(100)
  matchName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(100)
  matchKey: string;
}
