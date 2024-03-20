import * as fs from 'fs';
import { BagReader } from "./BagReader.js";

export class CSVReader extends BagReader {

    constructor(protected filename: string) {
      super(filename);
    }
  
    public procesar(): [number[], number[]] {
      
      const beneficios: number[] = [];
      const pesos: number[] = [];
  
      const contenido: string = fs.readFileSync(this.filename, 'utf-8');
      this.printStatus();
      const lineas: string[] = contenido.split('\n');
  
      this.bagCapacity = parseInt(lineas[0]);
      this.numElements = parseInt(lineas[1]);
  
      for (let i = 2; i < lineas.length; i++) {
        const line = lineas[i];
        const data: string[] = line.split(',');

        pesos.push(parseInt(data[1]));
        beneficios.push(parseInt(data[2]));
      }
      
      return [beneficios, pesos];
    }
  
    protected printStatus(): void {
      console.log('Archivo leído con éxito.');
    }
  
  }