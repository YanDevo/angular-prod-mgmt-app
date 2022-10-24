import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() starRate: number = 0 ;
  max: number = 5;
  isReadonly: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  

}
