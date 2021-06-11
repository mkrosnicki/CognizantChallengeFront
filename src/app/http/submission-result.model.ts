import {SubmissionResultTypeEnum} from '../model/submission-result-type.enum';

export class SubmissionResult {

  constructor(public result: SubmissionResultTypeEnum, public message: string) {
  }
}
