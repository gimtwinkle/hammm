import type { Meta, StoryObj } from '@storybook/react';
import ComboInput from '@/components/atoms/ComboInput';
import { Input } from 'postcss';

const meta = {
  title: 'Components/Form/Input',
  component: ComboInput,
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'number',
        'checkbox',
        'radio',
        'tel',
        'button',
        'file',
        'date',
        'search',
      ],
      description: 'type',
      default: 'text',
    },
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
      description: 'input 스타일',
    },
    label: {
      control: 'text',
      default: 'label',
    },
    disabled: {
      control: 'boolean',
    },
    title: {
      control: 'text',
      description: 'label 미사용시',
    },
    placeholder: {
      control: 'text',
      default: '내용을 입력하세요.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComboInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
    disabled: false,
    label: 'label',
    htmlFor: 'input01',
    variant: 'default',
  },
};

export const NonLabel: Story = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
    disabled: false,
    htmlFor: 'input01',
    title: 'input default',
    variant: 'default',
  },
};

export const error: Story = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
    disabled: false,
    label: 'error',
    htmlFor: 'input02',
    variant: 'error',
  },
};

export const success: Story = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
    disabled: false,
    label: 'success',
    htmlFor: 'input03',
    variant: 'success',
  },
};

export const warning: Story = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
    disabled: false,
    label: 'warning',
    htmlFor: 'input04',
    variant: 'warning',
  },
};
