export type Role = 'user' | 'admin';

export interface User {
  name: string;
  role: Role;
}