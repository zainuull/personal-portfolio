import ContactPage from '@/pages/contact';
import { render } from '@testing-library/react';

describe('contact page', () => {
  it('render contact page', () => {
    const page = render(<ContactPage />);
    expect(page).toMatchSnapshot();
  });
});
