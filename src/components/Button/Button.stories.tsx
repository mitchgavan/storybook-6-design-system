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

export const Solid = Template.bind({});
Solid.args = {
  children: 'Button',
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Button',
  variant: 'outline',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Button',
  variant: 'link',
};
