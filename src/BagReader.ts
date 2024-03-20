/*
  Suponga que tiene que utilizar un algoritmo para extraer información de ficheros que contienen información sobre una instancia del problema de la mochila. El inconveniente es que los ficheros se encuentran en diferentes formatos: CSV y JSON.
  
  El formato de uno de los ficheros CSV es el siguiente. En la primera línea, un valor numérico que especifica la capacidad de la mochila; en la segunda línea, un valor que especifica el número de elementos n de la mochila; y, a continuación, n líneas, donde cada línea tiene el número de elemento, peso y beneficio separado por comas.
  
  El formato de uno de los ficheros JSON es el siguiente: una propiedad "capacidad", con la capacidad de la mochila, una propiedad "numElementos", con el número de elementos de la mochila y, luego, una propiedad "elementos" que consiste en un array de objetos, donde cada objeto contiene las propiedades "númElemento", "peso" y "beneficio".
  
  Escriba una clase con un método de plantilla que consista en un único paso "procesar", que lleve a cabo la lectura de un fichero CSV o un fichero JSON con los formatos anteriormente especificados y que devuelva dos arrays: uno con los beneficios de los elementos de la mochila y otro con los pesos de los elementos de la mochila. El método de plantilla también deberá hacer uso de dos métodos de enganche o hooks.
  
  Dado que tendrá que seguir una metodología TDD/BDD, implemente integración continua en su proyecto a través de un flujo de trabajo de GitHub Actions, esto es, con cada push realizado sobre su repositorio, ejecute las pruebas en entornos que cuenten con diferentes versiones de Node.js.
  
  Dado que tendrá que medir el cubrimiento de su código fuente haciendo uso de Instanbul, implemente un flujo de trabajo de GitHub Actions que envíe la información de cubrimiento generada a Coveralls con cada push llevado a cabo sobre su repositorio.
  
  Analice la calidad y seguridad del código fuente desarrollado mediante Sonar Cloud gracias a la implementación de un flujo de trabajo de GitHub Actions que se dispare con cada push llevado a cabo con su repositorio.
  
  Por último, recuerde que deberá incluir la documentación de su proyecto haciendo uso de TypeDoc.
*/

/**
 * Clase Base para método Template
 */
export abstract class BagReader {

  protected bagCapacity: number;
  protected numElements: number;

  constructor(protected filename: string) {}

  /**
   * Método que deben implementar las subclases
   */
  protected abstract procesar(): [number[], number[]];

  /**
   * Métodos hook
   */
  protected printFilename(): void {};
  protected printStatus(): void {};

}