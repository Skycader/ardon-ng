import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatInputModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [...MaterialComponents],
})
export class MaterialModule {}
