import LoginPage from '@/pages/auth/login';
import { render } from '@testing-library/react';


jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        route: '/auth/login',
        pathname: '',
        query: '',
        asPath: '',
        push: jest.fn(),
        events: {
          on: jest.fn(),
          off: jest.fn(),
        },
        beforePopState: jest.fn(() => null),
        prefetch: jest.fn(() => null),
        isReady: true,
      };
    },
  };
});

describe('login page', () => {
  it('render login page', () => {
    const page = render(<LoginPage />);
    expect(page).toMatchSnapshot();
  });
});
