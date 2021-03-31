import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: "root" })
export class GameService {
  $points = new BehaviorSubject<number>(0);

  addPoint() {
    this.$points.next(this.$points.value + 1);
  }
  clearpoints(){
    this.$points = new BehaviorSubject<number>(0)
  }
  restartGame(){}
}
