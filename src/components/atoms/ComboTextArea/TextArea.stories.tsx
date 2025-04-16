// stories/textarea.stories.tsx 또는 components/ui/textarea.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { ComboTextArea } from './ComboTextArea';
const meta: Meta<typeof ComboTextArea> = {
  title: 'Components/Textarea',
  component: ComboTextArea,
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'radio',
      options: ['default', 'error', 'success'],
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComboTextArea>;

export const Default: Story = {
  args: {
    placeholder: '기본 텍스트에어리어',
  },
};

export const Error: Story = {
  args: {
    intent: 'error',
    placeholder: '에러 상태',
  },
};

export const Success: Story = {
  args: {
    intent: 'success',
    placeholder: '성공 상태',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Large textarea',
  },
};

export const SmallDisabled: Story = {
  args: {
    size: 'sm',
    disabled: true,
    placeholder: '비활성화된 상태',
  },
};
