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

function variantOutline({ colorScheme }: Dict) {
  return {
    border: '1px',
    color: `${colorScheme}.500`,
    _hover: { bg: `${colorScheme}.50` },
    _active: { bg: `${colorScheme}.100` },
  };
}

function variantLink({ colorScheme }: Dict) {
  return {
    color: `${colorScheme}.500`,
    padding: 0,
    _hover: { color: `${colorScheme}.600`, textDecoration: 'underline' },
    _active: { color: `${colorScheme}.700` },
  };
}

const button = styleConfig({
  // styles for the base style
  baseStyle: {
    borderRadius: 'md',
    fontWeight: 'bold',
    transition: 'all 250ms',
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
    link: variantLink,
    outline: variantOutline,
    solid: variantSolid,
  },
});

export default button;
