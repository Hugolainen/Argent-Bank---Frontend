import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <img src="../../graphics/img/argentBankLogo.png" alt="Logo" />
      <Link to="/signin">Sign in</Link>
    </div>
  );
};
