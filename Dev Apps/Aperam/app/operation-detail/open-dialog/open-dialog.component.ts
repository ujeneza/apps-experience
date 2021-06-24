
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MetalMovementService } from '../services/metal-movement/metal-movement.service';
import { MetalUnitService } from '../services/metal-unit/metal-unit.service';

@Component({
  selector: 'app-open-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})
export class OpenDialogComponent implements OnInit {
  dialogData: openDialogData;
  hiddenSaveMvt: boolean;
  hiddenCopyMvt: boolean;
  hiddenDeleteMvt: boolean;
  hiddenSaveMu: boolean;
  hiddenCopyMu: boolean;
  hiddenDeleteMu:boolean;


  constructor(

    private metalMovementService: MetalMovementService,
    public dialogRef: MatDialogRef<OpenDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.dialogData = data;
  }

  ngOnInit() {
    this.hideSaveMvt();
    this.hideCopyMvt();
    this.hideDeleteMvt();
    this.hideSaveMu();
    this.hideCopyMu();
    this.hideDelete();

  }



  hideSaveMvt() {
    if (this.dialogData.functionnality === "saveMvt") {
      this.hiddenSaveMvt = true;
    } else {
      this.hiddenSaveMvt = false;
    }
  }

  hideCopyMvt() {
    console.log(this.dialogData.functionnality, "this.dialogData.functionnality");
    if (this.dialogData.functionnality === "copyMvt") {
      this.hiddenCopyMvt = true;
    } else {
      this.hiddenCopyMvt = false;
    }
  }

  hideDeleteMvt() {
    if (this.dialogData.functionnality === "deleteMvt") {
      this.hiddenDeleteMvt = true;
    } else {
      this.hiddenDeleteMvt = false;
    }
  }

  hideSaveMu() {
    if (this.dialogData.functionnality === "saveMu") {
      this.hiddenSaveMu = true;
    } else {
      this.hiddenSaveMu = false;
    }
  }

  hideCopyMu() {
    if (this.dialogData.functionnality === "copyMu") {
      this.hiddenCopyMu = true;
    } else {
      this.hiddenCopyMu = false;
    }
  }

  hideDelete() {
    if (this.dialogData.functionnality === "deleteMu") {
      this.hiddenDeleteMu = true;
    } else {
      this.hiddenDeleteMu = false;
    }
  }

  save() {
    this.dialogRef.close(this.dialogData);
  }

  cancel() {
    this.dialogRef.close();
  }

}
