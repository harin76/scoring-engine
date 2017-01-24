<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo">
          </a>
          <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
          <a class="nav-item is-tab is-hidden-mobile">Assessments</a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
          <a class="nav-item is-tab">
            <figure class="image is-16x16" style="margin-right: 8px;">
              <img src="http://bulma.io/images/jgthms.png">
            </figure>
            Profile
          </a>
          <a class="nav-item is-tab">Log out</a>
        </div>
      </div>
    </nav>
    <assessment :assessment="assessment"
    :sections="assessment.sections"
    :currentSection="currentSection"
    :questions="questions"></assessment>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Assessment from './components/Assessment'

export default {
  name: 'app',
  components: {
    Assessment
  },
  computed: mapGetters({
    assessment: 'assessment',
    isComplete: 'isComplete',
    sections: 'sections',
    questions: 'questions',
    currentSection: 'currentSection'
  }),
  methods: mapActions([
    'saveAnswer'
  ])
}
</script>

<style lang="sass">

</style>
