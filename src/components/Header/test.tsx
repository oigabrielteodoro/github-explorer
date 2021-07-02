import React, { ReactNode } from 'react'
import { render, screen } from '@testing-library/react'

import { Header } from '.'

type LinkProps = {
  children: ReactNode
}

jest.mock('react-router-dom', () => ({
  Link: ({ children }: LinkProps) => children,
  useLocation() {
    return {
      pathname: '/dasda',
    }
  },
}))

describe('<Header />', () => {
  it('should render correctly', () => {
    const { container } = render(<Header />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(container).toMatchSnapshot()
  })
})
