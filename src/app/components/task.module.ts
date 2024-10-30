
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import TaskComponent from './task.component';
import TaskListComponent from './task-list.component';
import PureTaskListComponent from './pure-task-list.component';
import { TasksStore } from '../state/task.store';

@NgModule({
  imports: [CommonModule],
  exports: [TaskComponent, TaskListComponent],
  declarations: [TaskComponent, TaskListComponent, PureTaskListComponent],
  providers: [TasksStore],
})
export class TaskModule {}
