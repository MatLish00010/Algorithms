import { Box, Typography } from '@mui/material';

const JsIcon = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.light',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
        borderRadius: '5%',
      }}
    >
      <Typography p={0} m={0} sx={{ color: 'text.secondary', fontWeight: '700', lineHeight: '1.2' }}>
        JS
      </Typography>
    </Box>
  );
};
export default JsIcon;
