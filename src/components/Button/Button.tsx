import React, { forwardRef } from 'react';
import { Box } from '@chakra-ui/core';
import { useStyleConfig } from '@chakra-ui/core';
import styleConfig from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  colorScheme?: 'purple' | 'red' | 'green';
  size?: 'sm' | 'md';
  variant?: 'solid' | 'outline';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, colorScheme, size, variant }, ref) => {
    const styles = useStyleConfig('Button', {
      styleConfig,
      size,
      variant,
      colorScheme,
    });

    return (
      <Box as="button" ref={ref} sx={styles}>
        {children}
      </Box>
    );
  }
);

Button.defaultProps = {
  colorScheme: 'purple',
  size: 'md',
  variant: 'solid',
};

export default Button;
