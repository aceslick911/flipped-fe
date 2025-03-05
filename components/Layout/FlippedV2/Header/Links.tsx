import styled from '#components/Flipbox/FlipboxV2';
import { PaddedLink } from '#V2/PaddedLink';

import { HeaderSVG } from './Header';
import './Links.scss';

export const TopLinks = () => {
  return (
    <div className="header-links">
      <div className="v-apart">
        <div className="phone-account">
          <PaddedLink href="tel:1300123456">
            <TopLinkStyle className="x x-hug y-hug C">1300 110 100</TopLinkStyle>
          </PaddedLink>
          {/* <div className="padded-hover-button"> */}
          {/* <div className="header-links2">
              <HeaderSVG image="call" />
              <div className="phone-number"> 1300 110 100 </div>
            </div> */}
          {/* </div> */}

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

const TopLinkStyle = styled.FlipBox('TopLinkStyle')`
  text-align: right;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 12px;
  font-weight: 400;

`;
