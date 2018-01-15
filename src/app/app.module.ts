import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { SectionComponent } from './components/section/section.component';
import { CrewViewComponent } from './components/crew-view/crew-view.component';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    SectionComponent,
    CrewViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
