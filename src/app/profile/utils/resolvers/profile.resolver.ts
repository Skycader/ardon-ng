import { ResolveFn } from '@angular/router';
import { of, switchMap, timer } from 'rxjs';

export const profileResolver: ResolveFn<string> = (route, state) => {
  return timer(1000).pipe(switchMap(() => of('some profile data')));
};
