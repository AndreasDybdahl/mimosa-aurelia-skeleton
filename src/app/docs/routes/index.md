<import from='app/docs/behaviors/sample'></import>

# Aurelia Value Converters
An overview of the [Aurelia](http://aurelia.io) framework's value
converter functionality.

This page is written using Aurelia and contains **live examples**.  The full
source is [here](https://github.com/jdanyow/aurelia-converters-sample).

## Data Binding

A short description of data-binding from the Aurelia
[docs](http://aurelia.io/docs.html):

*In Aurelia, user interface elements are composed of view and view-model
pairs. The view is written with HTML and is rendered into the DOM. The
view-model is written with JavaScript and provides data and behavior to
the view.  Aurelia's powerful databinding links the two pieces together
allowing changes in your data to be reflected in the view and vice versa.*

Check out the getting started video
[here](http://aurelia.io/) or the docs [here](http://aurelia.io/docs.html)
for more information.

### Simple Binding Example

Here's a simple data-binding example using the **bind** (`.bind="expression"`)
and **interpolation** (`${expression}`) techniques:

<sample dir="../samples/1"></sample>

### Binding Dates and Numbers

Sometimes the raw data exposed by your view-model isn't in a format that's
ideal for displaying in the UI.  Rendering date and numeric values are
common scenarios:

<sample dir="../samples/2"></sample>

``` markup
<import from="./date-format"></import>
<import from="./currency-format"></import>
```