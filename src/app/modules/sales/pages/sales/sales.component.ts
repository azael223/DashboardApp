import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  host: {
    class: 'd-flex w-100',
  },
})
export class SalesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
