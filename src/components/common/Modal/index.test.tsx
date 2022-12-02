import { render, screen } from '@testing-library/react';
import Modal from '.';

describe('Button', () => {
  it('Should render a button', () => {
    render(<Modal>Modal</Modal>);

    const modal = screen.getByText(/Modal/i);

    expect(modal).toBeInTheDocument();
  });
});
