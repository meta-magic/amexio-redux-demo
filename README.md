# Redux + Angular + Amexio

### Angular without Redux
SPA is great for building modern web-based applications. However as more and more applications are being transferred into the browser the complexity for managing the state of Application becomes complex.

Angular, are using a component-based approach to divide the application into smaller units. But in angular component has a logic which calls the service and set data to localised properties which is eventually used in View Template.

As a complexity of application start to increase components needs to share the data. This we achive by
- Defining component tree structure
- Define shared service
- OR do event handling

Above approach works if you have application with few components, if number of components are more then you application is going to look like Spaghetti :). Some of drawbacks are
 - You start defining more input/out properties to component. Which makes components more inflexible as it is now dependent of someone else.
 - If component state is changed it needs to notify other
 - As there are lot of component dependency, data flow might become unpredicatable
 - Not easy to state the component
 - Adding new feature is goining to be time consuming
 
To overcome with above issue we can use Centralized application state management using Redux.

## Redux 
Redux is librarby which helps to manage the state of the Application. Redux is a predictable state container for JavaScript apps which makes it possible to use a centralized state management in your application.

### Benifits of using Redux
- Predicatable application state
- Decoupled architecture
- Application testing
- Easy yo add new features
- [Great dev tooling](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
- Single source of truth - The state of your whole application is stored in an object tree within a single store
- State is read-only - The only way to change the state is to emit an action, an object describing what happened
- 

### When to use Redux ?
- Multiple place having copies of same data
- Multiple view that need to work on same data and should also be in sync
- Multiple user updating data
- Multiple actors updating same date

### Blocks of Redux
- Store : It is single JS object that contains state of Application. You can think store as database at client side
- Actions : Is plain JS object that represent something happend in application
- Reducer : It is pure function which represent how the of state application changes in reponse to the action. Reducer never modifies the state, instead it returns the new state

### Installing Redux
npm install redux @angular-redux/store --save


## Todo application 

<img width="1677" alt="screen shot 2019-02-12 at 3 42 47 pm" src="https://user-images.githubusercontent.com/23295769/52628251-4c0bc280-2edd-11e9-99a0-ce3afe936f35.png">

Demo Todo application consistof three components
- Add todo to store
- Display all todo's from store
- Display todo's count priority wise


### Thank you!

Chers
Happy learning :)

