import React from 'react';

import '#components/Flipbox/Flipbox.scss';
import styled, { FlipBox } from '#components/Flipbox/FlipboxV2';
import '#components/Layout/FlippedV2/fonts.css';
import Footer from '#components/Layout/FlippedV2/Footer/Footer';
import Header from '#components/Layout/FlippedV2/Header/Header';

import './global.scss';
import TestContents from './testTemplate/TestTemplate';

function SVG1() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg
      className="LineSVG-sc-pwzz8g-8 goDAbo"
      width="10"
      height="9"
      viewBox="0.4 0 10 9"
      preserveAspectRatio="none"
      fill="var(--color-1, #28D2CF)"
    >
      <path d="M 0.4 9 L 0.4 0.1 L 265.5 0.1 V 9 L 0.4 9 Z" fill="var(--color-1, #28D2CF)" />
    </svg>
  );
}

function SVG2() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg className="EdgeSVG-sc-pwzz8g-5 dsEVRE" width="6" height="9" viewBox="0 0 3 9" fill="var(--color-1, #28D2CF)">
      <g id="Edge">
        <path
          id="Vector"
          d="M 5.4 0.1 L 5.4 9 L 4.4 9 C 2 9 0 7 0 4.6 C 0 2.1 2 0.1 4.4 0.1 L 5.4 0.1 Z"
          fill="var(--color-1, #28D2CF)"
        />
      </g>
    </svg>
  );
}

