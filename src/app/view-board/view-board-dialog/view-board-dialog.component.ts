import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.css']
})
export class ViewBoardDialogComponent implements OnInit {
  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false];

  constructor(private dialogRef: MatDialogRef<ViewBoardDialogComponent>) { }

  ngOnInit(): void {
  }

  deleteTask(i: number) {

  }

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }
}
