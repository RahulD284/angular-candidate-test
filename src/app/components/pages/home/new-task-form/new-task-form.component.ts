import { Component, OnInit } from '@angular/core';
import { InputComponent } from '../../../ui/input/input.component';
import { CheckboxComponent } from '../../../ui/checkbox/checkbox.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../../task-service.service'
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task-form',
  standalone: true,
  imports: [
    InputComponent,
    CheckboxComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './new-task-form.component.html',
  styleUrl: './new-task-form.component.scss'
})

export class NewTaskFormComponent implements OnInit {
  tasks: any = [];
  filteredTasks:any = [];
  searchQuery:any;

  constructor(private taskService: TaskService, private router: Router) { }
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
    // add controls
  });

  ngOnInit(): void {

    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = [...this.tasks];
    });

  }

  onSubmit() {
    if (this.form.valid) {
      const taskData = this.form.value;
      console.log('New Task:', taskData);
      // Perform your task creation logic here, e.g., API call

      this.taskService.addTask(taskData);
      this.form.reset();

    }
  }

  navigateToDetails(id: any) {
    console.log(id)
    this.router.navigate(['details', id]);
  }


  deleteTask(taskid: any) {
    this.taskService.removeTask(taskid);
  }

  onSearchChange(query: string): void {
    this.searchQuery = query.toLowerCase();
    this.filteredTasks = this.tasks.filter((task:any) =>
      task.name.toLowerCase().includes(this.searchQuery)
    );
  }
}
