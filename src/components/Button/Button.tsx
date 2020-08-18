import React, { forwardRef } from 'react';
import { Box } from '@chakra-ui/core';
import { useStyleConfig } from '@chakra-ui/core';
import styleConfig from './Button.styles';

interface ButtonOptions {
  /**
   * Customize the color based on the theme.
   */
  colorScheme?: 'gray' | 'purple' | 'red' | 'green';
  /**
   * Customize the size.
   */
  size?: 'sm' | 'md';

  /**
   * Visual style variations.
   */
  variant?: 'solid' | 'outline' | 'link';
}

export interface ButtonProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['button']>,
    ButtonOptions {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, colorScheme, size, variant, ...rest }, ref) => {
    const styles = useStyleConfig('Button', {
      styleConfig,
      size,
      variant,
      colorScheme,
    });

    return (
      <Box as="button" ref={ref} sx={styles} {...rest}>
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
