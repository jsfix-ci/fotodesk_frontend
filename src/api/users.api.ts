export class UsersApi {
  private readonly request: any;
  constructor(request: any) {
    this.request = request;
  }

  public async getUsers(): Promise<any> {
    return await this.request([]);
  }

  public async getUser(id: number): Promise<any> {
    return await this.request({id});
  }

  public async updateUser(id: number, payload: any): Promise<any> {
    return await this.request(id, payload);
  }

  public async deleteUser(id: number): Promise<any> {
    return await this.request(id);
  }
}
