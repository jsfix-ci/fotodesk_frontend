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
}
