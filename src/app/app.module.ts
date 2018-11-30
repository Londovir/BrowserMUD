import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatIconModule, MatOptionModule, MatSelectModule, MatToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/routing/app-routing.module';
import { AttributeEntryComponent } from './attribute-entry/attribute-entry.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CharacterEditorComponent } from './character-editor/character-editor.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeEntryComponent,
    ProgressBarComponent,
    CharacterEditorComponent,
    HomeComponent,
    ShopComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
