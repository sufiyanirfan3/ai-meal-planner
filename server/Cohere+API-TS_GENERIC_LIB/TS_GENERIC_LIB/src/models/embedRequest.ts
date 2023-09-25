/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';
import { TruncateEnum, truncateEnumSchema } from './truncateEnum';

export interface EmbedRequest {
  /** An array of strings for the model to embed. Maximum number of texts per call is `96`. We recommend reducing the length of each text to be under `512` tokens for optimal quality. */
  texts: string[];
  /**
   * The identifier of the model. Currently available models are `embed-english-light-v2.0`, `embed-multilingual-v2.0` and `embed-english-v2.0` (default). Smaller "light" models are faster, while larger models will perform better. [Custom models](/docs/training-custom-models) can also be supplied with their full ID.
   * Models Embedding Names:
   * * `embed-english-light-v2.0` 1024
   * * `embed-english-v2.0` 4096
   * * `embed-multilingual-v2.0` 768
   */
  model?: string;
  truncate?: TruncateEnum;
}

export const embedRequestSchema: Schema<EmbedRequest> = object({
  texts: ['texts', array(string())],
  model: ['model', optional(string())],
  truncate: ['truncate', optional(truncateEnumSchema)],
});