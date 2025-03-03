import React from 'react'

import '#components/Flipbox/Flipbox.scss'
import Footer from '#V2/Footer/Footer'
import Header from '#V2/Header/Header'

import './global.scss'
import TestContents from './testTemplate/TestTemplate'

export default function LayoutDefault(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className="root flipbox y x-fill y-fill NW">
      <Header />
      <div className="flipbox y x-fill y-fill N">
        <TestContents>{children}</TestContents>
        </div>
      <Footer />
    </div>
  );
}