/*
NOTES:
 - how to write in regular js
 - var product = 'Socks'
 - el: stands for element / to connect to html elements.
 - Vue instance is the heartbeat of a Vue application.
 - Vue instance has a variety of optional properties.
 - The properties are used to store data and perform actions.
 - Properties are used to connect and perform actions in the DOM.
 - The {{ }} double syntax used in HTML to display instace value is called and Expression.
 - {{ }} used to produce or evaluate a value.
 - {{ }} can be used to add a character, 
 {{ product + '?'}}
 - {{ }} can be used to add number or combine values, 
 {{ product + '?'}} / {{ firstName + '' + lastName}}
 - {{ }} can be used to perform conditional logic with a ternary operator
 {{ clicked ? true : false }}
 - {{ }} can run methods on your data,
 {{ message.split('').reverse().join('') }}


 Attribute Binding:
- v-bind: // creates a bond between html attribute and the data 
- v-bind: dynamically binds an attribute to an expression
- expression is in the quotes " "
- v-bind: short-cut :alt="expression"
- attribuuts you can bind to 
:alt="expression"
:href="expression"
:title="expression"
:class="expression"
:style="isStyled"
:disabled="isDisabled"

Conditional Rendering
- v-if=" " evaluates if the conditon is true 
- v-else
- v-else-if
- We can combine the v-if directive with its sister directive v-else to display another element as the fallback if the first condition turns out to be falsey.
- It’s worth noting that you don’t always need to pair v-if with v-else. There are plenty of use cases where you don’t need a fallback element to render. However, in these cases, it is sometimes a better option to use the v-show directive.
- The v-show directive is used for toggling an element’s visibility instead of adding and removing the element from the DOM entirely, like v-if does.
- 
<p v-if="inventory > 10">In Stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
<p v-else>Out of Stock</p>
- if the expression in the quotes evaluates to a truthy value, the element will display.
- v-show=" " display when data is true and not display if false 

LIST RENDERING:
<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
- using dot notation to print out each variant as we loop through the variants array.
Key Attribute: An essential for list items
By saying :key="variant.id", we’re using the shorthand for v-bind to bind the variant’s id to the key attribute. This gives each DOM element a unique key so that Vue can grasp onto the element and not lose track of it as things update within the app.
This provides some performance improvements, and later down the line, if you’re doing something like animating your elements, you’ll find that the key attribute really helps Vue effectively manage your elements as they move around the DOM.
 */

var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: "img/raider_socks.jpeg",
    link: "https://www.raiders.com/",
    inStock: "true",
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "sliver",
      },
      {
        variantId: 2235,
        variantColor: "black",
      },
    ],
    price: "100",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
});

/*
NOTES:
EVENT HANDLING:


*/
