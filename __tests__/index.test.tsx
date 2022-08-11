import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import fetch from 'jest-fetch-mock';

describe('Home', () => {
  afterEach(() => {
    fetch.resetMocks();
  }),
  
  beforeEach(async () => {
    fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));
    render(<Home />);
  }),
  
  it('renders a heading', () => {
    const heading = screen.getByRole('heading', {
      name: /I'm Saadat Ali/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
