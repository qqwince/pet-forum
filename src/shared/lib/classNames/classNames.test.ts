import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('1st param only', () => {
        expect(classNames('something')).toBe('something');
    });

    test('3rd param: additional classes', () => {
        const expected = 'something class1 class2';
        expect(
            classNames(
                'something',
                {},
                ['class1', 'class2'],
            ),
        )
            .toBe(expected);
    });

    test('with mods: all true', () => {
        const expected = 'something class1 class2 hovered scrollable';
        expect(classNames(
            'something',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods: one false', () => {
        const expected = 'something class1 class2 hovered';
        expect(classNames(
            'something',
            { hovered: true, scrollable: false },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('with mods: one undefined', () => {
        const expected = 'something class1 class2 hovered';
        expect(classNames(
            'something',
            { hovered: true, scrollable: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
