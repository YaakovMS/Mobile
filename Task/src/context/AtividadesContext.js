import React, { createContext, useContext, useState } from 'react';

const AtividadesContext = createContext();

export const useAtividades = () => {
  return useContext(AtividadesContext);
};

export const AtividadesProvider = ({ children }) => {
  const [atividades, setAtividades] = useState([]);

  const adicionarAtividade = (atividade) => {
    setAtividades([...atividades, atividade]);
  };

  const salvarAtividade = (atividade) => {
    adicionarAtividade(atividade);
    // Outras ações que você deseja executar ao salvar a atividade
  };

  const useSalvarAtividade = () => {
    return salvarAtividade;
  };

  return (
    <AtividadesContext.Provider value={{ atividades, useSalvarAtividade }}>
      {children}
    </AtividadesContext.Provider>
  );
};
