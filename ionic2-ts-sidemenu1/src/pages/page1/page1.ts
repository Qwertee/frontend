import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { ResultPage } from '../result/result';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    allergens: any;

    constructor(private nav: NavController) {
    }

    onLink(url: string) {
        window.open(url);
    }

    click() {
        BarcodeScanner.scan()
            .then((result) => {
                if (!result.cancelled) {
                    this.showResults(result.text);
                }
            })
            .catch((err) => {
                alert(err);
            })
    }

    showResults(barcode) {
        this.nav.push(ResultPage, {
             barcode: barcode,
             allergens: this.allergens
        });
    }
}