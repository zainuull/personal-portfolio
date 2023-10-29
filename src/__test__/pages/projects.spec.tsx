import ProjectsPage from '@/pages/projects';
import { render } from '@testing-library/react';

describe('projects page', () => {
  it('render projects page', () => {
    const page = render(<ProjectsPage />);
    expect(page).toMatchSnapshot();
  });
});
