import BaseApi from './base.api';

export class AuthApi extends BaseApi {
  public async login(): Promise<any> {
    return await this.request({});
  }

  public async register(id: number): Promise<any> {
    return await this.request({});
  }
}
