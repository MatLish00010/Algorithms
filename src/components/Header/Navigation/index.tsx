import { Button, Stack } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { navigationItems } from './utils';
import * as S from './styled';

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Stack direction={'row'} spacing={2}>
      {navigationItems.map(item => (
        <S.ButtonNav
          variant="text"
          selected={pathname === item.path}
          sx={{ color: 'white' }}
          key={item.label}
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </S.ButtonNav>
      ))}
    </Stack>
  );
};

export default Navigation;
