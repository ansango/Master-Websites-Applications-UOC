import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { userNationalities } from 'src/app/Shared/Enums/publicEnums';

/**
 * Función que comprueba que los dos strings que hacen referencia a dos formControls que forman
 * parte del formGroup son inguales.
 * @return "equalValue": message si no son iguales, null en caso contrario
 */
export class CheckValidator {
  public static equalValue(targetKey: string, toMatchKey: string): ValidatorFn {
    return (group: FormGroup): {[key: string]: any | null} => {
      const target = group.controls[targetKey];
      const toMatch = group.controls[toMatchKey];
      if (target.dirty && toMatch.dirty) {
        const isMatch = target.value === toMatch.value;
        const message = targetKey + ' != ' + toMatchKey;
        return !isMatch ? {'equalValue': message} : null;
      }
      return null;
    };
  }

  /**
   * Función que comprueba que el formControl pasado por parámetro tenga un formato de fecha dd/mm/yyyy.
   * @return "errorFormatDate": true si el valor pasado tiene formato incorrecto, null en caso contrario
   */
  public static checkFormatDate(control: FormControl): { [key: string]: any } {
    let ptDatePattern =  /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;

    if ((control.value !== '') && (!control.value.match(ptDatePattern))){
      return { "errorFormatDate": true };
    }
    else
    {
      return null;
    }
  }

  /**
   * Función que comprueba si el formControl pasado por parámetro es mayor de cero.
   * @return "errorLessZero": true si el valor pasado es menor de cero, null en caso contrario
   */
  public static checkLessZero(control: FormControl): { [key: string]: any } {
    if ((control.dirty) && (Number(control.value) < 0)){
      return { "errorLessZero": true };
    }
    else
    {
      return null;
    }
  }

  /**
   * Función que comprueba que el NIF tenga un formato correcto.
   * @return 'errorNIF': true si error, null en caso contrario
   */
  public static checkNIF(nifKey: string, nationalityKey: string): ValidatorFn {
    return (group: FormGroup): {[key: string]: any | null} => {
      const target = group.controls[nifKey];
      const nationality = group.controls[nationalityKey];
      if ((target.dirty) && (target.value !== '') && (nationality.value === userNationalities.ES))  {
        let error = false;
        const RegularNIFexpresion = /^\d{8}[a-zA-Z]$/;
        // Se comprueba que el NIF esté compuesto por 8 letras y un caracter
        if ( RegularNIFexpresion.test (target.value) === true )
        {
          // Se extrae el número del NIF
          let number = target.value.substr(0, target.value.length - 1);
          // y la letra
          const lett = target.value.substr(target.value.length - 1, 1);
          // Se hace la operación de módulo entre el número extraído (variable number) y 23
          number = number % 23;
          let letter = 'TRWAGMYFPDXBNJZSQVHLCKET';
          // Se coge un substring de un solo caracter de la cadena de letras anterior,
          // que empiece en la posición marcada por el número que se obtiene de la operación de módulo
          letter = letter.substring(number, number + 1);
          // La letra escogida de la cadena de letras debe ser igual a la letra introducida en form
          if ( letter !== lett.toUpperCase() )
          {
            error = true;
          }
          else
          {
            error = false;
          }
        }
        else
        {
          error = true;
        }
        return error ? {'errorNIF': true} : null;
      }
      return null;
    };
  }

}