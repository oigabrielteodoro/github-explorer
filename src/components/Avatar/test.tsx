import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Avatar } from '.'

const props = {
  name: 'John Doe',
  src: 'https://cdn.fakercloud.com/avatars/erwanhesry_128.jpg',
  alt: 'John Doe',
}

describe('<Avatar />', () => {
  it('should render correctly', () => {
    render(<Avatar {...props} />)

    expect(screen.getByAltText(/john doe/i)).toHaveAttribute('src', props.src)
  })

  it('should render a small avatar by default', () => {
    render(<Avatar {...props} />)

    expect(screen.getByLabelText(/avatar/i)).toHaveStyle({ width: '3.2rem' })
  })

  it('should render a large avatar', () => {
    render(<Avatar {...props} size={'large'} />)

    expect(screen.getByLabelText(/avatar/i)).toHaveStyle({ width: '8.0rem' })
  })

  it('should render the initials correctly', async () => {
    render(<Avatar name={props.name} />)

    const element = screen.getByRole('img')
    fireEvent.error(element)
    await waitFor(() => {
      expect(screen.getByText('JD')).toBeInTheDocument()
    })
  })

  it('should render a initial when SRC is incomplete', async () => {
    const onError = jest.fn()

    render(
      <Avatar name={props.name} onError={onError} src="https:goodle.com" />
    )

    expect(onError).not.toHaveBeenCalled()

    const element = screen.getByRole('img')
    fireEvent.error(element)
    await waitFor(() => {
      expect(onError).toHaveBeenCalledTimes(1)
    })
  })
})
