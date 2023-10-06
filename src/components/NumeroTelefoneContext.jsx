import React, { createContext, useContext, useState } from 'react';

const NumeroTelefoneContext = createContext();

export const useNumeroTelefoneContext = () => {
    return useContext(NumeroTelefoneContext);
};

export const NumeroTelefoneProvider = ({ children }) => {
    const [numeroTelefone, setNumeroTelefone] = useState('');
    const [isValid, setIsValid] = useState(true);

    const formatPhoneNumber = (input) => {
        // Remova todos os espaços, hífens e pontos e substitui por vazio ''
        const cleaned = input.replace(/\s|-|\./g, ''); // \s espaços, | ou, - hífen, \. pontos, /g global

        // Se a entrada for um número de 11 dígitos, formate como "XX XXXXX-XXXX"
        if (/^\d{11}$/.test(cleaned)) {
            return `${cleaned.substr(0, 2)} ${cleaned.substr(2, 5)}-${cleaned.substr(7)}`;
        }

        return input; // Mantenha a entrada original se não for um formato válido
    };

    return (
        <NumeroTelefoneContext.Provider
            value={{
                numeroTelefone,
                setNumeroTelefone,
                isValid,
                setIsValid,
                formatPhoneNumber,
            }}
        >
            {children}
        </NumeroTelefoneContext.Provider>
    );
};