import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';


@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  @Input()
  panelClass: string;
  message: string;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  saveButtonClick (message: string, action: string) {
    const config = new MatSnackBarConfig();
    config.duration = 2000;
    config.panelClass = ['green-snackbar'];
    config.horizontalPosition = 'right';
    this.snackBar.open(message, action, config);
  }

}
