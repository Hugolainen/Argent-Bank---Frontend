/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

export const Footer = () => {
    return (
        <div
        css={css`
            display: flex;
            justify-content: center;
            border-top: 2px solid #ccc;
            padding: 2rem 0 1.5rem;
        `}
        >
            <p 
            css={css`
                display: flex;
                justify-content: center;
                border-top: 2px solid #ccc;
                padding: 2rem 0 1.5rem;
            `}
            >
                Copyright 2020 Argent Bank
            </p>
        </div>
  );
};