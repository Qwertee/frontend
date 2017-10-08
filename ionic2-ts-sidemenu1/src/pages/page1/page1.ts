import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { ScanPage } from '../scan/scan';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    allergens: any;

    constructor(public navCtrl: NavController, private nav: NavController) {
    }

    onLink(url: string) {
        window.open(url);
    }

    click() {
        BarcodeScanner.scan()
            .then((result) => {
                if (!result.cancelled) {
                    const barcodeData = new BarcodeData(result.text, result.format);
                    this.scanDetails(barcodeData);
                }
            })
            .catch((err) => {
                alert(err);
            })
    }

    scanDetails(details) {
        this.nav.push(ScanPage, { details: details, allergens: this.allergens });
    }

}


export class BarcodeData {
    constructor(
        public text: String,
        public format: String
    ) { }
}
