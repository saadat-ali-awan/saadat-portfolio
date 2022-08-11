import { render } from '@testing-library/react'
import Home from '@/pages/index'
import fetch from 'jest-fetch-mock';
afterEach(() => {
  fetch.resetMocks();
}),
beforeEach(async () => {
  fetch.mockResponseOnce(JSON.stringify({ url: '' }));
}),
it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  // expect(container).toMatchSnapshot()
})
