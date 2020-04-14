import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";
import { CONFIG } from "../../firebaseConfig";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        firebase.initializeApp(CONFIG);
    }
    title = 'App3';
}
