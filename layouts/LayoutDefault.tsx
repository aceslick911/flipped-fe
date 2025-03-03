import './global.scss';

import React from 'react';

import Header from '#V2/Header/Header';
import TestContents from './testTemplate/TestTemplate';
import { styled } from 'styled-components';
import Footer from '#V2/Footer/Footer';

export default function LayoutDefault(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <>
      <Header />
      <PageContents>
        <TestContents>{children}</TestContents>
      </PageContents>
      <Footer />
    </>
  );
}

const PageContents = styled.div`
  display: flex;
  flex-grow: 1;
  `;
