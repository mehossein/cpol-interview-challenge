// Angular
import { Component, OnInit } from '@angular/core';

// App
import { USER_DATA } from '@app/shared/constants';
import { DashboardApi } from '@app/dashboard/Api';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SafeData } from '@app/dashboard/shared/interface';
import { User } from '@app/authentication/shared/interface';

@Component({
  selector: 'cpol-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, SafeData {
  userData!: User;
  private _editMode: boolean = false;
  form!: FormGroup;

  get editMode(): boolean {
    return this._editMode;
  }

  isDataSaved(): boolean {
    return this.form.dirty;
  }

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _dashboardApi: DashboardApi
  ) {}

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem(USER_DATA) as string);
  }

  changeToEditMode(): void {
    this._initForm();
    this.chagenEditMode(true);
  }

  onSave(): void {}

  onCancel(): void {
    this.form.reset();
    this.chagenEditMode(false);
  }

  chagenEditMode(status: boolean): void {
    this._editMode = status;
  }

  private _initForm(): void {
    if (!this.form?.controls)
      this.form = this._formBuilder.group({
        first_name: [null],
        last_name: [null],
        bio: [null],
      });
  }
}
