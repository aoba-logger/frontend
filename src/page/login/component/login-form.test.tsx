import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'


import Form from './login-form'

describe('login form', () => {
  render(<Form />)
  it('passoword should not be empty', async () => {
    expect(screen.getByText(/Login/i)).toBeInTheDocument()
    expect(screen.queryByText("Password is required")).not.toBeInTheDocument()
    userEvent.click(screen.getByText('Login'))
    expect(await screen.findByText("Password is required")).toBeInTheDocument()
  })
})