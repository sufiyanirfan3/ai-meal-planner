/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Result {
  languageName?: string;
  languageCode?: string;
}

export const resultSchema: Schema<Result> = object({
  languageName: ['language_name', optional(string())],
  languageCode: ['language_code', optional(string())],
});