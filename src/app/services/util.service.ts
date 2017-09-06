import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor() { }

  public capitalize(word: string): string {
    return word.charAt(0).toUpperCase().concat(word.substring(1));
  }

}
