import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, routes } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        MatDividerModule,
        MatDialogModule,
        MatTabsModule,
        MatTableModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatGridListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSortModule,
        MatStepperModule,
        MatTooltipModule,
        MatTreeModule
       } from '@angular/material';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { InfoTableComponent } from './generic-table/info-table/info-table.component';
import { TablePaginatorComponent } from './generic-table/table-paginator/table-paginator.component';
import { PipeTree } from './pipes/pipe-tree';
import { AnswerTableComponent } from './pages/answer-table/answer-table.component';
import { DialogConfirmComponent } from './components/dialog-confirm/dialog-confirm.component';
import { HeaderComponent } from './pages/header/header.component';
import { AppDialogNewItemComponent } from './components/app-dialog-new-item/app-dialog-new-item.component';
import { AppDialogContenComponent } from './components/app-dialog-conten/app-dialog-conten.component';
import { AppDialogEditComponent } from './components/app-dialog-edit/app-dialog-edit.component';


export const MATERIAL_COMPONENTS = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule,
  MatDividerModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    ContactComponent,
    FormularioComponent,
    GenericTableComponent,
    InfoTableComponent,
    TablePaginatorComponent,
    PipeTree,
    AnswerTableComponent,
    DialogConfirmComponent,
    HeaderComponent,
    AppDialogNewItemComponent,
    AppDialogContenComponent,
    AppDialogEditComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MATERIAL_COMPONENTS,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
   
  ],
  entryComponents: [AppDialogContenComponent,AppDialogEditComponent],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
