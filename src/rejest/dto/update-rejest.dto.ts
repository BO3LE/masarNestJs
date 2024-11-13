import { PartialType } from '@nestjs/mapped-types';
import { CreateRejestDto } from './create-rejest.dto';

export class UpdateRejestDto extends PartialType(CreateRejestDto) {
    firstName;
    lastName;
    isActive;
    phoneNumber;

}
