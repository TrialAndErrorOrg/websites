'use strict'

const plugin = (plugin: any) => {
  // Get current `MenuItem` attributes.
  const defaultAttrs = plugin.contentTypes['menu-item'].schema.attributes

  // Define custom attributes for `MenuItem` the same way they would be defined
  // on any other schema.
  const customAttrs = {
    description: {
      type: 'text',
    },
    icon: {
      type: 'media',
      allowedTypes: ['images'],
      multiple: false,
    },
  }

  // Extend the `MenuItem` content type with custom attributes.
  plugin.contentTypes['menu-item'].schema.attributes = {
    ...defaultAttrs,
    ...customAttrs,
  }
  console.log(plugin.contentTypes['menu-item'].schema.attributes)

  return plugin
}

export default plugin
