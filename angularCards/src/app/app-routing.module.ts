import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NetCoreCardsComponent } from './net-core-cards/net-core-cards.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{path: '', redirectTo: '/cards', pathMatch: 'full'},
{ path: 'cards',      component: NetCoreCardsComponent },
{ path: 'about',      component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
