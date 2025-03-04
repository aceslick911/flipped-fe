import React, { useState } from 'react'

import { RiCheckboxCircleFill } from '@remixicon/react'

import styled from '#components/Flipbox/FlipboxV2'
import { LoginModalButton } from '#components/Modal/Login/LoginModal'
import Modal from '#components/Modal/modal'
import Button from '#components/radix/button'
import { PaddedLink } from '#V2/PaddedLink'

import { HeaderSVG } from './Header'
import './TopLinks.scss'

export const TopLinks = () => {
  return (
    <div className="header-links">
      <div className="v-apart">
        <div className="phone-account">
          <PaddedLink href="tel:1300123456" name="phone-number">
            <HeaderSVG image="call" /> 1300 110 100
          </PaddedLink>

          <div className="account-links">
            <div className="top-links">
              <LoginModalButton>
                <PaddedLink href="/accounts/login" name="login-and-my-account">
                  Login | My account
                  <div className="icon">
                    <HeaderSVG image="personOutline" />
                  </div>
                </PaddedLink>
              </LoginModalButton>
            </div>
          </div>
        </div>
        <div className="links">
          <BottomLink href="/contact" name="contact">
            Contact Us
          </BottomLink>
        </div>
      </div>
    </div>
  );
};

const BottomLink = styled(PaddedLink)`
      background: var(--background, #0f1533);
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    overflow: hidden;
    
`;
