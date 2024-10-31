
import type { Meta, StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';

import PureTaskComponent from './pure-task.component';

export const ActionsData = {
  onArchiveTask: fn(),
  onPinTask: fn(),
};

const meta: Meta<PureTaskComponent> = {
  title: 'PureTask',
  component: PureTaskComponent,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  args: {
    ...ActionsData,
  },
};

export default meta;
type Story = StoryObj<PureTaskComponent>;

export const Default: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/design/vvJB5o5ctFL4oIRIaie8TW/Storybook?node-id=2-3&t=qJLTVFdKWWc9emiJ-4',
      accessToken: 'figd_RXV7NfwgZKRkKF9Kn76MrtZ30YLT47otVPp436Te',
    },
  },
};

export const Pinned: Story = {
  ...Default,
  args: {
    task: {
      ...Default.args?.task,
      state: 'TASK_PINNED',
    },
  },
};

export const Archived: Story = {
  ...Default,
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
  ...Default,
  args: {
    task: {
      ...Default.args?.task,
      title: longTitleString,
    },
  },
};
