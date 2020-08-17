import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from './Button';
import { HStack } from '@chakra-ui/core';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

const VariantsTemplate: Story<ButtonProps> = ({ variant, ...args }) => (
  <HStack spacing={4}>
    <Button variant="solid" {...args} />
    <Button variant="outline" {...args} />
    <Button variant="link" {...args} />
  </HStack>
);

const ColorsTemplate: Story<ButtonProps> = ({ colorScheme, ...args }) => (
  <HStack spacing={4}>
    <Button colorScheme="purple" {...args} />
    <Button colorScheme="green" {...args} />
    <Button colorScheme="red" {...args} />
  </HStack>
);

const SizeTemplate: Story<ButtonProps> = () => (
  <HStack spacing={4}>
    <Button size="sm">Button</Button>
    <Button size="md">Button</Button>
  </HStack>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Variants = VariantsTemplate.bind({});
Variants.args = {
  children: 'Button',
};

export const Colors = ColorsTemplate.bind({});
Colors.args = {
  children: 'Button',
  variant: 'solid',
};

export const Sizes = SizeTemplate.bind({});
