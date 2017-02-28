<template>
  <div class="content">
    <div  class="box is-red" v-for="question in questions">
      <article class="media">
        <div class="media-content">
          <question :content="question"></question>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Question from './Question'

export default {
  name: 'questions',
  components: { Question },
  props: ['questions']
}
</script>
