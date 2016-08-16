namespace com.dkartacs.phone {
    export interface IOrderEventService {
        notifyItemAddedToCart(item: IItem): void;
        subscribeItemAddedToCart(callback: Function): void;
    }
    
    class OrderEventService implements IOrderEventService {
        orderEventObservable: IObservable = new Observable();
        static $inject: string = [];
        constructor() {}
        
        subscribeItemAddedToCart(callback: Function): void {
            this.orderEventObservable.subscribe(callback);
        }
        
        notifyItemAddedToCart(item: IItem): void {
            this.orderEventObservable.notify(item);
        }
    }
    
    angular
        .module('com.dkartacs.phone')
        .service('orderService', OrderEventService);
}