import React from 'react';

import '#components/Flipbox/Flipbox.scss';
import { FlipBox } from '#components/Flipbox/FlipboxV2';
import Footer from '#V2/Footer/Footer';
import Header from '#V2/Header/Header';

import './global.scss';
import TestContents from './testTemplate/TestTemplate';

export default function LayoutDefault(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="root flipbox y x-fill y-fill NW">
      <Header />
      <FlipBox name="content-box" className="y x-fill y-fill NW">
        <TestContents className="pre-footer">{children}</TestContents>
      </FlipBox>
      <Footer />
    </div>
  );
}
