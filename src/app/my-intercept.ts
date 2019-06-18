import { Injectable, Inject } from "@angular/core";
import { tap } from "rxjs/operators";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class MyIntercept implements HttpInterceptor{

    constructor(){
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
        //how to update the request Parameters
        //var text = JSON.parse(localStorage.getItem('sessionkey'));
        if(localStorage.getItem('sessionkey'))
          { 
           // console.log("Why am i Here");
            request = request.clone({
              /*  setHeaders: {
              Authorization: `Bearer ${localStorage.getItem('sessionkey')}`
              } */
            headers: request.headers.set("Authorization",' Bearer '+localStorage.getItem('sessionkey'))
          });
        }
        //logging the updated Parameters to browser's console
       // console.log("Before making api call : ", updatedRequest);
        console.log("Before api request: ",request);
        return next.handle(request).pipe(
          tap(
            event => {
              //logging the http response to browser's console in case of a success
              if (event instanceof HttpResponse) {
                console.log("api call success :", event);
              }
            },
            error => {
              //logging the http response to browser's console in case of a failuer
              if (event instanceof HttpResponse) {
                console.log("api call error :", event);
              }
            }
          )
        );
      }

}
