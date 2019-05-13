import { Component, OnInit } from '@angular/core';
import {HomeQDataProviderService} from '../home-q-data-provider.service';
import {Result} from '../result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  results: Result[];

  constructor(private dataProvider: HomeQDataProviderService) {}

  ngOnInit() {
    this.dataProvider.getData().subscribe(data =>{
      this.results = data.results;
    });
  }

}
