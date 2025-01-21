import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task-service.service';


@Component({
  selector: 'app-task-by-id',
  standalone: true,
  imports: [],
  templateUrl: './task-by-id.component.html',
  styleUrl: './task-by-id.component.scss'
})
export class TaskByIdComponent implements OnInit {

  tasks: any = [];
  taskId: any;
  displayTask: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService) {

  }

  ngOnInit() {
    this.route.params?.subscribe(params => {
      this.taskId = params['id']; //'id' parameter from the URL
    });
    this.getTasks();
  }


  getTasks() {
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });

    const result = this.tasks?.filter((id: any) => id.id == this.taskId);
    this.displayTask = result[0];
  }

}



