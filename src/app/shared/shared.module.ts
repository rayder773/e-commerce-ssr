import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './_pages/page-not-found/page-not-found.component';
import {SidebarComponent} from './_components/sidebar/sidebar.component';
import {BreadcrumbsComponent} from './_components/breadcrumbs/breadcrumbs.component';
import {InfoPopupComponent} from './_components/info-popup/info-popup.component';
import {TreeNgComponent} from './_components/tree-ng/tree-ng.component';
import {RouterModule} from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    InfoPopupComponent,
    TreeNgComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NzTableModule,
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PageNotFoundComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    TreeNgComponent,
    NzTableModule
  ]
})
export class SharedModule {
}
