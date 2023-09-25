/**
 * Cohere APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema } from '../schema';
import { FinishReasonEnum, finishReasonEnumSchema } from './finishReasonEnum';
import { Response, responseSchema } from './response';

export interface GenerationFinalResponse {
  isFinished: boolean;
  finishReason?: FinishReasonEnum;
  response: Response;
}

export const generationFinalResponseSchema: Schema<GenerationFinalResponse> = object(
  {
    isFinished: ['is_finished', boolean()],
    finishReason: ['finish_reason', optional(finishReasonEnumSchema)],
    response: ['response', lazy(() => responseSchema)],
  }
);
