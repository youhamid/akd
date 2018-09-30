import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { FormsModule } from '@angular/forms';
import { LivreDetailComponent } from './livre-detail/livre-detail.component';
import { MessagesComponent } from './messages/messages.component'; 

import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { LivreSearchComponent } from './livre-search/livre-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    LivreDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LivreSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
