import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<any[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  private taskId = 1; // Start ID from 1

  constructor() { }

  addTask(task:any) {
    console.log(task)
    const newTaskWithId = { ...task, id: this.generateUniqueId() }; // Generate id for new tasks
    this.taskId++;
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = [...currentTasks, newTaskWithId];
    this.tasksSubject.next(updatedTasks);
    console.log(updatedTasks)
  }


  removeTask(taskid: string): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.filter((task) => task.id !== taskid);
    this.tasksSubject.next(updatedTasks);
  }

  generateUniqueId() {
    return this.taskId;
  }

  getTasks(): any[] {
    return this.tasksSubject.value;
  }
}
