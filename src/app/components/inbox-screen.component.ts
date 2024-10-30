
import { Component, Inject } from '@angular/core';
import { TasksStore } from '../state/task.store';

@Component({
  selector: 'app-inbox-screen',
  template: `
    <app-pure-inbox-screen [error]="store.error() | async"></app-pure-inbox-screen>
  `,
  providers: [TasksStore],
})
export default class InboxScreenComponent {
  readonly store = Inject(TasksStore);
}
