import { styled } from '@mui/material';

export const Header = styled('header')(({ theme }) => ({
  padding: '20px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `1px solid ${theme.palette.primary.light}`,
  width: '80%',
  maxWidth: '1200px',
  margin: '0 auto',
}));

export const Logo = styled('div')(({ theme }) => ({
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.primary,
  lineHeight: '1.7',
  textTransform: 'uppercase',
}));
