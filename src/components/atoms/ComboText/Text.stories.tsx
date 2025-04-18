import type { Meta, StoryObj } from '@storybook/react';
import { ComboText } from './ComboText';

const meta: Meta<typeof ComboText> = {
  title: 'Components/atoms/Text',
  component: ComboText,
  tags: ['autodocs'],
  args: {
    children: '예시 텍스트',
    size: 'base',
    weight: 'normal',
    variant: 'default',
  },
  argTypes: {
    as: {
      control: 'text',
      description: 'HTML 태그로 렌더링할 요소 (예: p, span, div)',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'],
    },
    weight: {
      control: { type: 'select' },
      options: ['normal', 'medium', 'semibold', 'bold'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'muted', 'subtle', 'error'],
    },
    className: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComboText>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="space-y-2">
      <ComboText variant="default">Default</ComboText>
      <ComboText variant="muted">Muted</ComboText>
      <ComboText variant="subtle">Subtle</ComboText>
      <ComboText variant="error">Error</ComboText>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <ComboText size="xs">Extra Small</ComboText>
      <ComboText size="sm">Small</ComboText>
      <ComboText size="base">Base</ComboText>
      <ComboText size="lg">Large</ComboText>
      <ComboText size="xl">XL</ComboText>
      <ComboText size="2xl">2XL</ComboText>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <ComboText weight="normal">Normal</ComboText>
      <ComboText weight="medium">Medium</ComboText>
      <ComboText weight="semibold">SemiBold</ComboText>
      <ComboText weight="bold">Bold</ComboText>
    </div>
  ),
};
