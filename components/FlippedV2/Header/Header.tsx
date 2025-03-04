import { styled } from 'styled-components'

import logoUrl from '#assets/svg/flipped-logo.svg'
import { Link } from '#components/Link'

import './header.scss'

const Header = () => {
  return (
    <div className="comp-header device-desktop">
      <div className="left-pad" />
      <div className="wrap">
        <Link href="/">
          <img src={logoUrl} width={170} alt="logo" />
        </Link>
        <div className="header-links-container">
          <div className="header-links">
            <div className="v-apart">
              <div className="phone-account">
                <div className="padded-hover-button">
                  <div className="header-links2">
                    <svg
                      className="call-icon"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Call Icon</title>
                      <g clipPath="url(#clip0_583_370)">
                        <path
                          d="M13.982 10.2653L13.9011 10.9428C13.7385 11.696 12.6814 12.4491 11.2173 12.6755C9.75309 12.901 6.82564 12.1487 4.14267 10.0024C1.4579 7.85519 0.360437 5.37097 0.0350651 4.35398C-0.24986 2.28338 1.29521 1.0034 1.29521 1.0034C1.74282 0.588946 2.31177 0.73958 2.84028 0.73958C3.36878 0.73958 3.53147 1.15403 3.53147 1.15403C3.53147 1.15403 4.38535 2.88591 4.62893 3.45017C4.87341 4.01526 4.58848 4.35398 4.58848 4.35398C4.58848 4.35398 4.10042 4.99397 3.77505 5.2944C3.44968 5.59484 3.69416 6.01013 3.69416 6.01013C5.60504 8.8339 7.84131 9.58707 8.41026 9.77516C8.97921 9.96324 9.18324 9.58707 9.18324 9.58707C9.18324 9.58707 9.75219 8.9088 10.1998 8.45773C10.6474 8.00583 11.0537 8.26881 11.0537 8.26881C11.0537 8.26881 12.8432 9.13517 13.4931 9.43644C14.1438 9.73771 13.9811 10.2645 13.9811 10.2645"
                          fill="#28D2CF"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_583_370">
                          <rect
                            width="14"
                            height="12"
                            fill="white"
                            transform="translate(0 0.712891)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="phone-number"> 1300 123 456 </div>
                  </div>
                </div>
                <div className="account-links">
                  <div className="top-links">
                    <div className="padded-hover-button2">
                      <div className="header-links3">
                        <div className="login-and-my-account">
                          {" "}
                           Login | My account{" "}
                        </div>
                        <div className="icon">
                          <svg
                            className="circle"
                            width="32"
                            height="33"
                            viewBox="0 0 32 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>Person Icon Outline</title>
                            <rect
                              y="0.712891"
                              width="32"
                              height="32"
                              rx="16"
                              fill="#0F1533"
                            />
                            <path
                              d="M21.3248 20.0404L21.325 20.0405C22.3441 21.0591 22.9163 22.4409 22.9163 23.882V25.3596H9.08398V23.882C9.08398 22.4409 9.65626 21.0591 10.6753 20.0405L10.6755 20.0404C11.6941 19.0213 13.0758 18.4491 14.5169 18.4491H17.4834C18.9245 18.4491 20.3062 19.0213 21.3248 20.0404ZM19.9499 12.0161C19.9499 14.1977 18.1817 15.9658 16.0002 15.9658C13.8186 15.9658 12.0505 14.1977 12.0505 12.0161C12.0505 9.83453 13.8186 8.06641 16.0002 8.06641C18.1817 8.06641 19.9499 9.83453 19.9499 12.0161Z"
                              stroke="white"
                            />
                          </svg>
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
        </div>
      </div>
      <div className="right-pad" />
    </div>
  );
};

export default Header;

const HeaderWrap = styled.div``;
