<template>
  <div class="tabs">
    <ul>
      <li v-bind:class="section.name === currentSection ? 'is-active': ''" v-for="section in sections">
        <a v-on:click="handleSectionClick(section.name)">{{section.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'assessment-sections',
  props: ['sections', 'currentSection'],
  methods: {
    handleSectionClick: function (name) {
      this.$emit('sectionClick', name)
    }
  }
}
</script>
