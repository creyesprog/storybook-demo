
import { Component, inject } from '@angular/core';
import { ArchiveTask, PinTask } from '../state/task.store';
import { TasksStore } from '../state/task.store';

@Component({
  selector: 'app-task-list',
  template: `
    <app-pure-task-list
      [tasks]="store.tasks()"
      (onArchiveTask)="archiveTask($event)"
      (onPinTask)="pinTask($event)"
    ></app-pure-task-list>
  `,
  providers: [TasksStore],
})
export default class TaskListComponent {
  readonly store = inject(TasksStore);

  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.archiveTask(new ArchiveTask(id));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    debugger;
    this.store.pinTask(new PinTask(id));
  }
}
