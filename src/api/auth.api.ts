import BaseApi from './base.api';

interface ILoginData {
  username: string;
  password: string;
}

export interface IRegisterData {
  firstName: string;
  lastName: string;
  email: string;
  displayName: string;
  password: string;
}

export class AuthApi extends BaseApi {
  public async login(data: ILoginData): Promise<{data: {token: string}}> {
    return await this.post('/auth/login', data);
  }

  public async register(data: IRegisterData): Promise<any> {
    return await this.post('/auth/register', data);
  }

  public async me(token: string): Promise<any> {
    return await this.get('/auth/me', token);
  }
}
