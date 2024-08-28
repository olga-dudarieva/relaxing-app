import React from 'react';
import { render, screen } from '@testing-library/react';
import Brand from './Brand';

describe("Brand", () => {
    test('Brand renders', () => {
        render(<Brand />);

        const textElement = screen.getByText(/CineMuse/i)
        expect(textElement).toBeInTheDocument();
    })
    test('Logo renders', () => {
        render(<Brand />);

        const logoElement = screen.getByTestId('brand')
        const {firstChild} = logoElement
        expect(firstChild!.nodeName).toBe('svg')
    })
})

