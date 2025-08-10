import React from 'react';
// eslint-disable-next-line storybook/no-renderer-packages
import { ComponentMeta, ComponentStory } from '@storybook/react';
import 'app/styles/index.scss';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'TITLE lorem lorem ipsum pipsum',
    text: 'I am a text, hey there :D I am a text, hey there :D',
};
export const Error = Template.bind({});
Error.args = {
    title: 'TITLE lorem lorem ipsum pipsum',
    text: 'I am a text, hey there :D I am a text, hey there :D',
    theme: TextTheme.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'TITLE lorem lorem ipsum pipsum',
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'I am a text, hey there :D I am a text, hey there :D',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'TITLE lorem lorem ipsum pipsum',
    text: 'I am a text, hey there :D I am a text, hey there :D',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'TITLE lorem lorem ipsum pipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'I am a text, hey there :D I am a text, hey there :D',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
