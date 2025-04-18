import { Meta, StoryObj } from '@storybook/react';
import { ComboInput } from './ComboInput';

const meta: Meta<typeof ComboInput.Text> = {
  title: 'Components/atoms/Input',
  component: ComboInput.Text,
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'password',
        'number',
        'checkbox',
        'tel',
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
};

export default meta;

type TextStory = StoryObj<typeof ComboInput.Text>;
type RadioStory = StoryObj<typeof ComboInput.Radio>;
type CheckboxStory = StoryObj<typeof ComboInput.Checkbox>;

export const Text: TextStory = {
  args: {
    type: 'text',
    placeholder: '내용을 입력하세요.',
    disabled: false,
    label: 'label',
    id: 'input01',
  },
};

export const Radio: RadioStory = {
  render: () => (
    <ComboInput.Radio
      id="radio1"
      name="group"
      value="option1"
      label="Option1"
    />
  ),
};

export const Checkbox: CheckboxStory = {
  render: () => (
    <ComboInput.Checkbox
      id="radio1"
      name="group"
      value="option1"
      label="Option1"
    />
  ),
};
