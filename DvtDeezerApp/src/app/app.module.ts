import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { TracksComponent } from './tracks/tracks.component';
import { GetyearPipe } from './pipes/getyear.pipe';
import { ThousandformatterPipe } from './pipes/thousandformatter.pipe';
import { GetAlbumResolver, GetArtistDetailsResolver, GetArtistResolver } from './resolvers';
import { LoaderService } from './shared/loader.service';
import { LoaderInterceptor } from './shared/loader.interceptor';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ArtistDetailsComponent,
    AlbumsComponent,
    TracksComponent,
    GetyearPipe,
    ThousandformatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    GetArtistDetailsResolver,
    GetArtistResolver,
    GetAlbumResolver,
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor,	multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
