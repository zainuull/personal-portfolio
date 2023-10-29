import AboutPage from '@/pages/about';
import { render } from '@testing-library/react';

describe('about page', () => {
  it('render about page', () => {
    const page = render(<AboutPage />);
    expect(page).toMatchSnapshot();
  });
});
