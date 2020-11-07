//#region Definición de tipos creados por el usuario (clases, enumeraciones, ...)
/**
 * Definición de una clase
 *
 * Otras clases pueden EXTENDER / HEREDAR esta clase
 */
class Clase {
  public propiedadNumero: number;
  public propiedadString: string;
  public propiedadBooleana: boolean;
  public propiedadArray: Array<any>; // Array<any> es lo mismo que any[]
  // una tupla es un array con un número fijo de elementos y que pueden ser de distinto tipo
  public propiedadTupla: [number, string];
  // un mapa es una lista de pares clave-valor, es decir, un objeto js plano, pero con los tipos
  // predefinidos tanto de las claves como de los valores
  public propiedadMapa?: Map<string, any>;
  public propiedadOpcional?: any;
  public propiedadFuncion: (arg: any) => any;
  // sólo accesible desde una instancia de la clase Clase
  private propiedadPrivada: any;
  // sólo accesible desde una instancia de cualquier clase que extienda Clase
  protected propiedadProtected: any;

  constructor() {}

  // metodo con número de argumentos variables (mínimo dos, el resto de argumentos se guardan en un array)
  public metodo(arg0: any, arg1: any, ...rest: any[]): number {
    return rest.length;
  }
  // metodo sin return
  private metodoPrivado(): void {}
  protected metodoProtected(): boolean {
    return true;
  }
  public metodoArgumentosOpcionales(arg0?: any, arg1: any = {}): number {
    return 1;
  }
}

/**
 * Definición de una enumeración
 */
enum Enum {
  A,
  B,
  C,
  D,
}

/**
 * Definición de una interfaz
 *
 * Las clases pueden IMPLEMENTAR una interfaz
 * Una interfaz define un estándar que deberán seguir las clases que la implementen
 * Los métodos se implementan en la clase
 */
interface Interface {
  metodo1(arg0: any): void;
}

// Ejemplo de interfaz implementada
class ClaseImplementaInterface implements Interface {
  metodo1(arg0: any): void {
    // Los error y excepciones los veremos más adelante (si fuera necesario)
    throw new Error("Method not implemented.");
  }
}

/**
 * Definición de alias de tipos exitentes
 */
type Numero = number;
type Cadena = string;
type NumeroYCadena = number & string;
type NumeroOBooleano = number | boolean;
type MapaClaveStringValorNumero = Map<string, number>;
//#endregion
