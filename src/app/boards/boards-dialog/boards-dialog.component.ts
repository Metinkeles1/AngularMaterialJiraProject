import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.css']
})
export class BoardsDialogComponent implements OnInit {

  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })

  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>) { }

  ngOnInit(): void {
  }

  create() {

  }

  close() {
    this.dialogRef.close()
  }

}
