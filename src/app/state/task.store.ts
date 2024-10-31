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
    { id: '1', title: 'Task 1', state: 'TASK_INBOX' },
    { id: '2', title: 'Task 2', state: 'TASK_INBOX' },
    { id: '3', title: 'Task 3', state: 'TASK_INBOX' },
    { id: '4', title: 'Task 4', state: 'TASK_INBOX' },
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

// The class definition for our error field
export class AppError {
  static readonly type = 'APP_ERROR';

  constructor(public payload: boolean) {}
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
        const pinnedTask: Task = {
          ...taskToPin,
          state: 'TASK_PINNED',
        };

        const updatedTasks = store.tasks().map((task) =>
          task.id === pinTask.payload ?
            pinnedTask :
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
    setAppError: (appError: AppError) => {
      patchState(store, (state) => ({
        error: !state.error,
      }));
    },
  }))
);
