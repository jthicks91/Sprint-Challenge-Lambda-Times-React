 What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

    -Thet are used to verify that one is receiving the appropiate data type in as props to react components. Thus, this helps catch errors and so that one can be sure that the data is the type of data one is expecting. 

 Describe a life-cycle event in React?
    -A life cycle event in React is a method that can be used on a React class component where one can run code before or after certain events happen. This includes events such as componentDidUpdate which allows you to execute code when the components state or props are being updated.

 Explain the details of a Higher Order Component?
    -A HOC is a component that is accpeted as an input for one or more other components and then returns a class component. This is useful for building in conditional logic for rendering a specific component based on the state of ones application.

 What are three different ways to style components in React? Explain some of the benefits of each.

    1. One way to style components is to add className to elements and then importing CSS styles that references those specific classes as usual.

    2. inline styling such as style{{background: red}} - this is for a very high levle of specificity of ones styles within components directly inline;

    3. styled components is the last way to style components in which one can include all of the styling inside a component that can be extended by creating a new component based on a previously styled component for maximum efficiency.

