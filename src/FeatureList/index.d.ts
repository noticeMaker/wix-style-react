import * as React from 'react';

export interface FeatureListProps {
  dataHook?: string;
  className?: string;
  features?: FeatureType[];
}

export default class FeatureList extends React.PureComponent<FeatureListProps>{}

export type FeatureType = {
  image: React.ReactNode;
  title: string;
  text: string;
};
