import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

type Meeting = {
  date: string;
  time: string;
  participants: string;
  description: string;
};

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    CommonModule
  ],
})
export class AgendamentoComponent {
  meetingForm: FormGroup;
  editingMeeting: boolean = false;
  dataSource = new MatTableDataSource<Meeting>([]);
  displayedColumns: string[] = ['date', 'time', 'participants', 'description', 'actions'];

  constructor(private fb: FormBuilder) {
    this.meetingForm = this.fb.group({
      date: ['', Validators.required],
      time: ['', Validators.required],
      participants: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  addMeeting(): void {
    const newMeeting: Meeting = this.meetingForm.value;
    this.dataSource.data = [...this.dataSource.data, newMeeting];
    this.meetingForm.reset();
  }

  saveChanges(): void {
    console.log('Alterações salvas');
    this.editingMeeting = false;
    this.meetingForm.reset();
  }

  editMeeting(meeting: Meeting): void {
    this.editingMeeting = true;
    this.meetingForm.patchValue(meeting);
  }

  cancelEditing(): void {
    this.editingMeeting = false;
    this.meetingForm.reset();
  }

  deleteMeeting(meeting: Meeting): void {
    this.dataSource.data = this.dataSource.data.filter(m => m !== meeting);
  }
}
