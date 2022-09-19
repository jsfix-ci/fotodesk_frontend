import BaseApi from './base.api';

export class UsersApi extends BaseApi {
  public async getUsers(token: string = ''): Promise<any> {
    return await this.request({
      url: '/admin/users',
      method: 'GET',
      ...this.headers(token),
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
