<template>
  <div class="content">
    <div  class="box" v-for="question in questions">
      <question :content="question"></question>
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
