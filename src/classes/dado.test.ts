import { DadoComum, DadoCarregado, D20, D10Porcento, D100 } from './dado';

describe('Testes da interface RolaDado', () => {
  test('DadoComum deve retornar um número entre 1 e seus lados', () => {
    const dado = new DadoComum(6);
    const resultado = dado.rolar();
    expect(resultado).toBeGreaterThanOrEqual(1);
    expect(resultado).toBeLessThanOrEqual(6);
  });

  test('DadoCarregado deve retornar um número (potencialmente enviesado)', () => {
    const dado = new DadoCarregado(6, 2);
    const resultado = dado.rolar();
    expect(resultado).toBeGreaterThanOrEqual(1);
    expect(resultado).toBeLessThanOrEqual(6);
  });
});

describe('Testes com a classe abstrata DadoRPG', () => {
  test('D20 deve retornar um número entre 1 e 20', () => {
    const d20 = new D20();
    const resultado = d20.rolar();
    expect(resultado).toBeGreaterThanOrEqual(1);
    expect(resultado).toBeLessThanOrEqual(20);
  });

  test('D10Porcento deve retornar um múltiplo de 10 entre 10 e 100', () => {
    const d10 = new D10Porcento();
    const resultado = d10.rolar();
    expect(resultado % 10).toBe(0);
    expect(resultado).toBeGreaterThanOrEqual(10);
    expect(resultado).toBeLessThanOrEqual(100);
  });

  test('D100 deve retornar um número entre 1 e 100', () => {
    const d100 = new D100();
    const resultado = d100.rolar();
    expect(resultado).toBeGreaterThanOrEqual(1);
    expect(resultado).toBeLessThanOrEqual(100);
  });

  test('DadoRPG.rolarVarias deve rolar múltiplas vezes', () => {
    const d20 = new D20();
    const resultados = D20.rolarVarias(d20, 5);
    expect(resultados).toHaveLength(5);
    for (const r of resultados) {
      expect(r).toBeGreaterThanOrEqual(1);
      expect(r).toBeLessThanOrEqual(20);
    }
  });
});