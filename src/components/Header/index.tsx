import Navigation from './Navigation';
import * as S from './styled';
import JsIcon from '../JsIcon';
import { Typography } from '@mui/material';

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        <Typography mr={1}>Algorithms</Typography> <JsIcon />
      </S.Logo>
      <Navigation />
    </S.Header>
  );
};

export default Header;
