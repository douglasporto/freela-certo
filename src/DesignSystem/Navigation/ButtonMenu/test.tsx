import { render, screen } from 'utils/test-utils'

import ButtonMenu from '.'

describe('<ButtonMenu />', () => {
  it('should render the button menu', () => {
    render(<ButtonMenu href="">Dashboard</ButtonMenu>)

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /Dashboard/i })).toHaveStyle({
      width: '100%',
      backgroundColor: 'initial'
    })
  })

  it('should render active the button menu', () => {
    const { container } = render(
      <ButtonMenu href="" isActive>
        Dashboard
      </ButtonMenu>
    )

    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument()

    expect(screen.getByText(/Dashboard/i)).toHaveStyle({
      width: '100%',
      backgroundColor: '#1A223F !important',
      color: '#7C4DFF !important'
    })

    expect(container).toMatchSnapshot()
  })
})
