import {CanMatchFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const CountryPageGuard: CanMatchFn = (route, segments) => {
  const id = segments[1].toString();
  if (!id || id.length < 2 || id.includes(',')) return inject(Router).navigate(['not-found']);
  return true;
};
