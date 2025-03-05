import React, { ReactNode } from 'react';

import { styled } from 'styled-components';

import { CN } from '#components/Helpers/ReactHelpers';
import { Colors } from '#components/Layout/FlippedV2/theme';

import { Link } from '../../components/Link';
import './TestTemplate.scss';

function Content(props: {
  children?: ReactNode | ReactNode[];
  className?: string;
}) {
  const { children, className } = props;
  return (
    <div id="page-content" className={className}>
      {children}
    </div>
  );
}

export default function TestContents(props: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { children, className } = props;
  return (
    <div id="test-content">
      <Sidebar id="sidebar" className={CN('invert', className)}>
        <Link href="/">Welcome</Link>
        <Link href="/todo">Todo</Link>
        <Link href="/star-wars">Data Fetching</Link>
      </Sidebar>
      <Content className={CN(className)}>{children}</Content>
    </div>
  );
}

const Sidebar = styled.div`
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  border-right: 2px solid #eee;

  color: white;
  background-color: ${(props) => Colors.Flipped_Line};
`;
