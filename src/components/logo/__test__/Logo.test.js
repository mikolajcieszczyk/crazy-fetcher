import React from 'react';
import ReactDOM from 'react-dom';
import Logo from '../Logo.component';
import { render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
});

it('renders Logo correctly', () => {
    const {getByTestId} = render(<Logo title='Crazy Fetcher' />);
    expect(getByTestId('logo')).toHaveTextContent('Crazy Fetcher');
});