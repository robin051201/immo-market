import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { DialogEnum } from "../../pages/offers-overview/offers-overview.component";

@Injectable({
    providedIn: "root"
})
export class DetailsViewService {

    private sub0: Subject<{ id: number, type: DialogEnum }> = new Subject<{ id: number, type: DialogEnum }>();
    private sub1: Subject<void> = new Subject<void>();

    openDialog(propertyId: number, type: DialogEnum): void {
        this.sub0.next({ id: propertyId, type: type });
    }

    closeDialog(): void {
        this.sub1.next();
    }

    onOpenDialog(): Observable<{ id: number, type: DialogEnum }> {
        return this.sub0.asObservable();
    }

    onCloseDialog(): Observable<void> {
        return this.sub1.asObservable();
    }
}
