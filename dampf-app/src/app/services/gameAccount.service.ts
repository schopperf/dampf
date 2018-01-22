
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {GameAccount} from "../entities/gameAccount";
import {Injectable} from "@angular/core";
import {Account} from "../entities/account";
import {Game} from "../entities/game";

@Injectable()
export class GameAccountService{

  constructor(private http: HttpClient){}

   public findAllGameAccounts()
  {
    let url = 'http://localhost:8080/gameAccounts';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http
      .get<GameAccount[]>(url, {headers});
  }

  public findAllGameAccountsForAccount(accountId: number)
  {
      let url = 'http://localhost:8080/gameAccounts/search/findByAccount_Id';
    let headers = new HttpHeaders().set('Accept', 'application/json');

    let params = new HttpParams()
      .set('Id', accountId+"");

    return this.http
      .get<GameAccount[]>(url, {headers, params});
  }


  public createGameAccount(game:Game, account:Account)
  {
    let url = 'http://localhost:8080/gameAccounts';

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');

    let gameAcc: GameAccount = {id: null, game:game, account:account};


    return this.http
      .post(url, gameAcc,{headers:headers});
  }





  /*fullCreate(card: Card) : void {
    let cardWithout: Card = {
      id: null,
      startDateTime: card.startDateTime,
      endDateTime: card.endDateTime,
      person: {
        id: NaN,
        firstName: '',
        lastName: '',
        dayOfBirth: '',
        street: '',
        postalCode: NaN,
        city: '',
        personType: '',
      },
      skiresort:{
        id: NaN,
        city: '',
        name: '',
        state: '',
        kmSlopes: NaN,
        height: NaN,
        skiLift: NaN,
        priceAdult: NaN,
        priceChild: NaN,
        priceStudent: NaN,
        pictureLink: '',
      }

    };
    this.createCard(cardWithout).subscribe(
      cardNew => {
        let personId = card.person.id
        let skiresortId = card.skiresort.id
        console.log(cardNew.id)
        card = cardNew;

        card.person = {
          id: personId,
          firstName: '',
          lastName: '',
          dayOfBirth: '',
          street: '',
          postalCode: NaN,
          city: '',
          personType: '',
        };

        card.skiresort = {
          id: skiresortId,
          city: '',
          name: '',
          state: '',
          kmSlopes: NaN,
          height: NaN,
          skiLift: NaN,
          priceAdult: NaN,
          priceChild: NaN,
          priceStudent: NaN,
          pictureLink: '',
        };
        console.log(card.id)

        console.log("Successfully created card.");
        this.updatePerson(card).subscribe(
          person  => {
            card.person = person;
            console.log("person was added");
            this.updateSkiresort(card).subscribe(
              skiresort => {
                card.skiresort = skiresort;
                console.log("skiresort was added");
                this.router.navigate(['/card-search'])
              },
              err => {
                console.log("card was not added" )
              }
            );

          },
          err => {
            console.log("person was not added")
          }
        );

      },
      err => {
        console.log(card.id);
        console.log("Error creating card.")
      }
    );

  }*/
}
