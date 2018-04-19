import { Component, OnInit, Inject } from '@angular/core';
import { Execution } from '../models/execution';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  executions: Execution[] = [
    { id: '1', name: 'Regression', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '2', name: 'Neural Network', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '3', name: 'Clustering', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '4', name: 'Classification', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '5', name: 'Recommendation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '6', name: 'Reinforcement', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '7', name: 'Anomaly detection', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '8', name: 'Density estimation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '9', name: 'Regression', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' },
    { id: '10', name: 'Neural Network', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare turpis mattis tellus sodales posuere. Mauris ac nunc dictum, tincidunt erat in, commodo nisi.', status: 'Running', image: 'https://material.angular.io/assets/img/examples/shiba2.jpg' }
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openLogDialog(id): void {
    console.log(id);
    const dialogRef = this.dialog.open(DashboardLogDialog, {
      width: '1024px',
      data: { id: id }
    });
  }

  addPipeline() {
    const dialogRef = this.dialog.open(DashboardAddPipelineDialog);
  }
}

@Component({
  selector: 'dashboard-log-dialog',
  templateUrl: 'dashboard-log-dialog.html'
})
export class DashboardLogDialog {

  constructor(
    public dialogRef: MatDialogRef<DashboardLogDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'dashboard-add-pipeline-dialog',
  templateUrl: 'dashboard-add-pipeline-dialog.html'
})
export class DashboardAddPipelineDialog {
  algorithmSelectionFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.algorithmSelectionFormGroup = this.formBuilder.group({
      alogrithm: ['', Validators.required]
    });
  }

  get alogrithm() {
    return this.algorithmSelectionFormGroup.get('alogrithm');
  }
}