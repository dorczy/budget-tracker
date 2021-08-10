import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit-categories',
  templateUrl: './edit-categories.component.html',
  styleUrls: ['./edit-categories.component.scss']
})
export class EditCategoriesComponent implements OnInit {

  updating: boolean = false;

  category: Category = new Category();
  categoryId: string = "";
  routerName: string = this.categoryService.routerName;

  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.categoryId = params._id === undefined ? "0" : params._id,
      err => console.error(err)
    );
    this.categoryService.get(this.categoryId).subscribe(
      category => this.category = category,
      err => console.error(err)
    );
  }

  saveCategory(category: Category): void {
    this.updating = true;

    if (category._id === "") {
      this.categoryService.create(category).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen hozzáadott egy kategóriát!');

    } else if (category._id !== "") {
      this.categoryService.update(category).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen módosított egy kategóriát!');
    }
  }

  deleteCategory(category: Category): void {
    if (confirm('Biztos, hogy törli?')) {
      this.categoryService.delete(category).subscribe(
        () => this.router.navigate([this.routerName]),
        err => console.error(err)
      );
      alert('Sikeresen törölt egy kategóriát!')
    } else {
      return
    }
  }

  goBack(): void {
    if (confirm('Biztos, hogy visszalép?')) {
      this.router.navigate([this.routerName]);
    } else {
      return
    }
  }

}
