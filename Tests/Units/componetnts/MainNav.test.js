import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { expect, it, describe } from 'vitest'

describe('MainNav', () => {
  it('display company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Careers by S4NDM4M')
    expect(companyName).toBeInTheDocument()
  })

  it('display navigation links', () => {
    render(MainNav)
    const navigationLinks = screen.getAllByRole('listitem')
    const navigationText = navigationLinks.map((link) => link.textContent)
    expect(navigationText).toEqual([
      'Teams',
      'Locations',
      'Life at S4NDM4M Co',
      'How We Hire',
      'Students',
      'Jobs',
    ])
  })
})
