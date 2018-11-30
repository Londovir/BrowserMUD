import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterEditorComponent } from 'app/character-editor/character-editor.component';
import { HomeComponent } from 'app/home/home.component';
import { MapComponent } from 'app/map/map.component';
import { ShopComponent } from 'app/shop/shop.component';

const routes: Routes = [
    {
        path: 'shop', component: ShopComponent
    },
    {
        path: 'map', component: MapComponent
    },
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
