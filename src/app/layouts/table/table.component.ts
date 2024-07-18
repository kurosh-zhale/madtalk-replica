import { Component, input } from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NzTableModule, NzButtonModule, NzDropDownModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  data_list = input.required<any>();
}
