import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
//import '@testing-library/jest-dom';
import Home from './Home';

describe('Home', () =>{
    
    test('should be show the title', () => {
        render(<Home />)
        expect(screen.getByText(/Consulta de Saldo/i)).toBeInTheDocument();
    });

    test('Renderiza correctamente', () => {
        render(<Home />)
        expect(screen.debug())
    });
    
})
