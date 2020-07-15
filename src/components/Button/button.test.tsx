import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

describe('button 文案是否正确', () => {
  it('should render the correct default button', () => {
    const wrapper = render(<Button btnWord="hello"></Button>)
    const element = wrapper.getByText('hello') as HTMLButtonElement
    expect(element).toBeInTheDocument()
  })
})