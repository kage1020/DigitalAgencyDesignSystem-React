import React from 'react';
import NotificationBadge from '../components/NotificationBadge';
import { expect, within } from '@storybook/test';

export default {
  title: 'Components/NotificationBadge',
  component: NotificationBadge,
  tags: ['autodocs'],
  args: {
    children: <div className='w-6 h-6 border'></div>,
  },
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('notification-badge')).toBeInTheDocument();
    const dot = canvas.queryByTestId('badge-dot');
    await expect(dot).not.toBeInTheDocument();
    const count = canvas.queryByTestId('badge-count');
    await expect(count).not.toBeInTheDocument();
  },
};

export const Dot = {
  args: {
    variant: 'dot',
    count: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('notification-badge')).toBeInTheDocument();
    const dot = canvas.getByTestId('badge-dot');
    await expect(dot).toBeInTheDocument();
    const count = canvas.queryByTestId('badge-count');
    await expect(count).not.toBeInTheDocument();
  },
};

export const Count = {
  args: {
    variant: 'count',
    count: 1,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId('notification-badge')).toBeInTheDocument();
    const count = canvas.getByTestId('badge-count');
    await expect(count).toBeInTheDocument();
    const dot = canvas.queryByTestId('badge-dot');
    await expect(dot).not.toBeInTheDocument();
  },
};
