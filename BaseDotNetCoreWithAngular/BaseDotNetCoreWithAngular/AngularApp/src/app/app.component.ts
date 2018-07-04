import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ExampleService } from './services/example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  message = 'message default';

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.exampleService.getMessage().subscribe(data=>{
      this.message = data.message;
      console.log("data: ", data);
    })
  }
}