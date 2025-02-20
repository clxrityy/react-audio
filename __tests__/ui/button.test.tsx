import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react';
import { Button } from '../../src/components/ui/Button';
import React from 'react';

describe('Button', () => {
    it('renders without crashing', () => {
        render(<Button>Test</Button>);
        expect(screen.getByRole('button')).toBeDefined();

    })
});

describe('Button', () => {
    it('renders with correct text', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeDefined();
    })
});