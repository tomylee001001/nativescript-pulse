import {Component} from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
registerElement("Pulse", () => require("nativescript-pulse").Pulse);

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
}
