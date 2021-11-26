import { useRef } from 'react';
import Modal from 'react-modal';
import { useClients } from '../../hooks/useClients';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import Input from '../Input';
import * as Yup from 'yup';

import {Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

interface Client {
    id: string;
    name: string;
    address: string;
    phone: number;
    email: string;
    birthdate: Date;
}


interface EditClientModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
    client: Client;
}

export function EditClientModal({isOpen,onRequestClose,client} : EditClientModalProps) {

    const { editClient } = useClients();

    const formRef = useRef<FormHandles>(null);

    const handleEditClient = async (data: Client) => {

        // Formulario com validação para editar um cliente especifico
        try{
            formRef.current?.setErrors({});
            
            // validação do objeto Data
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
            editClient(data);
            onRequestClose();
          
        } catch(err){
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err);
                formRef.current?.setErrors(errors);
            }   
        }
    };

    return(
    <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          overlayClassName="react-modal-overlay"
          className="react-modal-content"
          >
               <button className="react-modal-close" type="button" onClick={onRequestClose}>X</button>  
                <Container >
                    <h2>Editar Cliente</h2>
                    <Form ref={formRef} onSubmit={handleEditClient}>
                        <Input name="id" disabled value={client.id}  type="text"   />
                        <Input name="name" defaultValue={client.name} type="text" placeholder="Nome"  />
                        <Input name="address" defaultValue={client.address}  type="text"  placeholder="Endereço" /> 
                        <Input name="phone" defaultValue={client.phone} type="number"  placeholder="Telefone" /> 
                        <Input name="email" defaultValue={client.email} type="text"  placeholder="Email" /> 
                        <Input name="birthdate" type="date"  placeholder="Data de Nascimento" /> 
                        <button type="submit">Salvar</button>
                    </Form>
                </Container> 
     </Modal>
    );
    
}