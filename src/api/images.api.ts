import BaseApi from './base.api';

export class ImagesApi extends BaseApi {
  public async getImages(): Promise<any> {
    return await this.request({});
  }

  public async getImage(id: number): Promise<any> {
    return await this.request({});
  }

  public async updateImage(id: number, payload: any): Promise<any> {
    return await this.request({});
  }

  public async deleteImage(id: number): Promise<any> {
    return await this.request({});
  }
  public async uploadImage(data: any, token: string) {
    return await this.post('/admin/images', data, token, true);
  }

  public async addTags(data: any, token: string): Promise<any> {
    return await this.put('/admin/images/bulk-update', data, token);
  }
}
