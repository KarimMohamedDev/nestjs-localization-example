import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class FieldLocalizesDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toString().trim())
  readonly en: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.toString().trim())
  readonly ar: string;
}
