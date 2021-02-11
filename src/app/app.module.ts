import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/components/header/header.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { CardComponent } from './shared/component/card/card.component';
import { BoxListComponent } from './shared/component/box-list/box-list.component';
import { DistrictService, HttpService, StudentService, TeacherService, UrlService } from './common/services';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DistrictListComponent } from './pages/district-list/district-list.component';
import { TableComponent } from './shared/component/table/table.component';
import { BdLocalPipe } from './shared/pipes/bd-local.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingComponent,
    AboutComponent,
    CardComponent,
    BoxListComponent,
    PageNotFoundComponent,
    DistrictListComponent,
    TableComponent,
    BdLocalPipe,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [ HttpService, UrlService, StudentService, TeacherService, DistrictService, Title ],
  bootstrap: [AppComponent]
})
export class AppModule { }
