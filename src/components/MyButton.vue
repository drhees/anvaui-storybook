<template>
  <button class="anv-btn" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',

  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style>
  [class*=anv-btn] {
    transition: all .3 ease;
    border: 0;
    border-radius: 3px;
    cursor: pointer;
    display: inline-flex!important;
    justify-content: center;
    position: relative;
    height: 41px;
    background-color: #2A7FCF;
    color: #fff;
    padding: 8px 20px;
  }
</style>
