import { fireEvent, render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Sidebar } from 'widgets/Sidebar';
import { withTranslation } from 'react-i18next';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
