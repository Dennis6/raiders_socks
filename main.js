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
 */

//(1) Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

//(2) Add a link to your data object, and use v-bind to sync it up with an anchor tag in your HTML. Hint: you’ll be binding to the href attribute.

var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: "img/raider_socks.jpeg",
    link: "https://www.raiders.com/",
  },
});

/*
NOTES:
Conditional Rendering
- v-if=" " evaluates if the conditon is true 
- v-else

*/
