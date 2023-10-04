import React, { createContext, useContext, useState } from 'react';

const ProjetoContext = createContext();

export const verificarProjetoSelecionado = (projetoId, navigation) => {
  // Coloque a lógica para verificar se um projeto está selecionado aqui
  // Por exemplo, você pode verificar se projetoId é nulo ou se ele corresponde a um projeto válido
  if (!projetoId) {
    navigation.navigate('Projetos'); // Redirecionar para a tela de Projetos
    return false;
  }
  return true;
};

export const useProjeto = () => {
  return useContext(ProjetoContext);
};

export const ProjetoProvider = ({ children }) => {
  const [projetos, setProjetos] = useState([]); // Lista de projetos
  const [projetoSelecionado, setProjetoSelecionado] = useState(null); // Projeto selecionado

  const adicionarProjeto = (novoProjeto) => {
    setProjetos([...projetos, novoProjeto]);
  };

  const editarProjeto = (id, novoNome) => {
    const projetosAtualizados = projetos.map((projeto) => {
      if (projeto.id === id) {
        return { ...projeto, nome: novoNome };
      }
      return projeto;
    });
    setProjetos(projetosAtualizados);
  };

  const excluirProjeto = (id) => {
    const projetosAtualizados = projetos.filter((projeto) => projeto.id !== id);
    setProjetos(projetosAtualizados);
  };

  const selecionarProjeto = (id) => {
    setProjetoSelecionado(id);
  };

  const deselecionarProjeto = () => {
    setProjetoSelecionado(null);
  };

  return (
    <ProjetoContext.Provider
      value={{
        projetos,
        projetoSelecionado,
        adicionarProjeto,
        editarProjeto,
        excluirProjeto,
        selecionarProjeto,
        deselecionarProjeto,
      }}
    >
      {children}
    </ProjetoContext.Provider>
  );
};
