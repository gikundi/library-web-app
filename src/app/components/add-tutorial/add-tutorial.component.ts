import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import {Library} from "../../models/library.models";

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Library = {
    book_name: '',
    isbn: '',
    aisle: '',
    author: '',
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      book_name: this.tutorial.book_name,
      isbn: this.tutorial.isbn,
      aisle: this.tutorial.aisle,
      author: this.tutorial.author,
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      book_name: '',
      isbn: '',
      aisle: '',
      author: '',
    };
  }

}
