import { inject, provide } from 'vue'

export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  computed: {
    computedMessage() {
      return `Note: ${this.message}`
    }
  },
  setup() {
    provide('Something', {})
    console.log(inject('Key'))
  },
  render() {
    return this.$slots.header({ message: this.computedMessage })
  }
}
