import React from 'react';
import { renderHook, act } from '@testing-library/react-native';
import { AppProvider, useAuthentication, useCalculator } from '../../context/AppProvider';

describe('AppProvider', () => {
  describe('Authentication Context', () => {
    it('deve fornecer o estado inicial correto para autenticação', () => {
      const { result } = renderHook(() => useAuthentication(), {
        wrapper: AppProvider,
      });

      expect(result.current.isAuthenticated).toBe(false);
      expect(result.current.showMainMenu).toBe(false);
      expect(result.current.showMenuAside).toBe(false);
    });

    it('deve atualizar estados de autenticação', () => {
      const { result } = renderHook(() => useAuthentication(), {
        wrapper: AppProvider,
      });

      act(() => {
        result.current.setIsAuthenticated(true);
        result.current.setShowMainMenu(true);
        result.current.setShowMenuAside(true);
      });

      expect(result.current.isAuthenticated).toBe(true);
      expect(result.current.showMainMenu).toBe(true);
      expect(result.current.showMenuAside).toBe(true);
    });
  });

  describe('Calculator Context', () => {
    it('deve fornecer o estado inicial correto para calculadora', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      expect(result.current.isHiden).toBe(true);
      expect(result.current.result).toBe('0');
      expect(result.current.message).toBe('');
    });

    it('deve ligar e desligar a calculadora', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      act(() => {
        result.current.calculator.ligar();
      });
      expect(result.current.isHiden).toBe(false);

      act(() => {
        result.current.calculator.desligar();
      });
      expect(result.current.isHiden).toBe(true);
      expect(result.current.result).toBe('0');
    });

    it('deve adicionar números e operadores corretamente', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      act(() => {
        result.current.setResult('0');
        result.current.calculator.add('1');
      });
      expect(result.current.result).toBe('1');

      act(() => {
        result.current.calculator.add('2');
      });
      expect(result.current.result).toBe('12');

      act(() => {
        result.current.calculator.add('+');
      });
      expect(result.current.result).toBe('12+');
    });

    it('deve remover último dígito corretamente', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      // Primeiro, adiciona um número
      act(() => {
        result.current.setResult('123');
      });

      // Remove um dígito
      act(() => {
        result.current.calculator.remove();
      });
      expect(result.current.result).toBe('12');

      // Remove outro dígito
      act(() => {
        result.current.calculator.remove();
      });
      expect(result.current.result).toBe('1');

      // Remove o último dígito
      act(() => {
        result.current.calculator.remove();
      });
      expect(result.current.result).toBe('0');
    });

    it('deve limpar o resultado e a mensagem', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      act(() => {
        result.current.setResult('123');
        result.current.setMessage('Teste');
      });

      act(() => {
        result.current.calculator.clear();
        result.current.calculator.clearMessage();
      });

      expect(result.current.result).toBe('0');
      expect(result.current.message).toBe('');
    });

    it('deve manter as constantes corretas', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      expect(result.current.constants).toEqual({
        spaceV: 'md',
        space: 'sm',
        sizeButton: 'md',
        sizeText: 'lg'
      });
    });
  });
}); 