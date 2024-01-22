import type { Meta, StoryObj } from '@storybook/react'

import { Badge, BadgeProps } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: ['default', 'destructive', 'warning'],
      control: { type: 'radio' },
    },
  },
}

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Badge",
  },
}
