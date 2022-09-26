import BaseApi from './base.api';

export class ImagesApi extends BaseApi {
  public async getImages(query?: any): Promise<any> {
    return await this.get('/images', undefined, query);
  }

  public async getImage(id: number): Promise<any> {
    return await this.get(`/images/${id}`);
  }

  public async getLatestImages(): Promise<any> {
    return await this.get('/images/latest-images');
  }

  public async updateImage(id: number, data: any, token: string): Promise<any> {
    return await this.put(`/admin/images/${id}`, data, token);
  }

  public async deleteImage(id: number, token: string): Promise<any> {
    return await this.delete(`/admin/images/${id}`, token);
  }
  public async uploadImage(data: any, token: string) {
    return await this.post('/admin/images', data, token, true);
  }

  public async addTags(data: any, token: string): Promise<any> {
    return await this.put('/admin/images/bulk-update', data, token);
  }
  public async myImages(token: string): Promise<any> {
    return await this.get('/admin/images', token);
  }
}
