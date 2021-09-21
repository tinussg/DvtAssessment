import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetAlbumResolver, GetArtistDetailsResolver, GetArtistResolver } from './resolvers';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'details/:id',
    component: ArtistDetailsComponent,
    resolve: {
      topTracks: GetArtistDetailsResolver,
      artist: GetArtistResolver,
      albums: GetAlbumResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
