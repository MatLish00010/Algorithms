import { styled } from '@mui/material';

const GeneralWrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  height: '100%',
}));

export default GeneralWrapper;
