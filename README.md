*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

A small project to investigate react-redux performance, specifically how a composite store affects the performance of its component consumers. I started thinking about this after reading the following https://github.com/reactjs/redux/issues/1303

###1 Oct 2016
Initial creation of reducers with simple tests.

###8 Oct 2016
Added an extra component that displays the current time. This is extremely arbitary, and it uses the redux store to get the current time, however the thinking here is to replicate a use case where, say, a status panel is updated based on the store and is very dynamic (say, polling an api at a small interval). The idea is to see how this affects other components that depend on the store.

###9 Oct 2016
Refactoring to use react-redux and provide store to components rather than them just importing it. This has benefts for testing, meaning a store can be mocked and passed in. 

Step 1 is to remove individual imports of the store and pass it down via props to each container component. So, now each cmponent will access the store directly from its props:

~~~
 const { store } = props;
 store.dispatch(getInitial(props.numbersToShow));
 this.state = store.getState();
 store.subscribe(this.onStoreUpdate.bind(this));
~~~

Step 2 uses *connect()* to create the container components, requiring refactoring to create the appropriate mapping functions. The issue now is that as our *TimeContainer* is now stateless we ned to reinstroduce the timed action that updates the time. 

Continuous time updating is now restored. Took a simple approach - set up the *dispatch* action in the *mapDispatchToProps* function that will be invoked when setting up the component with *connect()*. Here we don't need any callbacks setting up to dispatch actions, but the function provides a neat hook with access to *dispatch* that allows us to raise the update action on an interval.

~~~
const mapDispatchToProps = (dispatch) => {
    setInterval(() => {
        dispatch(updateTime());
    }, 10);

    return {};
};
~~~
