import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterEditorComponent } from 'app/character-editor/character-editor.component';
import { HomeComponent } from 'app/home/home.component';

const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
{
    path: 'charactereditor', component: CharacterEditorComponent
},
{
    path: '', redirectTo: '/home', pathMatch: 'full'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
