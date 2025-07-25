import React from 'react';
// eslint-disable-next-line storybook/no-renderer-packages
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut, eligendi, illum incidunt inventore minus molestias numquam obcaecati odit quam recusandae vel vitae? Dolore et id neque quidem repellat voluptas!',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur aut, eligendi, illum incidunt inventore minus molestias numquam obcaecati odit quam recusandae vel vitae? Dolore et id neque quidem repellat voluptas!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
