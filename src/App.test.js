import { render, screen } from '@testing-library/react';
import App from './App';

test('menampilkan judul hero Beranda', () => {
  render(<App />);
  expect(screen.getByText('Pesona Budaya Nusantara')).toBeInTheDocument();
});
