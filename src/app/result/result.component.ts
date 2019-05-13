import {Component, Input, OnInit} from '@angular/core';
import {Result} from '../result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input() result: Result;

  ngOnInit() {
  }

}
