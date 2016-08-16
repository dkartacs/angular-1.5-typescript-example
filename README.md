# Angular 1.5 with Typescript Example
Example components for angular 1.5 with typescript

### Basic separations you want to make:
#### Component
* The page should be a hierarchical tree of components. 
* Always think in html views/ dom structures first when splitting the page into components. And then think about the script.

#### Directives
* Only for very specific tasks (like adding onEnterButton functionality to dom element). 

#### Service
* For each Rest API root have at least one connector service on the angular side.
* Keep event handler services for each concern/ domain/ topic.
* Keep separate services to track shared models in your application. (for example the content of a shopping cart)
* Keep model class/ interface definitions in separate files

### Basic rules you wish to keep:
* You components can always be more granular :)
* Two way binding should only exist between the given view and its controller. Never between components/ directives
* Between components data always trickles down the tree with one-way binding. Events always bubble up as binded callback functions of the parent. Never do it the other way around.
* If an event is not just strictly between a parent and a child component then use a service to communicate the event.
* Do not use scope/ rootscope outside of testing (especially for event bus, or for sharing data)

### Rant :)
* Choose whatever framework or pseudo language it's still Javascript. It's still compiled and runned by volatile browsers. It lies and cheats, the points doesn't matter, the rules are always broken. So clean code and code quality in general is even more important then in a safer language.
* Good variable and component names are paramount.
* Separation is king
* Always expect that the next day a junior will read your code, and if you were not absolutely clear he will pester you all day :).
* When designing any service or component try to be as general as possible. So it could be reused

