import { createContext, ReactNode, useContext, useState,useEffect } from 'react'
import { v4 as uuid } from 'uuid';

interface Clients {  
    id: string;
    name: string;
    address: string;
    phone: number;
    email: string;
    birthdate: Date;
}

interface ClientsProviderProps{
    children: ReactNode
}

interface ClientInput {
    name: string;
    address: string;
    phone: number;
    email: string;
    birthdate: Date;
}

interface ClientContextData {
    clients: Clients[],
    createClient: (client : ClientInput) => Promise<void>,
    editClient: (client: Clients) => void,
    removeClient: (client: Clients) => void
}

const ClientsContext = createContext<ClientContextData>(
    {} as ClientContextData
);

export function ClientsProvider ({children}: ClientsProviderProps) {
    const [clients, setClients] = useState<Clients[]>([]);
    
    useEffect(() => {
        // função responsavel por buscar todos os
        // clientes do localstorage e salvar dentro de clients ( variavel responsavel por ser repassada )
        const clientList = JSON.parse(localStorage.getItem('clients') || '[]');
        if(clientList){
            setClients(clientList);
        }
    }, []);

    async function createClient(clientInput : ClientInput) {
       // Função recebe um object ja validado do formulario, adiciona um ID unico ao mesmo
       // e adiciona ele no localStorage
       const id = uuid();
       const newClient = {...clientInput,id}
       localStorage.setItem("clients", JSON.stringify([ ...clients,newClient]));  
       setClients([...clients, newClient]);
    }

    function editClient(clientEdit : Clients) {
       // Função recebe um object ja validado do formulario, faz um filtro em busca 
       // do index dele dentro da lista de clientes, apos encontrar substitui ele pelo
       // novo objeto a ser armazenado
       const clientsStorage = JSON.parse(localStorage.getItem('clients') || '[]');
       clients[clientsStorage.findIndex((item : Clients) => item.id === clientEdit.id)] = clientEdit;
       setClients(clients);
       localStorage.setItem("clients", JSON.stringify(clients))            
    }


    function removeClient(clientRemove : Clients) {
       // Função recebe um object, faz um filtro em busca 
       // do index dele dentro da lista de clientes, apos encontrar remove o item da lista 
       // e atualiza a lista de clientes
        const clientsStorage = JSON.parse(localStorage.getItem('clients') || '[]');
        const newsClients = clientsStorage.filter((item : Clients) => {
            return (item.id !== clientRemove.id)
        });
        setClients(newsClients);
        localStorage.setItem("clients", JSON.stringify(newsClients))    
        
    }

    return ( 
        // função responsavel por prover( fornecer) os clientes 
        //e as funções de criar, editar e remover entre as paginas da aplicação
        <ClientsContext.Provider value={{clients,createClient,editClient,removeClient}}>
            {children}
        </ClientsContext.Provider>)
}

export function useClients(){
    // função responsavel para facilitar no importação do context API
    return useContext(ClientsContext);
}