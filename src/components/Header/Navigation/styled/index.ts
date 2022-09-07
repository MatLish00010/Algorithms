import { ButtonProps } from '@mui/material';
import { Button, styled } from '@mui/material';

type ButtonNavProps = ButtonProps & {
  selected: boolean;
};

export const ButtonNav = styled(Button)<ButtonNavProps>(({ theme, selected }) => {
  return {
    borderBottom: selected ? `2px solid ${theme.palette.text.primary}` : '',
    borderRadius: 0,
    color: theme.palette.text.primary,
  };
});
