import { useClients } from "../../hooks/useClients";
import { Container } from "./styles";

interface Client {  
    id: string;
    name: string;
    address: string;
    phone: number;
    email: string;
    birthdate: Date;
}
interface ClientTableProps{
    onOpenEditClientModal: (client: Client) => void;
}
  
export function ClientTable({onOpenEditClientModal} : ClientTableProps){

    const { clients,removeClient } = useClients();
    
    return (
       <Container>
           <table>
               <thead>
                   <tr>
                       <th>Nome</th>
                       <th>Endereço</th>
                       <th>Telefone</th>
                       <th>Email</th>
                       <th>Data de Nascimento</th>
                       <th>Editar</th>
                       <th>Remover</th>
                   </tr>
               </thead>
               <tbody>
                   
               {(clients.length > 0) ?  
                    clients.map(client => {
                            return (
                                <tr key={client.id}>
                                <td>{client.name}</td>
                                <td>{client.address}</td>
                                <td>{client.phone}</td>
                                <td>{client.email}</td>
                                <td>{client.birthdate}</td>
                                <td>
                                    <button type="button" onClick={() => onOpenEditClientModal(client)} ><span>Editar</span></button>
                                </td>
                                <td>
                                    <button type="button" onClick={() => removeClient(client)}><span>Remover</span></button>
                                </td>
                            </tr>
                       )
                    }) 
                :  <tr>
                     <td className="not-text" colSpan={7}>Nenhum cliente encontrado</td>
                   </tr>
                   }
               </tbody>
           </table>
       </Container>
    );
}