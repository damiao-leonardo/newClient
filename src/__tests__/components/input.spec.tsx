import { render } from '@testing-library/react';
import React from 'react';

import Input from '../../Components/Input';

jest.mock('@unform/core',() => {
    return {
        useField(){
            return {
                fiedlName: 'product',
                defaultValue: '',
                error: '',
                registerField: jest.fn()
            }
        }
    }
});

describe('Input Component',() =>{

 it('should be able to render Input',() =>{

    const { getByPlaceholderText} = render(
       <Input name="product" placeholder="product"/>
    );

    expect(getByPlaceholderText('product')).toBeTruthy();

 });

});