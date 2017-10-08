import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { BarcodeData } from "../page1/page1";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-scan',
    templateUrl: 'scan.html'
})

export class ScanPage {
    barcodeData: BarcodeData;
    imageUrl: any;
    name: any;
    allergens: any;
    ingredients: any[] = [];

    constructor(private nav: NavController, navParams: NavParams, public http: Http) {
        this.barcodeData = navParams.get('details');
        // allergens that were selected on the start screen
        this.allergens = navParams.get('allergens');

        this.http.get('http://10.140.138.248:8080/api/upc/' + this.barcodeData.text).map(res => res.json()).subscribe(data => {
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
