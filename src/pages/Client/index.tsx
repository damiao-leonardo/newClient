import React,{useRef} from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../../Components/Input';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import {Container,Content} from './styles';
import { useClients } from '../../hooks/useClients';


interface ClientFormData {
  name: string;
  address: string;
  phone: number;
  email: string;
  birthdate: Date;
}

const NewClient: React.FC = () => {

  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { createClient } = useClients();

  const handleSubmit = async (data: ClientFormData) => {
    try{
        formRef.current?.setErrors({});
    
        const schema = Yup.object().shape({
            name: Yup.string().required('Nome obrigatório').matches(/^[aA-zZ\s]+$/, "Nome não pode conter números! "),
            address: Yup.string().required('Categoria obrigatória'),
            phone: Yup.number().typeError('Telefone obrigatório').positive('Precisa ser numeros positivos').integer(),
            email: Yup.string().email('Formato de E-mail incorreto!').required('Fornecedor obrigatório'),
            birthdate: Yup.string().required('Fornecedor obrigatório'),
           
        });
        await schema.validate(data,{
            abortEarly: false
        });
        console.log(data);

        createClient(data);
        history.push('/');
      
    } catch(err){
        if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }   
    }
};

return (
        <>
        <Container>
          <Content>
            <h5>Novo Cliente</h5>
            <Form ref={formRef} onSubmit={handleSubmit}>
                  <Input name="name"  type="text" placeholder="Nome"  />
                  <Input name="address"  type="text"  placeholder="Endereço" /> 
                  <Input name="phone"  type="number"  placeholder="Telefone" /> 
                  <Input name="email"  type="text"  placeholder="Email" /> 
                  <Input name="birthdate"  type="date"  placeholder="Data de Nascimento" /> 
                  <button type="submit">Salvar</button>
            </Form>
          </Content>
        </Container>
        </>
    );
}

export default NewClient;