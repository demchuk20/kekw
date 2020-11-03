import {environment} from '../../environments/environment';

export class Urls {
  public static REGISTER = `${environment.apiUrl}/users/`;
  public static LOGIN = `${environment.apiUrl}/users/tokens/`;
  public static ACCESS_TOKEN = `${environment.apiUrl}/users/tokens/refresh/`;
  public static USER_UPDATE = `${environment.apiUrl}/users/`;
  public static USER_DELETE = `${environment.apiUrl}/users/`;
}
