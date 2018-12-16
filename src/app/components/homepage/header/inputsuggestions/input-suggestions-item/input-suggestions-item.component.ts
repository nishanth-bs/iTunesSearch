import { Component, OnInit, Input } from '@angular/core';
import { InputSuggestions } from 'src/app/shared/inputSuggestions';

@Component({
  selector: 'app-input-suggestions-item',
  templateUrl: './input-suggestions-item.component.html',
  styleUrls: ['./input-suggestions-item.component.scss']
})
export class InputSuggestionsItemComponent implements OnInit {
  @Input() data : InputSuggestions[]; 
  constructor() { }

  ngOnInit() {
  }

}
