import {AbstractControl, ValidatorFn} from '@angular/forms';

export function validateGameDate(validGame: string[]): ValidatorFn {
  return (c: AbstractControl): object => {
    if (c.value && validGame.indexOf(c.value) === -1) {
      return {
        city: {
          actualValue: c.value,
          validCities: validGame
        }
      };
    }
    return null;
  };
}
