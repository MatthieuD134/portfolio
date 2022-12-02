import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from '.';

const THEMES = {
  LIGHT: 'theme_light',
  DARK: 'theme_dark',
};

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <div className={THEMES.LIGHT}>
    <Modal {...args} />
  </div>
);

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  children: 'Modal example',
  centered: true,
};
