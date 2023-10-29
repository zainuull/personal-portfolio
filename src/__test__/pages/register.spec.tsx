import RegisterPage from '@/pages/auth/register';
import { render } from '@testing-library/react';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        route: '/auth/register',
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

describe('register page', () => {
  it('render register page', () => {
    const page = render(<RegisterPage />);
    expect(page).toMatchSnapshot();
  });
});
