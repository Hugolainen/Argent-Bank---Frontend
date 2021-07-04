/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { PrimaryButton } from '../../graphics/Styles';

export const Header = () => {

  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate('signin');
  };
  return (
      <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 20px;
        background-color: #fff;
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
      >
        <img
        src="../../graphics/img/argentBankLogo.png"
        alt="Logo"
        css={css`
            max-width: 100%;
            width: 200px;
        `}
        />
        <PrimaryButton onClick={handleSigninClick}>
            Sign in
        </PrimaryButton>
      </div>
  );
};