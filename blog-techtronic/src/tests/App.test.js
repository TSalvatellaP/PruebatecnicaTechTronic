// tests/App.test.js
import { render, screen } from '@testing-library/react';
import App from '../App';

beforeAll(() => {
  process.env.VITE_URL_SERVER = "http://localhost:3000"; 
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i); 
  expect(linkElement).toBeInTheDocument(); 
});
