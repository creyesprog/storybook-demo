
import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import TaskComponent from './task.component';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta: Meta<TaskComponent> = {
  title: 'Task',
  component: TaskComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_ARCHIVED',
    },
  },
};

const longTitleString = `This is a really long string and I hope I don't reach the end of this component because if I do something
  bad will probably happen right? Maybe if we just keep going a little farther maybe this string will finally reach the and and then
  maybe we'll see something bad happen but I'm not sure`;
export const LongTitle: Story = {
  args: {
    task: {
      ...Default.args?.task,
      title: longTitleString,
    },
  },
  parameters: {
    type: 'figma',
    url: 'https://www.figma.com/design/vvJB5o5ctFL4oIRIaie8TW/Storybook?t=Ud2R3rD1axpwrwW0-1',
  },
};
