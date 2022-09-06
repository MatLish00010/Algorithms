import { styled } from '@mui/material';

export const Header = styled('header')(({ theme }) => ({
  padding: '20px 30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `2px solid ${theme.palette.primary.main}`,
}));

export const Logo = styled('div')(({ theme }) => ({
  fontSize: 16,
  display: 'flex',
  color: theme.palette.text.primary,
  lineHeight: '1.7',
  textTransform: 'uppercase',
}));
