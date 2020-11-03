export class User {
  constructor(
    public id?: number,
    public refresh?: string,
    public access?: string,
    public email?: string,
    public password?: string,
    // tslint:disable-next-line:variable-name
    public first_name?: string,
    // tslint:disable-next-line:variable-name
    public last_name?: string,
    // tslint:disable-next-line:variable-name
    public is_active?: boolean
  ) {
  }
}
