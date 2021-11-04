/*
Implement a function, loggingDecorator(), that takes as argument another
function, factory(), that takes no arguments and returns a Widget object.
Decorate the given function so that whenever it is called, it logs "Widget
created" before returning a Widget object.
*/

type Widget = string;

function makeWidget(): Widget {
  return "Widget";
}

function loggingDecorator(factory: () => Widget): () => Widget {
  return () => {
    console.log("Widget created");
    return factory();
  };
}

console.log(makeWidget());
console.log(loggingDecorator(makeWidget)());
