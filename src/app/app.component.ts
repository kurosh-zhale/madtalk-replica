import { CommonModule } from '@angular/common';
import { Component, signal, viewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCascaderModule, NzCascaderOption } from 'ng-zorro-antd/cascader';
import { CardComponent } from './layouts/card/card.component';
import { TableComponent } from './layouts/table/table.component';
import { ClassesService } from './services/classes.service';
import { map } from 'rxjs/operators';

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

  classes_list = signal<any[] | null>(null);

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

  constructor(private service: ClassesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getClasses();
  }

  changeLayout(layout: 'table' | 'card') {
    this.layout.set(layout);
  }

  private getClasses() {
    this.service
      .getClassesList()
      .pipe(
        map((classes) => {
          return classes.result.map((class_object: any) => {
            return {
              name: class_object?.name,
              duration: class_object?.duration,
              schoo_book_str: class_object?.schoo_book_str,
              is_running: class_object?.is_running,
            };
          });
        })
      )
      .subscribe({
        next: (value) => {
          this.classes_list.set(value);
        },
        complete: () => {
          console.log('retrieved classes successfully', this.classes_list());
        },
        error(err) {
          throw Error(err.message);
        },
      });
  }
}
