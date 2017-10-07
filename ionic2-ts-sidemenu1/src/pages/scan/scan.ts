import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';

import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { BarcodeData } from "../page1/page1";

@Component({
    selector: 'page-scan',
    templateUrl: 'scan.html'
})

export class ScanPage {
    barcodeData: BarcodeData;

    constructor(private nav: NavController, navParams: NavParams) {
        this.barcodeData = navParams.get('details');
    }

    back() {
        this.nav.pop();
    }
}
