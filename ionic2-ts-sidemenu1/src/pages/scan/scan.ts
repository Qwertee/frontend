import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-scan',
    templateUrl: 'scan.html'
})

export class ScanPage {
    barcode: any;
    imageUrl: any;
    name: any;
    allergens: any;
    ingredients: any[] = [];

    constructor(private nav: NavController, navParams: NavParams, public http: Http) {
        this.barcode = navParams.get('barcode');
        // allergens that were selected on the start screen
        this.allergens = navParams.get('allergens');
    }

    back() {
        this.nav.pop();
    }
}
