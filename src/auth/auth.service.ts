import * as bcryptjs from 'bcryptjs';
import { logError } from '../logger';

export const hashUserPassword = (password: string): string => {
  return bcryptjs.hashSync(password, 8);
}