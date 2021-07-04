/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage/HomePage';
import { SigninPage } from './pages/SigninPage/SigninPage';
import { UserPage } from './pages/UserPage/UserPage';

import { fontFamily, fontSize, gray2 } from './graphics/Styles';

function App() {
  return (
    <BrowserRouter>
        <div
          css={css`
            font-family: ${fontFamily};
            font-size: ${fontSize};
            color: ${gray2};
          `}
        >
          <Header />

          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="signin" element={<SigninPage />} />
            <Route path="search" element={<UserPage />} />
          </Routes>

          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
