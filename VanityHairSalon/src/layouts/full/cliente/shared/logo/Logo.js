import { Link } from 'react-router-dom';
import {ReactComponent as LogoDark} from 'src/assets/images/logos/logo-end.svg';
import { styled } from '@mui/material';

const LinkStyled = styled(Link)(() => ({
  height: '80px',
  width: '240px',
  overflow: 'hidden',
  display: 'block',
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <LogoDark height={100} />
      
    </LinkStyled>
  )
};

export default Logo;
