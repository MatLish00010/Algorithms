import DeblurIcon from '@mui/icons-material/Deblur';

import Navigation from './Navigation';
import * as S from './styled';

const Header = () => {
  return (
    <S.Header>
      <S.Logo>
        Algorithms <DeblurIcon sx={{ ml: 2 }} />
      </S.Logo>
      <Navigation />
    </S.Header>
  );
};

export default Header;
