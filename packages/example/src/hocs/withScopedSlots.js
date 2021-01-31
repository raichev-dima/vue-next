import { h, provide } from 'vue'

const withScopedSlots = component => {
  return {
    props: component.props,
    setup(props, context) {
      provide('Key', 'Context from app provided!')

      return () => h(component, props, context.slots)
    }
  }
}

export default withScopedSlots
