import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  
  @Input() name:any;
  @Input() age:any;
  users = [
    { name: "Pera", age: 45},
    { name: "Mika", age: 34},
    { name: "Anja", age: 45}  
  ]

  constructor(private _snackBar: MatSnackBar) { }
  prikaziProfil(){
    console.log("Kliknuli smo " + this.name + " i " + this.age)
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open("hi","x");
  }
  
  ngOnInit(): void {
  }

}
