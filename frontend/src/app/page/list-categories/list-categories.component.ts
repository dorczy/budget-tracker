import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { Expense } from 'src/app/model/expense';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss']
})
export class ListCategoriesComponent implements OnInit {

  categoriesList$: Observable<Category[]> = this.categoryService.getAll();

  constructor(
    private categoryService: CategoryService,
  ) { }

  ngOnInit(): void {
  }

}
