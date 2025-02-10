import React from 'react';
import Layout from '@theme-original/Layout';
import VersionBanner from '../../components/VersionBanner';

export default function LayoutWrapper(props) {
  return (
    <>
      <VersionBanner />
      <Layout {...props} />
    </>
  );
}

