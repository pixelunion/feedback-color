# Feedback Colors

[![Build Status](https://travis-ci.org/pixelunion/feedback-color.svg?branch=master)](https://travis-ci.org/pixelunion/feedback-color)

When adapting colors for a user interface, a secondary palette is often required for feedback scenarios where a specific type of message must be communicated with the user. Typically, green means success, yellow means warning, and red means error. The problem is not all feedback colors are created equal—an ideal palette is clearly an extension of the interface's primary color.

**Feedback Colors** returns a *success*, *warning*, or *error* color based on a color it is given. The goal is to automate the creation of feedback colors that work harmoniously with a primary palette, while effectively communicating their intended message.

## Installation

##### Using npm
```bash
npm install --save-dev feedback-color
```

##### Old-school method
Download `feedback-color.scss` from the [/src/scss/functions](https://github.com/pixelunion/feedback-color/tree/master/src/scss/functions) directory.

## Usage
Import the `feedback-color` function in your sass.
```scss
@import 'feedback-color';

// Or something like this if you installed with npm
@import '../node_modules/feedback-color/feedback-color';
```

The `feedback-color` function will return a HEX when you pass it a base color and the feedback color type.
```scss
div {
  background-color: feedback-color(#bada55, 'success');
}
```
#### Parameters
Feedback Colors will return a HEX value when passed a `$base-color` and `$feedback-type`.

| Parameter | Accepts | Default |
| --- | --- | --- |
| `$base-color` | A color value in any CSS format | `null` |
| `$feedback-type` | `'success'`, `'warning'`, or `'error'` | `'warning'` |

## License
MIT - [Read full license](https://github.com/pixelunion/feedback-color/tree/master/LICENSE.md)
