import BaseApi from './base.api';

export class UsersApi extends BaseApi {
  constructor() {
    super();
  }
  public async getUsers(): Promise<any> {
    console.log(this.request.defaults.headers);
    return await this.request({
      url: '/admin/users',
      method: 'GET',
    });
  }

  public async getUser(id: number): Promise<any> {
    return await this.request({});
  }

  public async updateUser(id: number, payload: any): Promise<any> {
    return await this.request({});
  }

  public async deleteUser(id: number): Promise<any> {
    return await this.request({});
  }
}
