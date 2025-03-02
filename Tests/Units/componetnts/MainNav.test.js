import { render, screen } from '@testing-library/vue'
import MainNav from '@/components/MainNav.vue'
import { expect } from 'vitest'

describe('MainNav', () => {
  it('display company name', () => {
    render(MainNav)
    const companyName = screen.getByText('Careers by S4NDM4M')
    expect(companyName).toBeInTheDocument()
  })
})