function SVG3() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg
      className="BulbHaloSVG-sc-pwzz8g-13 hdVmvV"
      width="143"
      height="80"
      viewBox="0 0 143 80"
      fill="var(--color-1, #28D2CF)"
    >
      <g id="BulbHalo">
        <path
          id="Vector"
          d="M 20.4 79.8 H 4.9 C 2.4 79.8 0.4 77.8 0.4 75.4 C 0.4 72.9 2.4 70.9 4.9 70.9 H 20.4 C 22.8 70.9 24.8 72.9 24.8 75.4 C 24.8 77.8 22.8 79.8 20.4 79.8 Z"
          fill="var(--color-1, #28D2CF)"
        />
        <path
          id="Vector_2"
          d="M 138.1 79.8 H 122.6 C 120.2 79.8 118.2 77.8 118.2 75.4 C 118.2 72.9 120.2 70.9 122.6 70.9 H 138.1 C 140.6 70.9 142.6 72.9 142.6 75.4 C 142.6 77.8 140.6 79.8 138.1 79.8 Z"
          fill="var(--color-1, #28D2CF)"
        />
        <path
          id="Vector_3"
          d="M 71.5 24.9 C 69 24.9 67.1 22.9 67.1 20.4 V 4.9 C 67.1 2.5 69 0.5 71.5 0.5 C 73.9 0.5 75.9 2.5 75.9 4.9 V 20.4 C 75.9 22.9 73.9 24.9 71.5 24.9 Z"
          fill="var(--color-1, #28D2CF)"
        />
        <path
          id="Vector_4"
          d="M 32.7 42.3 C 31.6 42.3 30.5 41.9 29.6 41 L 18.5 29.9 C 16.8 28.1 16.8 25.3 18.5 23.6 C 20.2 21.9 23 21.9 24.8 23.6 L 35.9 34.7 C 37.6 36.5 37.6 39.3 35.9 41 C 35 41.9 33.9 42.3 32.8 42.3 H 32.7 Z"
          fill="var(--color-1, #28D2CF)"
        />
        <path
          id="Vector_5"
          d="M 111.5 42.3 C 110.4 42.3 109.3 41.9 108.4 41 C 106.7 39.3 106.7 36.5 108.4 34.7 L 119.5 23.6 C 121.3 21.9 124 21.9 125.8 23.6 C 127.5 25.3 127.5 28.1 125.8 29.9 L 114.7 41 C 113.8 41.9 112.7 42.3 111.5 42.3 H 111.5 Z"
          fill="var(--color-1, #28D2CF)"
        />
      </g>
    </svg>
  );
}
function SVG4() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg
      className="House2SVG-sc-pwzz8g-15 llHEeW"
      width="247"
      height="239"
      viewBox="0.5 0 247 239"
      fill="var(--color-1, #28D2CF)"
    >
      <path
        d="M -0.5 239 L -0.5 230.1 H 33.5 V 109.4 H 4.1 C 2.2 109.4 0.6 108.2 -0.1 106.4 C -0.7 104.7 -0.2 102.7 1.3 101.5 L 119.8 3 C 121.4 1.6 123.8 1.6 125.4 3 L 243.9 101.5 C 245.3 102.7 245.9 104.7 245.2 106.4 C 244.6 108.2 242.9 109.4 241.1 109.4 H 211.7 V 216 C 211.7 218.4 209.7 220.4 207.2 220.4 C 204.8 220.4 202.8 218.4 202.8 216 V 104.9 C 202.8 102.5 204.8 100.5 207.2 100.5 H 228.8 L 122.6 12.2 L 16.3 100.5 H 37.9 C 40.4 100.5 42.4 102.5 42.4 104.9 L 42 234 C 42 234 42 239 37.8 239 C 33.5 239 -0.5 239 -0.5 239 Z"
        fill="var(--color-1, #28D2CF)"
      />
    </svg>
  );
}
function SVG5() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg
      className="BulbSVG-sc-pwzz8g-0 iNBCEW"
      width="247"
      height="132"
      viewBox="0 0 246.5 130"
      fill="var(--color-1, #28D2CF)"
    >
      <path
        d="M 246.5 131 L 108.6 131 C 106.1 131 104.1 129 104.1 126.6 V 112.7 C 104.1 110.2 106.1 108.2 108.6 108.2 H 135.7 V 103.1 H 109.2 C 107.9 103.1 106.7 102.6 105.9 101.6 C 105 100.6 104.6 99.4 104.8 98.1 C 104.8 97.9 106.9 80 97.6 70.8 C 89.3 63.2 84.5 52.4 84.5 41.1 C 84.5 19 102.5 0.9 124.7 0.9 C 146.9 0.9 164.9 19 164.9 41.1 C 164.9 47.6 163.3 54.1 160.3 59.8 C 160.1 60.6 159.8 61.3 159.2 61.9 L 159 62.1 C 157.2 65.1 155 67.8 152.4 70.2 C 148.2 74.8 147.3 78.7 146.4 82.8 C 146.2 83.5 146.1 84.2 145.9 84.9 C 145.3 87.3 142.9 88.7 140.5 88.1 C 138.2 87.5 136.7 85.1 137.3 82.8 C 137.5 82.1 137.6 81.5 137.7 80.9 C 138.8 76.2 140.1 70.4 146 64.1 C 146.1 64 146.2 64 146.2 63.9 C 148.3 61.9 150.2 59.6 151.6 57.2 C 151.7 57.1 151.8 57 151.8 56.9 C 151.9 56.8 151.9 56.7 152 56.6 C 154.7 51.9 156.1 46.5 156.1 41.1 C 156.1 23.8 142 9.8 124.7 9.8 C 107.4 9.8 93.4 23.8 93.4 41.1 C 93.4 49.9 97.1 58.3 103.6 64.3 C 103.6 64.3 103.7 64.3 103.7 64.4 C 112.7 73.2 114 86.9 113.9 94.2 H 140.1 C 142.5 94.2 144.5 96.2 144.5 98.7 V 112.6 C 144.5 115.1 142.5 117.1 140.1 117.1 H 113 V 122.1 L 246.5 122.1 V 131 Z"
        fill="var(--color-1, #28D2CF)"
      />
    </svg>
  );
}
function SVG6() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg
      className="LineSVG-sc-pwzz8g-8 goDAbo"
      width="10"
      height="9"
      viewBox="0.4 0 10 9"
      preserveAspectRatio="none"
      fill="var(--color-1, #28D2CF)"
    >
      <path d="M 0.4 9 L 0.4 0.1 L 265.5 0.1 V 9 L 0.4 9 Z" fill="var(--color-1, #28D2CF)" />
    </svg>
  );
}
function SVG7() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg
      className="EdgeSVGR-sc-pwzz8g-6 kVMqnx"
      width="6"
      height="9"
      viewBox="1 0 3.5 9"
      fill="var(--color-1, #28D2CF)"
    >
      <g transform="matrix(-1,0,0,-1,5.4,9.1)" id="Edge">
        <path
          id="Vector"
          d="M 5.4 0.1 L 5.4 9 L 4.4 9 C 2 9 0 7 0 4.6 C 0 2.1 2 0.1 4.4 0.1 L 5.4 0.1 Z"
          fill="var(--color-1, #28D2CF)"
        />
      </g>
    </svg>
  );
}
function SVG8() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg className="OutlineAustralia-sc-9glh00-10 gDJFbp" width="87" height="78" viewBox="0 0 87 78" fill="none">
      <g filter="url(#filter0_d_32_7972)">
        <path
          d="M62.4759 66.9976C61.0171 66.9976 59.3007 66.2943 57.4838 63.9573C56.5404 62.7429 55.8153 61.9217 55.2345 61.2621C53.9155 59.7637 53.1861 58.9381 52.8148 56.7191C52.7493 56.3215 52.6532 56.1031 52.5965 56.0114C52.4611 56.0245 52.1466 56.1162 51.6749 56.4308C49.3295 57.9946 47.6218 56.4919 44.796 54.002C42.4375 51.9271 38.0481 48.0568 25.928 56.4176C25.9106 56.4308 25.8887 56.4439 25.8713 56.457C17.1885 61.8824 13.594 64.132 11.087 62.8871C9.3793 62.0396 9.18712 59.9254 9.12598 59.2308C8.89886 56.7365 8.62807 56.2648 7.4794 54.2597C6.65393 52.8226 5.40917 50.6472 3.57916 46.6196C1.16389 41.3034 0.0588907 37.6996 0.00211222 34.9345C-0.0634014 31.667 1.39537 29.3343 4.33911 27.9976C5.90271 27.29 7.53618 26.8881 9.11724 26.4993C12.6157 25.6431 15.3803 24.966 16.6382 21.4496C18.4333 16.4261 21.1062 13.3071 22.5432 11.6297C22.9057 11.2103 23.2158 10.8434 23.3599 10.6293L23.4516 10.4939C23.9452 9.75132 24.5566 8.82961 25.7446 8.58936C26.7666 8.38405 27.8629 8.73788 29.4134 9.7688C30.728 10.6468 31.2696 10.5507 31.405 10.5027C31.5273 10.459 31.9553 10.2056 32.3353 8.8733C33.1826 5.90724 33.8508 3.56147 37.9563 2.97612C40.8826 2.55676 45.0143 2.70529 45.7743 2.74023C46.3814 2.68781 48.1284 2.67034 49.0762 4.0114C49.7968 5.02921 49.7488 6.37901 48.9321 8.01711L48.7748 8.32726C47.9799 9.90858 47.1632 11.5423 47.5432 12.4116C47.8271 13.0581 48.9146 13.6784 50.6048 14.1633C52.4043 14.6787 57.1868 16.0416 58.8246 14.9277C59.0998 14.7443 59.471 14.373 59.5802 13.294C60.0213 8.89951 60.9953 4.14682 61.0346 3.94588C61.7771 0.735191 63.0917 0.0318992 64.0657 0.0013212C66.0966 -0.0685713 66.9177 2.65287 67.2671 3.81483C67.8262 5.67135 68.2411 7.68513 68.6386 9.62901C69.4946 13.8007 70.3768 18.1166 72.5475 19.3179C76.8365 21.7029 85.4057 32.1256 86.3796 35.5242C87.3798 39.0275 86.895 47.3491 81.3264 54.7708C78.8325 58.0994 78.7713 59.9996 78.7276 61.2577C78.6752 62.9176 78.4044 64.3373 75.631 64.9533C75.0676 65.0799 74.5741 65.1935 74.1373 65.2984C71.4644 65.9274 70.2415 66.2157 67.8873 64.7654C67.7607 64.6868 67.6558 64.6256 67.5729 64.582C67.3064 64.879 66.909 65.2678 66.3019 65.6172C66.1927 65.6784 66.0835 65.7439 65.97 65.8138C65.1838 66.2856 63.9652 67.0107 62.4846 67.0107L62.4759 66.9976ZM52.6401 52.9492C53.0594 52.9492 53.4569 53.0279 53.8325 53.1939C54.5662 53.5127 55.514 54.2947 55.8328 56.2167C56.0599 57.5709 56.3133 57.8592 57.5274 59.2396C58.104 59.8948 58.8945 60.7947 59.899 62.0789C61.9081 64.6606 62.8996 64.0709 64.3933 63.1754C64.5199 63.1011 64.6466 63.0269 64.7645 62.957C65.0702 62.7822 65.2231 62.5988 65.4196 62.3716C66.695 60.8908 67.9179 61.1878 69.4771 62.1532C70.7568 62.9395 70.9053 62.9045 73.421 62.3148C73.8709 62.21 74.3732 62.092 74.9497 61.961C75.3253 61.878 75.5262 61.8037 75.6223 61.7601C75.6398 61.6115 75.6485 61.3625 75.6572 61.1529C75.7053 59.6109 75.7926 57.0292 78.863 52.9274C83.8989 46.2133 84.0998 38.7349 83.4184 36.3541C82.6978 33.838 74.8449 24.0924 71.0451 21.9825C67.6471 20.0954 66.6688 15.3034 65.6293 10.2318C65.2449 8.35347 64.8475 6.41396 64.3278 4.68848C64.2622 4.47444 64.2011 4.28224 64.14 4.11187C64.0919 4.2735 64.0439 4.43949 64.0089 4.59238C64.0089 4.60112 63.035 9.35381 62.6113 13.5867C62.4366 15.3252 61.7378 16.6226 60.5323 17.4439C58.187 19.0339 54.5269 18.4529 49.7532 17.09C47.0234 16.3081 45.4293 15.2117 44.7348 13.6304C43.7739 11.4462 44.9226 9.15724 46.032 6.94689L46.1848 6.64111C46.3901 6.22612 46.4687 5.95965 46.4949 5.80676C46.3464 5.78055 46.1368 5.76745 45.9796 5.78492C45.901 5.79366 45.8092 5.79803 45.7306 5.79366C45.6869 5.79366 41.2495 5.58835 38.3756 5.99897C36.3141 6.29164 36.1263 6.68916 35.2615 9.71201C34.7069 11.6559 33.7591 12.8877 32.4445 13.3726C31.0774 13.875 29.5269 13.5299 27.7013 12.3111C26.95 11.8131 26.557 11.6559 26.3866 11.6122C26.2731 11.7476 26.1115 11.9922 25.9848 12.1801L25.8887 12.3242C25.6441 12.6912 25.2947 13.1018 24.8492 13.6172C23.4516 15.251 21.1062 17.9812 19.5033 22.4718C17.6952 27.539 13.5154 28.5611 9.83352 29.4654C8.32234 29.8367 6.89851 30.1861 5.59261 30.7759C3.74512 31.6146 3.007 32.8027 3.05068 34.8689C3.09872 37.1666 4.14694 40.4996 6.35257 45.3528C8.12143 49.2493 9.32688 51.3461 10.1218 52.7352C11.3272 54.8363 11.8732 55.793 12.1614 58.9513C12.2532 59.9385 12.4584 60.1569 12.4628 60.1613C13.5416 60.55 18.7215 57.3131 24.2159 53.8797C38.2795 44.1908 44.2587 49.459 46.8094 51.7043C47.8227 52.5954 49.3513 53.9408 49.7925 53.9889C49.7925 53.9889 49.8536 53.9627 49.9759 53.884C50.9062 53.2638 51.8059 52.9492 52.6314 52.9492H52.6401Z"
          fill="var(--color-1, white)"
        />
      </g>
      <g filter="url(#filter1_d_32_7972)">
        <path
          d="M68.9532 77.8703C67.573 77.8703 66.219 77.1844 65.2363 75.9832C64.175 74.6901 63.6946 73.0346 63.913 71.5013C63.8169 70.5927 63.8125 68.8891 64.9568 68.0678C65.363 67.7752 66.2278 67.3733 67.4507 67.9848C68.4771 68.4959 68.5382 68.4785 70.1673 67.9237L70.6914 67.7446C72.1808 67.2466 73.6308 67.6179 74.5655 68.7406C75.5919 69.9768 75.7098 71.8508 74.8494 73.4015C74.1113 74.7382 72.3817 77.8703 68.9488 77.8703H68.9532ZM66.9528 71.0994C66.9572 71.178 66.9659 71.2567 66.9746 71.3222C67.0008 71.4926 66.9921 71.6673 66.9615 71.8377C66.8218 72.5322 67.0751 73.4015 67.6036 74.048C68.001 74.5373 68.4946 74.8168 68.9575 74.8168C70.1149 74.8168 71.0452 73.9781 72.1808 71.9294C72.4909 71.3659 72.3773 70.8897 72.2245 70.7019C72.1808 70.6495 72.0716 70.5141 71.6698 70.6495L71.1631 70.8199C69.6127 71.3484 68.5863 71.6979 66.9572 71.0994H66.9528Z"
          fill="var(--color-1, white)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_32_7972"
          x="-10"
          y="-10"
          width="106.795"
          height="87.0107"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7972" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7972" result="shape" />
        </filter>
        <filter
          id="filter1_d_32_7972"
          x="53.8613"
          y="57.5278"
          width="31.5618"
          height="30.3425"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7972" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7972" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}
