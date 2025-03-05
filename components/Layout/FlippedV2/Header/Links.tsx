import { PaddedLink } from '#V2/PaddedLink';

import { HeaderSVG } from './Header';
import './Links.scss';

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
              <PaddedLink href="/accounts/login" name="login-and-my-account">
                Login | My account
                <div className="icon">
                  <HeaderSVG image="personFilled" />
                </div>
              </PaddedLink>
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
