import React from 'react';
import { render } from '@testing-library/react';

function add(a:number,b:number){
	return a+b;
}
describe('test测试', () => {
	it('should render the correct', () => {
		expect(add(1, 2)).toBe(3)
	})
})