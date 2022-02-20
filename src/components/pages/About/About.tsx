import React from 'react';

import { Layout } from '@/components/layouts/Layout';

import { AboutHeading } from '@/components/pages/About/AboutHeading';

export interface Props {}

export const About = (props: Props): JSX.Element => {
  return (
    <Layout>
      <AboutHeading />
    </Layout>
  );
};
