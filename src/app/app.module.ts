import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { InsertBookComponent } from './components/insert-book/insert-book.component';
import { GetBookComponent } from './components/get-book/get-book.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';
import { DeleteBookComponent } from './components/delete-book/delete-book.component';

@NgModule({
  declarations: [AppComponent, InsertBookComponent, GetBookComponent, UpdateBookComponent, DeleteBookComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
