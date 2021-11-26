import React,{useState} from 'react';
import { Header } from "../../Components/Header";
import { ClientTable } from "../../Components/ClientTable";
import Modal from 'react-modal';
import { Content } from "./styles";
import { EditClientModal } from "../../Components/EditClientModal";

Modal.setAppElement('#root');

interface Client {  
    id: string;
    name: string;
    address: string;
    phone: number;
    email: string;
    birthdate: Date;
}
const Dashboard: React.FC = () => {

    const [onOpenEditClientModal, setIsEditClientModalOpen] = useState(false);
    const [clientEdit, setClientEdit] = useState<Client>({} as Client);

    function handleOpenEditClientModal(clientEdit: Client) {
        setClientEdit(clientEdit);
        setIsEditClientModalOpen(true);
    }

    function handleCloseEditClientModal() {
        setIsEditClientModalOpen(false);
    }

    return (
        <>
          <Header/>
          <Content>
              <ClientTable onOpenEditClientModal={handleOpenEditClientModal}/>
          </Content>
          <EditClientModal client={clientEdit} isOpen={onOpenEditClientModal} onRequestClose={handleCloseEditClientModal}/>
        </>
    );
}

export default Dashboard;