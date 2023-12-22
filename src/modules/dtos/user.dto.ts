export interface IUserDTO {
  id?:string;
  name: string;
  email: string;
  password: string;
  old_password?: string;
  avatar?: string;
  updated_at?: Date;
}