<template>
  <section class="section">
    <div class="container">
      <div class="heading">
        <h1 class="title">{{assessment.name}}</h1>
      </div>
      <assessment-sections
        :sections="sections"
        :currentSection="currentSection"
        v-on:sectionClick="selectSection">
        </assessment-sections>
      <questions :questions="questions"></quedstions>
    </div>
  </section>
</template>

<script>
import AssessmentSections from './AssessmentSections'
import Questions from './Questions'
import { mapActions } from 'vuex'

export default {
  name: 'assessment',
  props: ['assessment', 'sections', 'currentSection', 'questions'],
  components: { AssessmentSections, Questions },
  data () {
    return {
      msg: 'Welcome to Your Assessment'
    }
  },
  methods: mapActions(['selectSection'])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
