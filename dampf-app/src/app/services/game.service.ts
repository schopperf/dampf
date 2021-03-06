
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



  public createGame(name:string, releaseYear:number, price:number, ageRestriction:number)
  {
    let url = 'http://localhost:8080/games';

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');



    return this.http
      .post(url,{name:name, releaseYear:releaseYear, price:price,
        ageRestriction:ageRestriction}, {headers:headers});
  }


  updateGame(game: Game) {


    let url = 'http://localhost:8080/games/' + game.id;
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this
      .http
      .put(url, game,{headers});
  }


  deleteGame(gameId: number)
  {
    let url = 'http://localhost:8080/games/' + gameId;
    let headers = new HttpHeaders().set('Accept', 'application/json');



    return this
      .http
      .delete(url, {headers});
  }

  findByNameContaining(name: string)
  {
    let url = 'http://localhost:8080/games/search/findByNameContaining';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('name', name);


    return this.http
      .get<Game>(url, {headers, params});
  }


}
