import { Component } from '@angular/core';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent  {

  setup: string;
  punchline: string;
  customer: any;
  constructor() {
    this.setup = "What did the cheese say when it looked in the mirror?";
    this.punchline = "Halloumi (Hello Me)";
    this.customer = ['cus1','cus2'];
  }
}
