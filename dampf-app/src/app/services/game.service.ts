
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Game} from "../entities/game";
import {Injectable} from "@angular/core";


@Injectable()
export class GameService{

  constructor(private http: HttpClient){}


  public findAllGames()
  {
    let url = 'http://localhost:8080/games';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http
      .get<Game[]>(url, {headers});
  }

  public findById(id: number)
  {
    let url = 'http://localhost:8080/games/search/findById';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('Id', id + '');


    return this.http
      .get<Game>(url, {headers, params});
  }
}
