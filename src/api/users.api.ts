import BaseApi from './base.api';

export class UsersApi extends BaseApi {
  public async createUser(data: any, token: string): Promise<any> {
    return await this.post('/admin/users', data, token);
  }

  public async getUsers(token: string, searchParams?: any): Promise<any> {
    return await this.get('/admin/users', token, searchParams);
  }

  public async getUser(id: number, token: string): Promise<any> {
    return await this.get(`/admin/users/${id}`, token);
  }

  public async updateUser(id: number, data: any, token: string): Promise<any> {
    return await this.put(`/admin/users/${id}`, data, token);
  }

  public async deleteUser(id: number, token: string): Promise<any> {
    return await this.delete(`/admin/users/${id}`, token);
  }

  public async getStats(token: string): Promise<any> {
    return await this.get('/admin/statistics/count', token);
  }
}
