import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-user',
  templateUrl: './one-user.component.html',
  styleUrls: ['./one-user.component.css']
})
export class OneUserComponent implements OnInit {
  name :string;
  constructor(
    private route: ActivatedRoute,
    // private location: Location
  ) {
    this.name = this.route.snapshot.paramMap.get('name');
  }
  ngOnInit(): void {
  }

}
