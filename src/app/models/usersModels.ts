export class UserModel{
constructor(
  id: string,
  name: string,
  email: string,
  phoneNumber: string,
  createdBy: string,
  roles: string
){}
}

export interface UsersModel{
  users: UserModel[]
}
