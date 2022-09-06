import { Button } from '@mui/material';
import React from 'react';

import { useNavigate } from 'react-router-dom';

const Navigator = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button variant="contained" onClick={() => navigate('/')}>
        First
      </Button>
      <Button variant="contained" onClick={() => navigate('/second')}>
        Second
      </Button>
    </div>
  );
};

export default Navigator;
