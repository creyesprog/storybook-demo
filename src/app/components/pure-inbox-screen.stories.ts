import type { Meta, StoryObj } from '@storybook/angular';

import { TasksStore } from '../state/task.store';

import { moduleMetadata, applicationConfig } from '@storybook/angular';

import { fireEvent, waitFor, within, expect } from '@storybook/test';

import { CommonModule } from '@angular/common';

import PureInboxScreenComponent from './pure-inbox-screen.component';

import { TaskModule } from './pure-task.module';

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
    applicationConfig({
      providers: [TasksStore],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/design/vvJB5o5ctFL4oIRIaie8TW/Storybook?node-id=36-12&t=iMXkahU8GsWpUg7N-4',
      accessToken: process.env["FIGMA_ACCESS_TOKEN"],
    },
  },
};

export const Error: Story = {
  ...Default,
  args: {
    error: true,
  },
};

export const PinOne: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  },
};

export const PinOneAndArchiveOne: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByTestId('checked-2'));
    //
  },
};

export const PinAll: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-2'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    await fireEvent.click(canvas.getByLabelText('pinTask-4'));

    await waitFor(expectPinnedIconsToBe4);
    async function expectPinnedIconsToBe4() {
      expect(canvas.getAllByTestId('icon-star').length).toBe(4)
    }
  },
};

export const ArchiveAll: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByTestId('checked-1'));
    await fireEvent.click(canvas.getByTestId('checked-2'));
    await fireEvent.click(canvas.getByTestId('checked-3'));
    await fireEvent.click(canvas.getByTestId('checked-4'));
    //
  },
};
