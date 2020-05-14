import styled from 'styled-components';
import { shade } from 'polished';

import background from '../../assets/sign-up-background.png';

import colors from '../../styles/colors';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  height: 100vh;
`;

export const Content = styled.div`
  /* place-content: center center; */
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 700px;
  width: 100%;

  > a {
    color: ${colors.f_lnk_aux};
    display: inline-flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: ${(props) => props && shade(0.2, colors.f_lnk_txt)};
    }

    svg {
      margin-right: 8px;
    }
  }

  form {
    margin: 80px 0;
    text-align: center;
    width: 340px;

    h1 {
      color: ${colors.white};
      margin-bottom: 24px;
    }

    a {
      color: ${colors.f_lnk_aux};
      display: inline-block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 300ms ease;

      &:hover {
        color: ${(props): string => props && shade(0.2, colors.f_lnk_aux)};
      }
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${background}) no-repeat center;
  background-size: cover;
`;
