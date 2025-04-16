// stories/ComboDialog.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { ComboDialog } from '@/components/atoms/ComboDialog/ComboDialog';

const meta: Meta<typeof ComboDialog> = {
  title: 'Components/Dialog',
  component: ComboDialog,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    triggerLabel: { control: 'text' },
    showFooter: { control: 'boolean' },
    onConfirm: { action: 'onConfirm' },
  },
};

export default meta;
type Story = StoryObj<typeof ComboDialog>;

export const Default: Story = {
  args: {
    title: 'Dialog Title',
    description: 'This is a description',
    content: 'This is the dialog body content.',
    showFooter: true,
    triggerLabel: 'Open Dialog',
  },
};

export const WithoutFooter: Story = {
  args: {
    title: 'No Footer',
    description: 'No buttons shown below',
    content: 'Just static content.',
    showFooter: false,
  },
};
