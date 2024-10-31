
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import PureTaskComponent from './pure-task.component';
import TaskListComponent from './task-list.component';
import PureTaskListComponent from './pure-task-list.component';

@NgModule({
  imports: [CommonModule],
  exports: [PureTaskComponent, TaskListComponent],
  declarations: [PureTaskComponent, TaskListComponent, PureTaskListComponent],
})
export class TaskModule {}
