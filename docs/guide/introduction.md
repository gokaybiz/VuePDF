# Introduction

VuePDF is a **Vue 3** client-side component for pdf.js that allows you to flexibly display PDF pages within your project.

## Installation

```console
npm i @tato30/vue-pdf
```

```console
yarn add @tato30/vue-pdf
```

## Basic Usage

The most basic usage is so simple as import the `VuePDF` component and `usePDF` composable and display on `<template>` :)

```vue
<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const { pdf } = usePDF('sample.pdf')
</script>

<template>
  <VuePDF :pdf="pdf" />
</template>
```

## Working With Layers

### Text and Annotations

This component supports text-selection and annotation-interaction by enabling them with `text-layer` and `annotation-layer` props respectively, but for this layers renders correctly is necessary setting `css` styles, it can be done by importing default styles from `@tato30/vue-pdf/style.css`.

```vue
<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'

const { pdf } = usePDF('sample.pdf')
</script>

<template>
  <VuePDF :pdf="pdf" text-layer annotation-layer />
</template>
```

Check the examples:

- [Text Layer](../examples/basic/text_layer.md)
- [Annotation Layer](../examples/basic/annotation_layer.md.md)

You can also create your own custom styles and set them in your project, use this examples as guide:

- [text-layer styles](https://github.com/mozilla/pdf.js/blob/master/web/text_layer_builder.css)
- [annotation-layer styles](https://github.com/mozilla/pdf.js/blob/master/web/annotation_layer_builder.css)

### XFA Forms <badge type="tip" text="v1.7" vertical="middle" />

XFA forms also can be supported by enabling them from `usePDF`.

```vue
<script setup>
import { VuePDF, usePDF } from '@tato30/vue-pdf'
import '@tato30/vue-pdf/style.css'

const { pdf } = usePDF({
  url: '/example_xfa.pdf',
  enableXfa: true,
})
</script>

<template>
  <VuePDF :pdf="pdf" />
</template>
```

Check the example:

- [XFA Forms](../examples/basic/xfa_layer.md)

## Server-Side Rendering

`VuePDF` is a client-side library, so if you are working with SSR frameworks like `nuxt`, surely will throw error during building stage, if that the case, you could wrap library in some "client only" directive or component, also `usePDF` should be wrapped.

## Contributing

Any idea, suggestion or contribution to the code or documentation are very welcome.

```sh
# Clone the repository
git clone https://github.com/TaTo30/VuePDF.git

# Change to code folder
cd VuePDF

# Install node_modules
npm install

# Run code with hot reload
npm run dev
```