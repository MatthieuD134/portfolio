import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '.';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div className={THEMES.LIGHT}>
    <Button {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};
