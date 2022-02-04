# Custom groups for TailwindCSS 

![npm (scoped)](https://img.shields.io/npm/v/@vendeka/tailwindcss-custom-groups)

Need a fixed header after scrolling? Or perhaps you want to toggle classes upon clicking a button.

We got you covered. Just bring your own logic!

## Installation

Install the plugin from NPM:

```sh
npm install @vendeka-nl/tailwindcss-custom-groups
```

## Configuration

Add the plugin to your `tailwind.config.js` file. And define your custom groups using the `customGroups` option in your theme configuration in your configuration file.

```js
// tailwind.config.js
module.exports = {
  theme: {
    customGroups: [
      'custom-group-name',
    ],
  },
  variants: {
    extends: {
      position: ['custom-group-name'],
    }
  },
  plugins: [
    require('@vendeka/tailwindcss-custom-groups'),
  ],
}
```

## Usage

Use the group names defined in your Tailwind config as a variant in your HTML. Add the group class to the parent using your (frontend) framework of choice.


### Example

In the example below we've added a custom group named `toggled`, which is configured as a variant on the text color utilities. When our button is clicked, the class "toggled" is toggled on the body element, which colors the text green.

```html
<body>
  <div class="text-gray-400 toggled:text-green-500">Toggled?</div>
  <button type="button">Toggle</button>
  <script type="text/javascript">
    document.querySelector('button').addEventListener('click', () => {
      document.body.classList.toggle('toggled');
    });
  </script>
</body>
```
