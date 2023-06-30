import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Review from '../Reviews';

describe('Reviews Page', () => {
    
    test('renders the head text', () => {
        render(<Review />)
        // Verify presence of main paragraph and reviews container
        expect(screen.getByText('Reviews')).toBeInTheDocument();
        expect(screen.getByText('Hear what others have to say about Silverline Tutoring.')).toBeInTheDocument();
        expect(screen.getByTestId('reviews-container')).toBeInTheDocument();
    })
    test('checks that the reviews container isnt empty', () => { 
        render(<Review />)
        expect(screen.getByTestId('reviews-container').textContent).toBeTruthy();
    })

})