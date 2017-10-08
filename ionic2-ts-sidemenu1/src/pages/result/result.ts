import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
    selector: 'page-result',
    templateUrl: 'result.html'
})

export class ResultPage {
    barcode: any;
    imageUrl: any;
    name: any;
    allergens: any;
    ingredients: any[] = [];

    constructor(private nav: NavController, navParams: NavParams, public http: Http) {
        this.barcode = navParams.get('barcode');
        // allergens that were selected on the start screen
        this.allergens = navParams.get('allergens');

        this.http.get('http://10.140.138.248:8080/api/upc' + this.barcode).map(res => res.json()).subscribe(data => {
            this.name = data["desc"];
            this.imageUrl = data["image"];
            this.ingredients = data["ingredients"];
            // have the data from the server
        });
    }

    back() {
        this.nav.pop();
    }
}
