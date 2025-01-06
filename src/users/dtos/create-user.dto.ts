import { Type } from 'class-transformer';
import {
  IsDefined,
  IsEmail,
  IsString,
  Length,
  ValidateNested,
} from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { FieldLocalizesDto } from '../../common/dtos/filed-localizes.dto';

export class CreateUserDto {
  @IsString()
  @Length(3, 20)
  readonly username: string;

  @IsEmail(
    {},
    {
      message: i18nValidationMessage('validation.EMAIL_INVALID', {
        errorOnly: true, // This is important!
      }),
    },
  )
  readonly email: string;

  @IsDefined()
  @Type(() => FieldLocalizesDto)
  @ValidateNested()
  readonly country: FieldLocalizesDto;

  @IsString()
  readonly password: string;
}
