import { BaseUserModel } from './baseUserModel';

export interface RegisterUserModel extends BaseUserModel {
  password: string,
  generatePassword: boolean,
}
