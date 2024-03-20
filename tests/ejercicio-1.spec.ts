import 'mocha';
import {expect} from 'chai';
import { JSONReader, ElementJSON, BagJSON } from '../src/JSONReader.js';
import { CSVReader } from '../src/CSVReader.js';

describe('Template con BagReader, JSONReader y CSVReader', () => {

  const jsonReader1: JSONReader = new JSONReader('/home/usuario/ejerciciosPE/p9/tests/test.json');
  const csvReader1: CSVReader = new CSVReader('/home/usuario/ejerciciosPE/p9/tests/test.csv');

  const jsonArray1: [number[], number[]] = jsonReader1.procesar();
  const csvArray1: [number[], number[]] = csvReader1.procesar();
  console.log(csvArray1)

  it("JSONReader funciona correctamente", () => {
    expect(jsonArray1[0]).to.deep.eq([1,2,3,4]);
    expect(jsonArray1[1]).to.deep.eq([2,4,1,3]);
  });

  it("CSVReader funciona correctamente", () => {
    expect(csvArray1[0]).to.deep.eq([1,2,3]);
    expect(csvArray1[1]).to.deep.eq([4,1,5]);
  });

});