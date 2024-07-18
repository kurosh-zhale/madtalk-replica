import { CommonModule } from '@angular/common';
import { Component, signal, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { CardComponent } from './layouts/card/card.component';
import { TableComponent } from './layouts/table/table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NzButtonComponent,
    NzDropDownModule,
    CommonModule,
    NzCascaderModule,
    NzSelectModule,
    CardComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  layout = signal<'table' | 'card'>('card');

  groupsCascader: NzCascaderOption[] = [
    {
      value: 0,
      label: 'تست دپارتمان',
      children: [
        {
          value: 'دوازدمم ریاضی',
          label: 'دوازدمم ریاضی',
        },
      ],
    },
    {
      value: 1,
      label: 'عمومی',
      children: [
        {
          value: 'کامپیوتر',
          label: 'کامپیوتر',
        },
        {
          value: 'ششم',
          label: 'ششم',
        },
        {
          value: 'هفتم',
          label: 'هفتم',
        },
        {
          value: 'هشتم',
          label: 'هشتم',
        },
        {
          value: 'نهم',
          label: 'نهم',
        },
      ],
    },
  ];

  constructor() {}

  changeLayout(layout: 'table' | 'card') {
    this.layout.set(layout);
  }
}
