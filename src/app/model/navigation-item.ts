export class NavigationItem {
  label: string = '';
  routerLink: string = '';
  icon: string = '';
  role: number = 0;
  dropdownItem?: boolean = false;
  dropdown?: NavigationItem[];
}
