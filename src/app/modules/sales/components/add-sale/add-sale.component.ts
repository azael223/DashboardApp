import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as signalR from '@microsoft/signalr';
import { HttpClient } from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { SignalrService } from 'src/app/services/signalr.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.scss'],
})
export class AddSaleComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  ngOnInit(): void {
    this.initializeConnection();
  }
  private initializeConnection(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSaleModal, {
      width: '300px',
    });
  }
}

@Component({
  selector: 'add-sale-modal',
  templateUrl: 'add-sale-modal.html',
})
export class AddSaleModal implements OnDestroy {
  constructor(
    public dialogRef: MatDialogRef<AddSaleModal>,
    private _api: ApiService,
    private _fb: FormBuilder,
    private _snack: MatSnackBar
  ) {}
  private onDestroy$ = new Subject<any>();
  public form = this._fb.group({
    producto: new FormControl(null, [Validators.required]),
    importe: new FormControl(null, [Validators.required]),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
  addSale() {
    try {
      if (this.form.invalid) throw 'Formulario incorrecto';
      this._api.Ventas.create(this.form.value)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe((data) => {
          this._snack.open('Venta creada');
          this.onNoClick();
        });
    } catch (error: any) {
      this._snack.open(error);
    }
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
