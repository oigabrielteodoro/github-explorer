import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SearchInput } from '.'

const mockedOnClick = jest.fn()
const mockedOnChange = jest.fn()

const props = {
  placeholder: 'Digite aqui',
  onChange: mockedOnChange,
  onClick: mockedOnClick,
}

describe('<SearchInput />', () => {
  it('should render correctly', () => {
    const { container } = render(<SearchInput {...props} />)

    expect(screen.getByPlaceholderText(/digite aqui/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should change the value when onChange is called', () => {
    render(<SearchInput {...props} />)

    const input = screen.getByPlaceholderText(/digite aqui/i)

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'John Doe' } })

    expect(mockedOnChange).toHaveBeenCalled()
  })

  it('should submit when onClick is called', () => {
    render(<SearchInput {...props} />)

    const input = screen.getByPlaceholderText(/digite aqui/i)

    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'John Doe' } })

    expect(mockedOnChange).toHaveBeenCalled()

    const button = screen.getByRole('button', {
      name: /pesquisar/i,
    })

    userEvent.click(button)

    expect(mockedOnClick).toHaveBeenCalled()
  })
})
