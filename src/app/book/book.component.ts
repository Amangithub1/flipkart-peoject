import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../data-api.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books = [];
  constructor(private dataApi: DataApiService) {}

  ngOnInit() {
    this.books = this.dataApi.getAllBooks();
    console.log(this.dataApi.getBookById(1))
  }
}