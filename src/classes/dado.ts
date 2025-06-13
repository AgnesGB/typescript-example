// dado.ts

// 1. Interface comum
interface RolaDado {
  rolar(): number;
}

// 1.1 e 1.2 - Classes com atributos diferentes
export class DadoComum implements RolaDado {
  lados: number;

  constructor(lados: number = 6) {
    this.lados = lados;
  }

  rolar(): number {
    return Math.floor(Math.random() * this.lados) + 1;
  }
}

export class DadoCarregado implements RolaDado {
  lados: number;
  peso: number; // quanto mais peso, mais chances de cair em valores altos

  constructor(lados: number = 6, peso: number = 2) {
    this.lados = lados;
    this.peso = peso;
  }

  rolar(): number {
    const base = Math.random() * this.lados;
    return Math.min(this.lados, Math.floor(base + this.peso));
  }
}

// 2. Classe abstrata
abstract class DadoRPG {
  abstract lados: number;
  abstract rolar(): number;

  static rolarVarias(dado: DadoRPG, vezes: number): number[] {
    const resultados: number[] = [];
    for (let i = 0; i < vezes; i++) {
      resultados.push(dado.rolar());
    }
    return resultados;
  }
}

// 2.1, 2.2, 2.3 - Subclasses
export class D20 extends DadoRPG {
  lados: number;
  cor: string;

  constructor(cor: string = 'vermelho') {
    super();
    this.lados = 20;
    this.cor = cor;
  }

  rolar(): number {
    return Math.floor(Math.random() * this.lados) + 1;
  }
}

export class D10Porcento extends DadoRPG {
  lados: number;
  material: string;

  constructor(material: string = 'metal') {
    super();
    this.lados = 10;
    this.material = material;
  }

  rolar(): number {
    return (Math.floor(Math.random() * this.lados) + 1) * 10;
  }
}

// D100 só pq quis
export class D100 extends DadoRPG {
  lados: number;
  material: string;

  constructor(material: string = 'metal') {
    super();
    this.lados = 10;
    this.material = material;
  }

  rolar(): number {
    return ((Math.floor(Math.random() * this.lados) + 1) * 10) + (Math.floor(Math.random() * this.lados) + 1);
  }
}