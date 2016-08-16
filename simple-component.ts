namespace com.dkartacs.phone.cart {
    import IComponent = angular.IComponentOptions;
    
    class OrderSelectionComponent implements IComponent {
        bindings: any = {};
        controller: any = OrderSelectionController;
        templateUrl: string = 'components/order/order-selection/order-selection.component.html';
    }
    
    class OrderSelectionController {
        showOrdersInCart: boolean = true;
        orders: IOrder[];
        
        static $inject: string[] = ['orderService', 'orderEventService'];
        constructor (private orderService: IOrderService, private orderEventService: IOrderEventService) {}
        
        $onInit(): void {
            this.orderService.getOrders().then((orders: IOrder[]) => {
                this.orders = orders;
            }
            
            this.orderEventService.subscribeItemAddedToCart((item: IItem)=> {
                this.addItem(item: IItem);
            }
        }
        
        private addItem(item: IItem) {
            //controller logic for adding an item to the cart
        }
    }
    
    angular
        .module('com.dkartacs.phone.cart')
        .component('spiOrderSelection', new OrderSelectionComponent());
}