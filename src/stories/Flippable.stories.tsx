import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Flippable, FlipAxis, FlippableProps } from './Flippable';
import { Front, Back } from './Placeholders';

export default {
  title: 'Touchi/Flippable',
  component: Flippable
} as Meta;

const Template: Story<FlippableProps> = (args) => <Flippable {...args} />;

export const XAxis = Template.bind({});
XAxis.args = {
  axis: FlipAxis.XAxis,
  width: "200px",
  height: "200px",
  timeToFlipInMilliseconds: 500,
  front: (<Front />),
  back: (<Back />)
};

export const YAxis = Template.bind({});
YAxis.args = {
  axis: FlipAxis.YAxis,
  width: "200px",
  height: "200px",
  timeToFlipInMilliseconds: 500,
  front: (<Front />),
  back: (<Back />)
};