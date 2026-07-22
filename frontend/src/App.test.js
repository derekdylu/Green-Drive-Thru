import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import App from './App';

vi.mock('react-player', () => ({
  default: () => <div aria-label="introductory video" />,
}));

test('renders the Green Drive Thru home page', async () => {
  render(<App />);
  expect(
    await screen.findByText(
      '致力於讓每個人對環境的努力都被看見。',
      {},
      { timeout: 5_000 }
    )
  ).toBeInTheDocument();
});
