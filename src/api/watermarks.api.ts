import BaseApi from './base.api';

export class WatermarksApi extends BaseApi {
  public async getWatermarks(token: string): Promise<any> {
    return await this.get('/admin/watermarks', token);
  }

  public async uploadWatermarks(data: any, token: string): Promise<any> {
    return await this.post('/admin/watermarks', data, token, true);
  }

  public async getWatermark(id: number, token: string): Promise<any> {
    return await this.get(`/admin/watermarks/${id}`, token);
  }

  public async updateWatermark(id: number, data: any, token: string): Promise<any> {
    return await this.put(`/admin/watermarks/${id}`, data, token);
  }

  public async deleteWatermark(id: number, token: string): Promise<any> {
    return await this.delete(`/admin/watermarks/${id}`, token);
  }
}
