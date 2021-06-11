import { Pipe, PipeTransform } from '@angular/core';
import {SubmissionResultTypeEnum} from '../model/submission-result-type.enum';

@Pipe({
  name: 'submissionResultHeader'
})
export class SubmissionResultHeaderPipe implements PipeTransform {

  transform(value: SubmissionResultTypeEnum): string {
    let header;
    switch (value) {
      case SubmissionResultTypeEnum.CORRECT:
        header = 'Well done!';
        break;
      case SubmissionResultTypeEnum.WRONG_RESULT:
        header = 'Try again';
        break;
      case SubmissionResultTypeEnum.ERROR:
        header = 'Error';
        break;
      default:
        header = '';
    }
    return header;
  }

}
