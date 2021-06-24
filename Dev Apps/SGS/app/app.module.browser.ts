import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppModuleShared } from "./app.module.shared";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./components/app/app.component";

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppModuleShared,
        HttpClientModule
    ],
    providers: [
        { provide: "BASE_URL", useFactory: getBaseUrl },
        HttpClientModule
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName("base")[0].href;
}
