import { Injectable } from '@angular/core';

import { default as CARD_TYPES, CardTypesContainer } from '@cc-project/lib/domain/card-types';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  private static readonly cardTypes: CardTypesContainer = CARD_TYPES;

  public static getCardType(ccNum: string): string | null {
    for (const [key, val] of Array.from(CreditCardService.cardTypes.entries())) {
      if (
        ccNum
          .split(new RegExp('[ \\-]'))
          .join('')
          .match(val)
      ) {
        return key;
      }
    }
    return null;
  }
}