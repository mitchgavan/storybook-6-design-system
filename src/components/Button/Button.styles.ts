import { styleConfig } from '@chakra-ui/theme-tools';

type Dict = Record<string, any>;

function variantSolid({ colorScheme }: Dict) {
  return {
    bg: `${colorScheme}.500`,
    color: `white`,
    _hover: { bg: `${colorScheme}.600` },
    _active: { bg: `${colorScheme}.700` },
  };
}

const button = styleConfig({
  // styles for the base style
  baseStyle: {
    borderRadius: 'md',
    fontWeight: 'bold',
  },
  // styles for the size variations
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 3,
      py: 2,
    },
    md: {
      fontSize: 'md',
      px: 4,
      py: 3,
    },
  },
  // styles for the visual style variations
  variants: {
    outline: {
      border: '2px solid',
      borderColor: 'green.500',
    },
    solid: variantSolid,
  },
});

export default button;
