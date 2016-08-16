//You could use Rxjs or angulars own event handling, understand them Very well if you do. But 90% of the time this is what you need. 

namespace com.dkartacs.phone {
    export interface IObservable {
        subscribe(callback: Function): void;
        notify(value?: any): void;
    }
    
    class Observable implements IObservable {
        private eventBus: Function[] = [];
        
        constructor() {}
        
        subscribe(callback: Function) {
            this.eventBus.push(callback);
        }
        
        notify(value?: any): void {
            _.forEach(this.eventBus, (callback: Function) => {
                callback(value);
            });
        }
    }
}