import axios from 'axios';
import type { Categoria } from '../models/Categoria';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const CategoriaService = {

  listar: async (): Promise<Categoria[]> => {
    const response = await api.get('/categorias');
    return response.data;
  },

  buscarPorId: async (id: number): Promise<Categoria> => {
    const response = await api.get(`/categorias/${id}`);
    return response.data;
  },

  buscarPorNome: async (nome: string): Promise<Categoria[]> => {
    const response = await api.get(`/categorias/nome/${nome}`);
    return response.data;
  },

  cadastrar: async (categoria: { nome: string; descricao?: string }): Promise<Categoria> => {
    const response = await api.post('/categorias', categoria);
    return response.data;
  },

  atualizar: async (categoria: Categoria): Promise<Categoria> => {
    const response = await api.put('/categorias', categoria);
    return response.data;
  },

  deletar: async (id: number): Promise<void> => {
    await api.delete(`/categorias/${id}`);
  },
};