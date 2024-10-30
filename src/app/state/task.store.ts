import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Task } from '../models/task.model';
import { computed } from '@angular/core';

type TasksState = {
  tasks: Task[];
  status: 'idle' | 'loading' | 'success' | 'error';
  error: boolean;
};

const initialState: TasksState = {
  tasks: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
  status: 'idle',
  error: false,
};

export class ArchiveTask {
  static readonly type = 'ARCHIVE_TASK';

  constructor(public payload: string) {}
}

export class PinTask {
  static readonly type = 'PIN_TASK';

  constructor(public payload: string) {}
}

export const TasksStore = signalStore(
  withState(initialState),
  withComputed(({ tasks }) => ({
    getError: computed(() => 'something'),
  })),
  withMethods((store) => ({
    pinTask: (pinTask: PinTask) => {
      const taskToPin = store.tasks().find((task) => task.id === pinTask.payload);
      if (taskToPin) {
        const archivedTask: Task = {
          ...taskToPin,
          state: 'TASK_ARCHIVED',
        };

        debugger;

        const updatedTasks = store.tasks().map((task) =>
          task.id === pinTask.payload ?
            archivedTask :
            task
        );

        patchState(store, (state) => ({
          tasks: updatedTasks,
        }));
      }
    },
    archiveTask: (archiveTask: ArchiveTask) => {
      const taskToArchive = store.tasks().find((task) => task.id === archiveTask.payload);
      if (taskToArchive) {
        const archivedTask: Task = {
          ...taskToArchive,
          state: 'TASK_ARCHIVED',
        };

        const updatedTasks = store.tasks().map((task) =>
          task.id === archiveTask.payload ?
            archivedTask :
            task
        );

        patchState(store, (state) => ({
          tasks: updatedTasks,
        }));
      }
    },
  }))
);
