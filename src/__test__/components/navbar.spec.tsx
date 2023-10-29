import { render } from '@testing-library/react';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/navbar/navbar';

describe('Navbar component', () => {
  it('renders Navbar component', () => {
    render(
      <SessionProvider
        session={{
          user: { name: 'Test User' },
          expires: new Date().toISOString(), // Convert Date to string using toISOString()
        }}>
        <Navbar />
      </SessionProvider>
    );
    // Your test assertions...
  });
});