function SVG9() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg className="OutlineClock-sc-9glh00-11 ewVgKU" width="84" height="77" viewBox="0 0 84 77" fill="none">
      <g filter="url(#filter0_d_32_7972)">
        <path
          d="M51.4571 76.8227C50.3509 76.8227 49.2403 76.766 48.1471 76.657C47.3109 76.5698 46.7012 75.8241 46.784 74.9825C46.8667 74.141 47.6158 73.5349 48.4564 73.6177C49.4494 73.718 50.4554 73.7703 51.4615 73.7703C67.6369 73.7703 80.7941 60.5974 80.7941 44.4026C80.7941 28.2078 67.6369 15.0349 51.4615 15.0349C38.4785 15.0349 26.8936 23.7427 23.2831 36.2136C23.0479 37.0247 22.2073 37.4913 21.3929 37.2558C20.5828 37.0203 20.1168 36.1744 20.352 35.3677C24.337 21.6017 37.1284 11.9825 51.4571 11.9825C69.3136 11.9825 83.8384 26.5247 83.8384 44.4026C83.8384 62.2805 69.3136 76.8227 51.4571 76.8227Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M38.4307 48.7369H1.52434C0.683773 48.7369 0 48.0523 0 47.2108C0 46.3692 0.683773 45.6846 1.52434 45.6846H38.4263C39.2669 45.6846 39.9507 46.3692 39.9507 47.2108C39.9507 48.0523 39.2669 48.7369 38.4263 48.7369H38.4307Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M38.4306 59.9738H12.7477C11.9072 59.9738 11.2234 59.2892 11.2234 58.4477C11.2234 57.6061 11.9072 56.9215 12.7477 56.9215H38.4306C39.2712 56.9215 39.9549 57.6061 39.9549 58.4477C39.9549 59.2892 39.2712 59.9738 38.4306 59.9738Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M38.4307 71.2064H23.967C23.1264 71.2064 22.4426 70.5218 22.4426 69.6802C22.4426 68.8387 23.1264 68.1541 23.967 68.1541H38.4307C39.2713 68.1541 39.9551 68.8387 39.9551 69.6802C39.9551 70.5218 39.2713 71.2064 38.4307 71.2064Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M28.8448 24.9113C28.4528 24.9113 28.0652 24.7631 27.769 24.4622L20.4871 17.1715C19.8904 16.5741 19.8904 15.6105 20.4871 15.0131C21.0837 14.4157 22.0462 14.4157 22.6429 15.0131L29.9249 22.3038C30.5215 22.9012 30.5215 23.8648 29.9249 24.4622C29.6287 24.7587 29.2367 24.9113 28.8491 24.9113H28.8448Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M51.2568 15.0349C50.4162 15.0349 49.7324 14.3503 49.7324 13.5087V2.56394C49.7324 1.72237 50.4162 1.03778 51.2568 1.03778C52.0973 1.03778 52.7811 1.72237 52.7811 2.56394V13.5087C52.7811 14.3503 52.0973 15.0349 51.2568 15.0349Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M58.8917 3.05233H43.6178C42.7773 3.05233 42.0935 2.36773 42.0935 1.52616C42.0935 0.684593 42.7773 0 43.6178 0H58.8917C59.7322 0 60.416 0.684593 60.416 1.52616C60.416 2.36773 59.7322 3.05233 58.8917 3.05233Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M50.2901 45.9288C49.8982 45.9288 49.5105 45.7805 49.21 45.4796C48.6134 44.8823 48.6177 43.9186 49.21 43.3212L64.78 27.7805C65.3767 27.1875 66.3392 27.1875 66.9359 27.7805C67.5325 28.3779 67.5282 29.3416 66.9359 29.939L51.3659 45.4796C51.0697 45.7762 50.6777 45.9244 50.2901 45.9244V45.9288Z"
          fill="var(--color-1, white)"
        />
      </g>
      <defs>
        <filter id="filter0_d_32_7972" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
    </svg>
  );
}
function SVG10() {
  // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
  return (
    <svg className="OutlineRibbon-sc-9glh00-12 fhDXRd" width="75" height="78" viewBox="0 0 75 78" fill="none">
      <g filter="url(#filter0_d_32_7850)">
        <path
          d="M36.8953 6.0841L37.199 6.09281L37.3795 5.85747L37.4587 6.14511L37.7448 6.24099L37.4939 6.40661V6.70297L37.2562 6.51992L36.9657 6.60709L37.0713 6.32816L36.8953 6.0841Z"
          fill="var(--color-1, white)"
        />
      </g>
      <g filter="url(#filter1_d_32_7850)">
        <path
          d="M37.322 6.03616L37.3705 6.26279L37.5069 6.07103L37.4541 6.30202L37.661 6.18434L37.5201 6.37175L37.7534 6.3456L37.5465 6.45891L37.771 6.533L37.5377 6.55479L37.7138 6.70733L37.4893 6.63324L37.5905 6.8468L37.4145 6.6899V6.92524L37.322 6.70733L37.2252 6.92524L37.2296 6.6899L37.0535 6.8468L37.1504 6.63324L36.9259 6.70733L37.1063 6.55479L36.8687 6.533L37.0931 6.45891L36.8907 6.3456L37.124 6.37175L36.9831 6.18434L37.1856 6.30202L37.1372 6.07103L37.2736 6.26279L37.322 6.03616Z"
          fill="var(--color-1, white)"
        />
      </g>
      <g filter="url(#filter2_d_32_7850)">
        <path
          d="M37.3221 61.3727C35.0156 61.3727 33.3033 59.5684 31.7891 57.9776C30.8603 57.0014 29.8964 55.9859 29.0996 55.7331C28.2325 55.4542 26.8063 55.7157 25.4242 55.9728C23.2981 56.3651 20.8904 56.8053 19.0944 55.5152C17.2853 54.2078 16.9684 51.7933 16.6867 49.6578C16.5062 48.2893 16.3213 46.8772 15.7975 46.1624C15.2869 45.4695 13.9972 44.8637 12.7515 44.2797C10.7707 43.3557 8.53021 42.3054 7.83033 40.1699C7.15686 38.1128 8.26611 36.0949 9.33574 34.1424C10.018 32.9003 10.7223 31.619 10.7223 30.6863C10.7223 29.7537 10.018 28.468 9.33574 27.2303C8.26171 25.2778 7.15246 23.2599 7.83033 21.2028C8.53021 19.0673 10.7751 18.017 12.7559 17.0886C14.0016 16.5046 15.2913 15.9032 15.8019 15.2059C16.3257 14.4955 16.5106 13.0791 16.6911 11.7149C16.9728 9.57941 17.2897 7.16058 19.0988 5.85747C20.8948 4.56307 23.3025 5.00762 25.4242 5.39986C26.8063 5.65263 28.2325 5.91413 29.0996 5.63956C29.8964 5.38242 30.8603 4.37131 31.7891 3.39507C33.3033 1.80431 35.0156 0 37.3221 0C39.6287 0 41.3409 1.80431 42.8551 3.39507C43.7839 4.37567 44.7479 5.38678 45.5446 5.63956C46.4118 5.91849 47.8379 5.65699 49.2201 5.39986C51.3461 5.00762 53.7539 4.56743 55.5498 5.85747C57.3589 7.16494 57.6759 9.58376 57.9576 11.7149C58.1381 13.0834 58.3229 14.4955 58.8467 15.2059C59.3573 15.8988 60.6471 16.5046 61.8928 17.0843C63.8736 18.0082 66.114 19.0586 66.8183 21.1985C67.4918 23.2556 66.3826 25.2734 65.3129 27.2259C64.6307 28.468 63.9264 29.7493 63.9264 30.682C63.9264 31.6147 64.6307 32.9003 65.3129 34.1381C66.387 36.0906 67.4962 38.1084 66.8183 40.1655C66.1185 42.3011 63.8736 43.3514 61.8928 44.2797C60.6471 44.8637 59.3573 45.4651 58.8467 46.1581C58.3229 46.8685 58.1381 48.2849 57.9576 49.649C57.6759 51.7846 57.3589 54.2034 55.5498 55.5065C53.7539 56.8009 51.3461 56.3564 49.2245 55.9641C47.8423 55.7113 46.4162 55.4455 45.549 55.7244C44.7523 55.9816 43.7883 56.9927 42.8595 57.9689C41.3453 59.5597 39.6331 61.364 37.3265 61.364L37.3221 61.3727ZM28.1665 52.5603C28.8135 52.5603 29.4474 52.6344 30.0504 52.8306C31.5998 53.3274 32.8367 54.6305 34.0296 55.8857C35.1653 57.0842 36.3449 58.3176 37.3177 58.3176C38.2905 58.3176 39.4702 57.0798 40.6058 55.8857C41.8031 54.6261 43.04 53.3274 44.585 52.8306C46.1961 52.3119 48.014 52.6475 49.7747 52.97C51.2889 53.2489 53.0056 53.5627 53.7275 53.0441C54.467 52.5124 54.6915 50.7822 54.894 49.2612C55.1229 47.5135 55.3605 45.7048 56.3465 44.3669C57.3193 43.042 58.97 42.2705 60.5678 41.5253C61.9852 40.8628 63.5874 40.1132 63.878 39.2285C64.1421 38.4179 63.3189 36.923 62.597 35.5981C61.7299 34.0248 60.8363 32.3948 60.8363 30.682C60.8363 28.9692 61.7299 27.3436 62.597 25.7659C63.3233 24.4454 64.1465 22.9461 63.878 22.1355C63.5874 21.2508 61.9852 20.5011 60.5678 19.8387C58.9744 19.0934 57.3237 18.322 56.3465 16.9971C55.3605 15.6548 55.1229 13.8505 54.894 12.1028C54.6959 10.5774 54.467 8.85158 53.7275 8.31987C53.0056 7.80124 51.2889 8.11504 49.7747 8.39396C48.014 8.71647 46.1961 9.05206 44.585 8.53343C43.0356 8.03659 41.7987 6.73348 40.6058 5.4783C39.4702 4.27979 38.2905 3.04641 37.3177 3.04641C36.3449 3.04641 35.1653 4.28415 34.0296 5.4783C32.8323 6.73784 31.5954 8.03659 30.0504 8.53343C28.4394 9.05206 26.6215 8.71647 24.8607 8.39396C23.3465 8.11504 21.6299 7.80124 20.908 8.31987C20.1685 8.85158 19.944 10.5818 19.7415 12.1028C19.5126 13.8505 19.2749 15.6591 18.2889 16.9971C17.3161 18.322 15.6655 19.0934 14.0676 19.8387C12.6503 20.5011 11.048 21.2508 10.7575 22.1355C10.4934 22.9461 11.3165 24.441 12.0384 25.7659C12.9056 27.3392 13.7991 28.9692 13.7991 30.682C13.7991 32.3948 12.9056 34.0204 12.0384 35.5981C11.3121 36.9186 10.489 38.4179 10.7575 39.2285C11.048 40.1132 12.6503 40.8628 14.0676 41.5253C15.6655 42.2705 17.3161 43.0463 18.2889 44.3712C19.2749 45.7136 19.5126 47.5179 19.7415 49.2655C19.9396 50.7909 20.1685 52.5168 20.908 53.0485C21.6299 53.5671 23.3465 53.2533 24.8607 52.9744C25.9612 52.7739 27.0836 52.5647 28.1665 52.5647V52.5603Z"
          fill="var(--color-1, white)"
        />
      </g>
      <g filter="url(#filter3_d_32_7850)">
        <path
          d="M16.1364 77.8687C16.0615 77.8687 15.9867 77.8644 15.9075 77.8513C15.3132 77.7641 14.8246 77.3414 14.6574 76.7748L11.7302 66.96L1.75142 68.3242C1.14838 68.407 0.558543 68.1324 0.237214 67.6268C-0.0841144 67.1213 -0.0797127 66.4719 0.254821 65.9751L10.6034 50.438C11.0699 49.7363 12.0295 49.5402 12.7382 50.0021C13.4469 50.4641 13.645 51.4142 13.1784 52.1159L4.7006 64.8419L12.6238 63.7567C13.3809 63.6521 14.0984 64.1141 14.314 64.8376L16.6778 72.7652L25.204 59.9694C25.675 59.2634 26.6302 59.0716 27.3389 59.5336C28.0475 59.9956 28.2456 60.9457 27.779 61.6473L17.4305 77.1845C17.1444 77.6159 16.6558 77.8687 16.1452 77.8687H16.1364Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M58.5076 77.8686C57.997 77.8686 57.5084 77.6159 57.2223 77.1844L46.8738 61.6473C46.4072 60.9456 46.6008 59.9999 47.3139 59.5335C48.0226 59.0716 48.9778 59.2633 49.4488 59.9694L57.975 72.7651L60.3387 64.8375C60.5544 64.114 61.2719 63.6564 62.029 63.7567L69.9522 64.8419L61.4744 52.1158C61.0078 51.4141 61.2015 50.4684 61.9146 50.0021C62.6233 49.5401 63.5784 49.7319 64.0494 50.4379L74.398 65.975C74.7325 66.4762 74.7369 67.1212 74.4156 67.6268C74.0942 68.1323 73.5044 68.4069 72.9014 68.3241L62.9226 66.96L59.9954 76.7747C59.8237 77.3456 59.3395 77.764 58.7453 77.8512C58.6705 77.8643 58.5956 77.8686 58.5164 77.8686H58.5076Z"
          fill="var(--color-1, white)"
        />
      </g>
      <g filter="url(#filter4_d_32_7850)">
        <path
          d="M33.3208 43.4909C32.1015 42.9766 30.9351 42.1398 29.8258 40.9805C29.3681 40.5273 29.1392 40.013 29.1392 39.4333C29.1392 38.9801 29.2932 38.5704 29.5969 38.2087C29.9007 37.8426 30.2616 37.6595 30.6754 37.6595C31.0451 37.6595 31.362 37.799 31.6218 38.0736C32.4933 39.0062 33.3913 39.6905 34.3156 40.1307C35.24 40.5708 36.292 40.7931 37.4673 40.7931C38.8406 40.7931 39.9983 40.427 40.9447 39.6992C41.8911 38.9714 42.3665 38.0518 42.3665 36.9448C42.3444 35.6373 41.8691 34.6218 40.9447 33.9071C40.0203 33.1923 38.6073 32.5909 36.7146 32.1159C34.4697 31.5885 32.7442 30.7212 31.5381 29.514C30.3276 28.3068 29.7246 26.6332 29.7246 24.4933C29.7246 23.0071 30.0635 21.7084 30.737 20.5883C31.4105 19.4682 32.348 18.6053 33.5453 18.0039C34.7426 17.3981 36.0939 17.0974 37.5949 17.0974C38.9463 17.0974 40.2184 17.3501 41.4157 17.8513C42.6129 18.3569 43.5813 19.0193 44.3208 19.8518C44.8226 20.3573 45.0735 20.8977 45.0735 21.473C45.0735 21.9263 44.9283 22.3273 44.6334 22.6803C44.3384 23.0333 43.9863 23.2076 43.5725 23.2076C43.2688 23.2076 43.0179 23.1074 42.8198 22.9069C42.252 22.2532 41.4685 21.6997 40.4693 21.2464C39.4657 20.7932 38.5105 20.5665 37.5949 20.5665C36.1336 20.5665 34.9759 20.9108 34.1176 21.6038C33.2592 22.2967 32.8278 23.2076 32.8278 24.3408C32.8278 25.5741 33.2592 26.5155 34.1176 27.1693C34.9759 27.823 36.2568 28.3765 37.9559 28.8297C39.655 29.2569 41.0415 29.7624 42.12 30.3377C43.1984 30.9173 44.0303 31.7236 44.6202 32.7522C45.21 33.7851 45.5005 35.1318 45.5005 36.7922C45.5005 38.2523 45.1484 39.5466 44.4397 40.6798C43.731 41.8129 42.767 42.6933 41.5477 43.3209C40.3284 43.9485 38.9903 44.2623 37.5289 44.2623C35.9399 44.2623 34.5357 44.0051 33.3164 43.4865L33.3208 43.4909Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M37.3221 19.7559C36.4726 19.7559 35.7815 19.0717 35.7815 18.2305V12.9963C35.7815 12.1551 36.4726 11.4709 37.3221 11.4709C38.1717 11.4709 38.8627 12.1551 38.8627 12.9963V18.2305C38.8627 19.0717 38.1717 19.7559 37.3221 19.7559Z"
          fill="var(--color-1, white)"
        />
        <path
          d="M37.3221 49.5357C36.4726 49.5357 35.7815 48.8515 35.7815 48.0103V42.7805C35.7815 41.9393 36.4726 41.2551 37.3221 41.2551C38.1717 41.2551 38.8627 41.9393 38.8627 42.7805V48.0103C38.8627 48.8515 38.1717 49.5357 37.3221 49.5357Z"
          fill="var(--color-1, white)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_32_7850"
          x="26.8953"
          y="-4.14253"
          width="20.8496"
          height="20.8455"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7850" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7850" result="shape" />
        </filter>
        <filter
          id="filter1_d_32_7850"
          x="26.8687"
          y="-3.96384"
          width="20.9023"
          height="20.8891"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7850" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7850" result="shape" />
        </filter>
        <filter
          id="filter2_d_32_7850"
          x="-2.3772"
          y="-10"
          width="79.4031"
          height="81.3727"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7850" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7850" result="shape" />
        </filter>
        <filter
          id="filter3_d_32_7850"
          x="-10"
          y="39.7507"
          width="94.6528"
          height="48.118"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7850" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7850" result="shape" />
        </filter>
        <filter
          id="filter4_d_32_7850"
          x="19.1392"
          y="1.47089"
          width="36.3613"
          height="58.0648"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.772549 0 0 0 0 1 0 0 0 0 0.984314 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_32_7850" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_32_7850" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

const Header1 = styled.div`
font-family: Poppins;
font-size: 50px;
font-style: normal;
font-weight: 500;
line-height: 75px;
text-align: start;
flex-wrap: wrap;
white-space-collapse: break-spaces;
`;

const Centerize = styled.div`

  box-sizing:  border-box;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 92px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;

`;

export default function LayoutDefault(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="root flipbox y x-fill y-fill NW">
      <Header />
      <FlipBox name="content-box" className="y x-fill y-fill NW">
        <Centerize className="Centerize-sc-13bo9a5-0 iYBVua centerize">
          <div className="Constrain-sc-13bo9a5-1 cccfat constrain">
            <Header1 className="BaseText-sc-1oe6xum-0 H1TextHeader-sc-1oe6xum-6 jJNzrn cFojGM cms-x x-fill y-hug">
              Flip the switch on energy
            </Header1>
            <div className="BCDS-sc-j3mohh-1 kAHqnh cms-x x-fill y-hug cms-wrap cms-a-N">
              <div className="BCDS-sc-j3mohh-1 cyRqzS cont-ContainerFlexHalfWrapFill cms-y x-fill y-hug cms-a-NW">
                <div className="BCDS-sc-j3mohh-1 dQQMqe cms-y x-fill y-fill cms-a-NW">
                  <h3 className="BaseText-sc-1oe6xum-0 H3HeaderText-sc-1oe6xum-10 VzFop ccNzLZ cms-x x-fill y-hug">
                    Find your plan today
                  </h3>
                  <div className="BCDS-sc-j3mohh-1 fbBpLt cont-inputTextPanel animate-click-wrapper cms-x x-fill y-fill cms-wrap cms-a-NS">
                    <div className="BCDS-sc-j3mohh-1 caBOVD cms-x x-fill y-fill cms-a-NW">
                      <div className="address-entry css-gn160d">
                        <span id="react-select-2-live-region" className="css-7pg0cj-a11yText" />
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          role="log"
                          className="css-7pg0cj-a11yText"
                        />
                        <div className=" css-97a2hd">
                          <div className=" css-1j8jh3e">
                            <div className=" css-x94ng9" id="react-select-2-placeholder">
                              Enter your address
                            </div>
                            <div className=" css-1769etp" data-value="">
                              <input
                                className=""
                                autoCapitalize="none"
                                autoComplete="new-text"
                                autoCorrect="off"
                                id="react-select-2-input"
                                spellCheck="false"
                                tabIndex={0}
                                type="text"
                                aria-autocomplete="list"
                                aria-expanded="false"
                                aria-haspopup="true"
                                // biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
                                role="combobox"
                                aria-describedby="react-select-2-placeholder"
                                value=""
                                // $style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"
                              />
                            </div>
                            <div className=" css-pori7h" />
                          </div>
                          {/* biome-ignore lint/correctness/noVoidElementsWithChildren: <explanation> */}
                        </div>
                      </div>
                      <div className="BCDS-sc-j3mohh-1 fzyTRP cms-x x-hug y-hug cms-a-NW">
                        <div className="BCDS-sc-j3mohh-1 arzFw animate-click-button cms-x x-hug y-hug cms-a-C">
                          <div className="BaseText-sc-1oe6xum-0 BoldText-sc-1oe6xum-4 eaTUAC eFdaxe text-button cms-x x-fill y-hug">
                            Get a quote
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="BCDS-sc-j3mohh-1 bxAmXn cms-y x-fill y-fill cms-a-W">
                    <p className="BaseText-sc-1oe6xum-0 PText-sc-1oe6xum-11 dCHRZw hXVIPE cms-x x-fill y-hug">
                      At Flipped Energy, we're doing things differently.
                      <br />
                      We're committed to putting our customers first.
                    </p>
                  </div>
                </div>
                <div className="BCDS-sc-j3mohh-1 duojPs cms-y x-fill y-fixed cms-a-E">
                  <div className="BCDS-sc-j3mohh-1 cLHaLE cms-x x-fixed y-fixed">
                    <div className="StretchableHouseGraphicV22-sc-pwzz8g-1 yGnvM">
                      <div className="LeftLineArea-sc-pwzz8g-2 bKsEZJ">
                        <div className="LeftStretch-sc-pwzz8g-4 jtCnmS">
                          <SVG2 />
                          <div className="LineSVGWrap-sc-pwzz8g-7 cZarEG">
                            <SVG1 />
                          </div>
                        </div>
                      </div>
                      <div className="House-sc-pwzz8g-9 PoMLx">
                        <div className="BulbHouse-sc-pwzz8g-10 jfiIXS">
                          <div className="BulbHaloPosition-sc-pwzz8g-11 fFDoiV">
                            <div className="HaloTopOffset-sc-pwzz8g-12 grqHtt" />

                            <SVG3 />
                          </div>
                          <div className="HouseAndBulb-sc-pwzz8g-14 lckYGW">
                            <SVG4 />

                            <div className="BulbPosition-sc-pwzz8g-16 dcgggp">
                              <SVG5 />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="RightLineArea-sc-pwzz8g-3 fPlvYd">
                        <div className="LeftStretch-sc-pwzz8g-4 jtCnmS">
                          <div className="LineSVGWrap-sc-pwzz8g-7 cZarEG">
                            <SVG6 />
                          </div>

                          <SVG7 />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="BCDS-sc-j3mohh-1 ZnoHB cms-y x-fill y-hug cms-a-C">
                <div className="BCDS-sc-j3mohh-1 czhQwt cms-x x-fill y-hug cms-a-C">
                  <div className="BCDS-sc-j3mohh-1 hSuMxQ cms-y x-fill y-fixed cms-a-N">
                    <div className="BCDS-sc-j3mohh-1 kkYwio cms-x x-fill y-fill cms-a-C">
                      <div className="BCDS-sc-j3mohh-1 dsItze cms-y x-fill y-fill cms-a-C">
                        <div className="BCDS-sc-j3mohh-1 cpdKZI cms-y x-hug y-hug cms-a-C">
                          <SVG8 />
                        </div>
                      </div>
                      <div className="BCDS-sc-j3mohh-1 dsItze cms-y x-fill y-fill cms-a-C">
                        <div className="BCDS-sc-j3mohh-1 cpdKZI cms-y x-hug y-hug cms-a-C">
                          <SVG9 />
                        </div>
                      </div>

                      <div className="BCDS-sc-j3mohh-1 dsItze cms-y x-fill y-fill cms-a-C">
                        <div className="BCDS-sc-j3mohh-1 cpdKZI cms-y x-hug y-hug cms-a-C">
                          <SVG10 />
                        </div>
                      </div>
                    </div>
                    <div className="BCDS-sc-j3mohh-1 kkYwio cms-x x-fill y-fill cms-a-C">
                      <div className="BCDS-sc-j3mohh-1 dsItze cms-x x-fill y-fill cms-a-C">
                        <div className="BCDS-sc-j3mohh-1 bthbZO cms-x x-fill y-fill cms-a-C">Australia Based</div>
                      </div>
                      <div className="BCDS-sc-j3mohh-1 dsItze cms-x x-fill y-fill cms-a-C">
                        <div className="BCDS-sc-j3mohh-1 bthbZO cms-x x-fill y-fill cms-a-C">
                          Switching is quick and easy
                        </div>
                      </div>
                      <div className="BCDS-sc-j3mohh-1 dsItze cms-x x-fill y-fill cms-a-C">
                        <div className="BCDS-sc-j3mohh-1 bthbZO cms-x x-fill y-fill cms-a-C">Great rates</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Centerize>
      </FlipBox>
      <Footer />
    </div>
  );
}
