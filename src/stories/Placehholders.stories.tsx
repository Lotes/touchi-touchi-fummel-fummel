import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Placeholder as PlaceholderClass, PlaceholderProps, Front as FrontClass, Back as BackClass } from './Placeholders';

export default {
  title: 'Touchi/Placeholder',
  component: PlaceholderClass
} as Meta;

const TemplatePlaceholder: Story<PlaceholderProps> = (args) => (<div style={{
  width: "200px", height: "200px"
}}><PlaceholderClass {...args} /></div>);

export const Placeholder = TemplatePlaceholder.bind({});
Placeholder.args = {
  text: "Text",
  backgroundColor: "red",
  color: "blue",
  border: "1px dashed green"
};