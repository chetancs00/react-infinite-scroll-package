# React Infinite Scroll Package

A reusable React component for implementing infinite scroll using the Intersection Observer API.

## Installation

Install the package via npm:

```bash
npm install react-infinite-scroll-package

Usage
Here is an example of how to use the InfiniteScrollList component in your React application.

Step 1: Import the Component
Import the InfiniteScrollList component from the package.
import React from 'react';
import InfiniteScrollList from 'react-infinite-scroll-package';
Step 2: Define Your Fetch Function
Define an asynchronous function that fetches data. This function should take a page parameter and return an array of items.
async function fetchItems(page) {
  const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10}`);
  const data = await response.json();
  return data.products;
}
Step 3: Define Your Render Function
Define a function that renders each item. This function should take an item and an index as parameters.

function renderItem(product, index) {
  return (
    <div key={product.id} style={{ background: "linear-gradient(90deg, rgba(4,97,159,1) 2%, rgba(0,0,0,1) 100%)", marginBottom: "20px", borderRadius: "20px" }}>
      <div style={{ height: "200px", width: "200px" }}>
        <img src={product.thumbnail} style={{ width: "100%", margin: "10px", height: "50%", objectFit: "cover" }} />
        <div style={{ width: "100%" }}>
          {product.title}
        </div>
      </div>
    </div>
  );
}
Step 4: Use the InfiniteScrollList Component
Use the InfiniteScrollList component in your React component, passing the fetchItems and renderItem functions as props. You can also customize the loader component.

function App() {
  return (
    <InfiniteScrollList
      fetchItems={fetchItems}
      renderItem={renderItem}
      loader={<div className="loader" style={{ textAlign: "center" }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>}
    />
  );
}

export default App;


API
InfiniteScrollList Props
fetchItems: A function that fetches items. It should take a page parameter and return an array of items.
renderItem: A function that renders an item. It should take an item and an index as parameters.
loader: A React element that will be displayed while loading more items.
threshold (optional): A number between 0 and 1 indicating the percentage of the target's visibility the observer's callback should be executed (default is 1.0).


Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs or features.


License
This project is licensed under the MIT License. See the LICENSE file for details.


`https://github.com/chetancs00/react-infinite-scroll-package.git`
