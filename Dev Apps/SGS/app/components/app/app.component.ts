import { Component } from "@angular/core";
import { routerTransition } from './slide.animation';

@Component({
    selector: "app",
    templateUrl: "./app.component.html",
    animations: [routerTransition],
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    getState(outlet: any) {
        return outlet.activatedRouteData.state;
    }
}
