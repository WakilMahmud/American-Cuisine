// eslint-disable-next-line no-unused-vars
import React from "react";

const Blog = () => {
	return (
		<div className="w-4/5 mx-auto py-8 text-justify">
			<h1 className="text-3xl font-bold mb-8 text-center">Welcome to Our Blog</h1>

			<div className="my-8 border rounded-lg p-4 bg-gray-50">
				<h2 className="text-xl font-bold mb-4">1. Tell us the differences between uncontrolled and controlled components.</h2>
				<p className="mb-4">
					Uncontrolled components are form elements that manage their own state internally, without relying on React to manage their value. The value
					of an uncontrolled component is controlled by the DOM, not by React. <br />
					<br />
					In contrast, controlled components are entirely controlled by React. The value of a controlled component is stored in the state of a React
					component and is updated whenever the user interacts with the component. The main advantage of controlled components is that they give you
					more control over the state of your form elements, but they may require more code and may be less performant than uncontrolled components in
					some cases.
				</p>
			</div>

			<div className="my-8 border rounded-lg p-4 bg-gray-50">
				<h2 className="text-xl font-bold mb-4">2. How to validate React props using PropTypes?</h2>
				<p className="mb-4">
					To validate React props using PropTypes, you need to import the PropTypes library from the prop-types package and define the propTypes for
					your component by adding a propTypes object to your component class. You can use a variety of PropTypes validators to validate each prop,
					such as string, number, bool, and shape. Additionally, you can use the <strong>`isRequired`</strong> modifier to specify that certain props
					are required and must be passed to the component. React will issue a warning in the console if a prop is passed to the component that does
					not match its specified PropTypes validator, which can be useful for catching bugs and ensuring that your components receive the correct
					props.
				</p>
			</div>

			<div className="my-8 border rounded-lg p-4 bg-gray-50">
				<h2 className="text-xl font-bold mb-4">3. Tell us the difference between nodejs and express js.</h2>
				<p className="mb-4">
					Node.js is a runtime environment that allows developers to run JavaScript code outside of a web browser, while Express.js is a web
					application framework built on top of Node.js. <br />
					<br /> Node.js provides low-level features for building high-performance, scalable applications using JavaScript, while Express.js provides
					a set of higher-level features and tools, such as routing and middleware, to make it easier to build web applications and APIs quickly and
					easily. <br />
					<br /> In short, Node.js provides the runtime environment, while Express.js provides the framework for building web applications and APIs
					using JavaScript.
				</p>
			</div>

			<div className="my-8 border rounded-lg p-4 bg-gray-50">
				<h2 className="text-xl font-bold mb-4">4. What is a custom hook, and why will you create a custom hook?</h2>
				<p className="mb-4">
					A custom hook is a reusable function that encapsulates complex logic or state management using one or more built-in React hooks. Custom
					hooks can help improve the reusability, abstraction, testability, and consistency of a React application. By abstracting away complex logic
					or state management into a custom hook, developers can make their code more reusable and maintainable, without having to repeat the same
					code in multiple components. <br />
					<br />
					Custom hooks can be used to implement a variety of functionality in a React application and are a powerful tool for building scalable,
					maintainable code.
				</p>
			</div>
		</div>
	);
};

export default Blog;
