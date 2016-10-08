*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

A small project to investigate react-redux performance, specifically how a composite store affects the performance of its component consumers. I started thinking about this after reading the following https://github.com/reactjs/redux/issues/1303

###1 Oct 2016
Initial creation of reducers with simple tests.

###8 Oct 2016
Added an extra component that displays the current time. This is extremely arbitary, and it uses the redux store to get the current time, however the thinking here is to replicate a use case where, say, a status panel is updated based on the store and is very dynamic (say, polling an api at a small interval). The idea is to see how this affects other components that depend on the store.
