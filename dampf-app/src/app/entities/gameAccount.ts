import {Account} from "./account";
import {Game} from "./game";

export interface GameAccount
{
  id: number;
  game: Game;
  account: Account;
}
