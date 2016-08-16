namespace com.dkartacs.phone {
    import IHttpPromiseCallBackArg = ng.IHttpPromiseCallBackArg;
    import IPromise = ng.IPromise;
    import IHttpService = ng.IHttpService;
    
    export interface IOrderService {
        getOrders(): IPromise<IHttpPromiseCallBackArg<IOrder[]>>;
    }
    
    class OrderService implements IOrderService {
        static $inject: string[] = ['$http'];
        constructor (private $http: IHttpService) {}
        
        getOrders(): IPromise<IHttpPromiseCallBackArg<IOrder[]>> {
            return this.$http.get('orders').then((orderResponse: IHttpPromiseCallBackArg<IOrder[]>) => {
                return orderResponse.data;
            });
        }
    }
    
    angular
        .module('com.dkartacs.phone')
        .service('orderSerivce', OrderService);
}