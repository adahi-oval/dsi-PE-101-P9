import * as fs from 'fs';
import { BagReader } from './BagReader.js';

export interface ElementJSON {
  numElemento: number,
  peso: number,
  beneficio: number
}

export interface BagJSON {
  capacidad: number,
  numElementos: number,
  elementos: ElementJSON[]
}

export class JSONReader extends BagReader {

  constructor(protected filename: string) {
    super(filename);
  }

  public procesar(): [number[], number[]] {
    
    const beneficios: number[] = [];
    const pesos: number[] = [];

    const contenido: string = fs.readFileSync(this.filename, 'utf-8');
    const data: BagJSON = JSON.parse(contenido);

    this.bagCapacity = data.capacidad;
    this.numElements = data.numElementos;

    for (let i = 0; i < data.elementos.length; i++) {
      const element = data.elementos[i];
      beneficios.push(element.beneficio);
      pesos.push(element.peso);
    }

    return [beneficios, pesos];
  }

  protected printFilename(): void {
    console.log(this.filename);
  }

}