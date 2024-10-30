
import type { Meta, StoryObj } from '@storybook/angular';

import { importProvidersFrom } from '@angular/core';

import { TasksStore } from '../state/task.store';

import { moduleMetadata, applicationConfig } from '@storybook/angular';

 import { fireEvent, within } from '@storybook/test';

import { CommonModule } from '@angular/common';

import PureInboxScreenComponent from './pure-inbox-screen.component';

import { TaskModule } from './task.module';

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

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};

 export const WithInteractions: Story = {
   play: async ({ canvasElement }) => {
     const canvas = within(canvasElement);
     // Simulates pinning the first task
     await fireEvent.click(canvas.getByLabelText('pinTask-1'));
     // Simulates pinning the third task
     await fireEvent.click(canvas.getByLabelText('pinTask-3'));
   },
 };
