export class ImagesApi {
  private readonly request: any;
  constructor(request: any) {
    this.request = request;
  }

  public async getImages(): Promise<any> {
    return await this.request();
  }

  public async getImage(id: number): Promise<any> {
    return await this.request({id});
  }

  public async updateImage(id: number, payload: any): Promise<any> {
    return await this.request(id, payload);
  }

  public async deleteImage(id: number): Promise<any> {
    return await this.request(id);
  }
}
