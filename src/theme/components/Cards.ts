import { Card, styled } from '@mui/material';

export const CodeCard = styled(Card)(({ theme }) => ({
  padding: 20,
  backgroundColor: theme.palette.secondary.dark,
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));
