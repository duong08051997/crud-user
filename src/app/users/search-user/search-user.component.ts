import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  @Output() keyword = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  getKeywordSearch(event): void{
    const value = event.target.value.toLowerCase();
    this.keyword.emit(value);
  }

}
