import AppShell from '@/components/appShell/appShell';
import { render } from '@testing-library/react';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        route: '/',
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

describe('appShell component', () => {
  it('render appShell component', () => {
    const page = render(<AppShell />);
    expect(page).toMatchSnapshot();
  });
});
