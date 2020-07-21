import { User } from "./user";
import validator from 'validator'

export function validateUser(user: User): boolean {
  let result = false;
  if (!validator.isAlphanumeric(user.password)) {
    result = true;
  }
  if (!validator.isLength(user.login, { min: 1, max: undefined })) {
    result = true;
  }
  if (!validator.isInt(user.age.toString(), { min: 4, max: 130 })) {
    result = true;
  }
  return result;
}