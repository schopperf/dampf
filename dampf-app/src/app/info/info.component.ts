import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'info',
  templateUrl: './info.component.html',

})


export class InfoComponent implements OnInit
{
  ngOnInit(): void {
  }

  constructor() {
    console.log("Info Constructor");
  }
}
