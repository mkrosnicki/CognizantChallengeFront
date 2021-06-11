import {Component, OnInit} from '@angular/core';
import {TaskHttpService} from '../http/task-http-service';
import {Observable} from 'rxjs';
import {Task} from '../model/task.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SubmissionHttpService} from '../http/sumbission-http-service';
import {SubmissionResult} from '../http/submission-result.model';
import {SubmissionResultTypeEnum} from '../model/submission-result-type.enum';

@Component({
  selector: 'app-submission-page',
  templateUrl: './submission-page.component.html',
  styleUrls: ['./submission-page.component.css']
})
export class SubmissionPageComponent implements OnInit {

  tasks$: Observable<Task[]> = this.taskHttpService.fetchTasks();
  tasks: Task[] = [];
  selectedValue = null;
  taskSubmissionForm: FormGroup;
  error: string | null = null;
  correctSolutionMessage: string | null = null;
  wrongSolutionMessage: string | null = null;
  isSolutionBeingEvaluted = false;
  submissionResult: SubmissionResult | null = null;
  SubmissionResultType = SubmissionResultTypeEnum;

  initial = 'public class MyClass {\n' +
    '    public static void main(String args[]) {\n' +
    '        int x=10;\n' +
    '        int y=25;\n' +
    '        int z=x+y;\n' +
    '        System.out.println("Sum of x+y = " + z);    \n' +
    '        \n' +
    '    }\n' +
    '    \n' +
    '}';

  constructor(private taskHttpService: TaskHttpService, private submissionHttpService: SubmissionHttpService, public fb: FormBuilder) {
    this.taskSubmissionForm = this.fb.group({
      username: ['', [Validators.required]],
      task: ['', [Validators.required]],
      solution: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.taskHttpService.fetchTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.taskField.setValue(tasks[0].uuid, {
        onlySelf: true
      });
      this.setSolution(this.initial);
    });
  }

  onSubmit(): void {
    this.isSolutionBeingEvaluted = true;
    this.submissionResult = null;
    this.submissionHttpService.postSubmission(this.nameField.value, this.taskField.value, this.solutionField.value)
      .subscribe((value: SubmissionResult) => {
        this.isSolutionBeingEvaluted = false;
        this.submissionResult = value;
      }, (error) => {
        this.submissionResult = new SubmissionResult(SubmissionResultTypeEnum.ERROR, error);
        this.isSolutionBeingEvaluted = false;
      });
  }

  get nameField(): any {
    return this.taskSubmissionForm.get('username');
  }

  get taskField(): any {
    return this.taskSubmissionForm.get('task');
  }

  changeTask(e: Event): void {
    // @ts-ignore
    this.setTask(e.target.value);
  }

  setTask(taskId: string): void {
    this.taskField.setValue(taskId, {
      onlySelf: true
    });
  }

  get solutionField(): any {
    return this.taskSubmissionForm.get('solution');
  }

  setSolution(newSolution: string): void {
    this.solutionField.setValue(newSolution, {
      onlySelf: true
    });
  }

  getDescription(taskId: string): string {
    // @ts-ignore
    const task = this.tasks.find(value => value.uuid === taskId);
    return task != null ? task.description : '';
  }
}
