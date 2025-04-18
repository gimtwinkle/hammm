import type { Meta, StoryObj } from '@storybook/react';
import ComboButton from './ComboButton';

const meta = {
  title: 'Components/atoms/Button',
  component: ComboButton,
  argTypes: {
    label: {
      control: 'text',
      description: '버튼 텍스트',
    },
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      description: '버튼 스타일',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: '버튼 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComboButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'lg',
  },
};
