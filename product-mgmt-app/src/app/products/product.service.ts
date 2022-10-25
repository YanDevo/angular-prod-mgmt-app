import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { Iproduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = "assets/api/products/products.json";

    constructor(private http: HttpClient) {

    }

    // makeing get request 
    getProducts(): Observable<Iproduct[]>  {
        return this.http.get<Iproduct[]>(this.productUrl)
        .pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        ); 
    }


    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.log(errorMessage);

        return throwError(()=>errorMessage);

    }



}