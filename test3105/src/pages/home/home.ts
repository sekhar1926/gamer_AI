import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  results: any = [];
  data: Observable<any>;
  constructor(public navCtrl: NavController, public hhtp: HttpClient) {

  }
  getData(){
    var url = 'https://jsonplaceholder.typicode.com/posts/';
    this.data = this.hhtp.get(url );
     this.data.subscribe(data =>{this.results = data});


  }


}

