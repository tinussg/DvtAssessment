import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
@NgModule({
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatProgressSpinnerModule,
  ]
})
export class MaterialModule {}
