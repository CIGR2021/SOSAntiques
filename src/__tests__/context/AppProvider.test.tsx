import { renderHook, act } from '@testing-library/react-native';
import {
  AppProvider,
  useAuthentication,
  useCalculator,
} from '@/context/AppProvider';

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

      expect(result.current.hideOnUnmount).toBe(true);
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
      expect(result.current.hideOnUnmount).toBe(false);

      act(() => {
        result.current.calculator.desligar();
      });
      expect(result.current.hideOnUnmount).toBe(true);
      expect(result.current.result).toBe('0');
    });

    it('deve adicionar números e operadores corretamente', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      act(() => {
        result.current.calculator.ligar(); // Garante que a calculadora esteja ligada antes de adicionar valores
      });
      console.log('Após ligar a calculadora:', result.current.expression);

      console.log('Estado inicial da expressão:', result.current.expression);
      act(() => {
        result.current.calculator.add('1');
      });
      console.log('Após adicionar 1:', result.current.expression);
      expect(result.current.expression).toBe('1');

      act(() => {
        result.current.calculator.add('2');
      });
      console.log('Após adicionar 2:', result.current.expression);
      expect(result.current.expression).toBe('12');

      act(() => {
        result.current.calculator.add('+');
      });
      console.log('Após adicionar +:', result.current.expression);
      expect(result.current.expression).toBe('12+');
    });

    it('deve remover último dígito corretamente', () => {
      const { result } = renderHook(() => useCalculator(), {
        wrapper: AppProvider,
      });

      act(() => {
        result.current.calculator.ligar(); // Garante que a calculadora esteja ligada antes de remover valores
        result.current.setResult('123'); // Configura o estado inicial corretamente
      });
      console.log('Estado inicial antes de remover:', result.current.result);

      act(() => {
        result.current.calculator.remove();
      });
      expect(result.current.result).toBe('12');

      act(() => {
        result.current.calculator.remove();
      });
      expect(result.current.result).toBe('1');

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
        result.current.calculator.ligar(); // Garante que a calculadora esteja ligada antes de limpar
        result.current.setResult('123'); // Configura o estado inicial corretamente
        result.current.setMessage('Teste'); // Configura a mensagem inicial
      });
      console.log(
        'Estado inicial antes de limpar: result=',
        result.current.result,
        ', message=',
        result.current.message,
      );

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
        verticalSpace: 'md',
        horizontalSpace: 'sm',
        sizeButton: 'md',
        sizeText: 'lg',
      });
    });
  });
});
