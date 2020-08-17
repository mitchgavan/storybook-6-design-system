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

const ColorsTemplate: Story<ButtonProps> = ({ colorScheme, ...args }) => {
  console.log({ args });
  return (
    <HStack>
      <Button colorScheme="purple" {...args} />
      <Button colorScheme="green" {...args} />
      <Button colorScheme="red" {...args} />
    </HStack>
  );
};

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Solid = ColorsTemplate.bind({});
Solid.args = {
  children: 'Button',
  variant: 'solid',
};

export const Outline = ColorsTemplate.bind({});
Outline.args = {
  children: 'Button',
  variant: 'outline',
};

export const Link = ColorsTemplate.bind({});
Link.args = {
  children: 'Button',
  variant: 'link',
};

// export const Large = Template2.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
