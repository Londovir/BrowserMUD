import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'src/routing/app-routing.module';
import { AttributeEntryComponent } from './attribute-entry/attribute-entry.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CharacterEditorComponent } from './character-editor/character-editor.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeEntryComponent,
    ProgressBarComponent,
    CharacterEditorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
