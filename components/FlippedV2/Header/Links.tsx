import { styled } from 'styled-components';

import { HeaderSVG } from './Header';
import './Links.scss';

export const TopLinks = () => {
  return (
    <div className="header-links">
      <div className="v-apart">
        <div className="phone-account">
          <div className="padded-hover-button">
            <div className="header-links2">
              <HeaderSVG image="call" />
              <div className="phone-number"> 1300 123 456 </div>
            </div>
          </div>
          <div className="account-links">
            <div className="top-links">
              <div className="padded-hover-button2">
                <div className="header-links3">
                  <div className="login-and-my-account">  Login | My account </div>
                  <div className="icon">
                    <HeaderSVG image="personFilled" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="padded-hover-button3">
            <div className="instance-swapper">
              <div className="instance-swap"> Contact Us </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderWrap = styled.div``;
