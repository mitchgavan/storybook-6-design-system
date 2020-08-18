import React, { forwardRef } from 'react';
import { Box } from '@chakra-ui/core';
import { useStyleConfig } from '@chakra-ui/core';
import styleConfig from './Button.styles';

export interface ButtonProps {
  /**
   * Button contents
   */
  children: React.ReactNode;
  colorScheme?: 'gray' | 'purple' | 'red' | 'green';
  isDisabled?: boolean;
  size?: 'sm' | 'md';
  /**
   * Visual style variations
   */
  variant?: 'solid' | 'outline' | 'link';
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, colorScheme, size, variant, isDisabled }, ref) => {
    const styles = useStyleConfig('Button', {
      styleConfig,
      size,
      variant,
      colorScheme,
    });

    return (
      <Box as="button" ref={ref} sx={styles} disabled={isDisabled}>
        {children}
      </Box>
    );
  }
);

Button.defaultProps = {
  colorScheme: 'purple',
  isDisabled: false,
  size: 'md',
  variant: 'solid',
};

export default Button;
