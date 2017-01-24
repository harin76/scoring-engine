<template>
  <div>
    <p><strong>{{content.text}}<strong></p>
    <p v-if="content.type === 'text'" class="control">
      <textarea class="textarea" placeholder=""></textarea>
    </p>
    <p v-else-if="content.type === 'yesNo'" class="control">
    <span class="select">
      <select>
        <option>YES</option>
        <option>NO</option>
      </select>
    </span>
    </p>
    <p v-else-if="content.type === 'dropdown'" class="control">
    <span class="select">
      <select>
        <option>FIRST</option>
        <option>SECOND</option>
        <option>THIRD</option>
      </select>
    </span>
    </p>
    <p v-else-if="content.type === 'radio'" class="control">
      <label class="radio">
        <input type="radio" name="question">
        First
      </label>
      <label class="radio">
        <input type="radio" name="question">
        Second
      </label>
    </p>
    <p v-else-if="content.type === 'multiselect'" class="control">
      <label class="checkbox">
        <input type="checkbox">
        Select 1
      </label>
      <label class="checkbox">
        <input type="checkbox">
        Select 2
      </label>
      <label class="checkbox">
        <input type="checkbox">
        Select 3
      </label>
    </p>
    <p v-else-if="content.type === 'date'" class="control">
      <input class="input is-primary" type="date" placeholder="Date">
    </p>
    <p v-else-if="content.type === 'currency'" class="control">
      <input class="input is-primary" type="number" placeholder="Currency">
    </p>
    <p v-else-if="content.type === 'number'" class="control">
      <input class="input is-primary" type="number" placeholder="Number">
    </p>
    <p v-else-if="content.type === 'percent'" class="control">
      <input class="input is-primary" type="number" min="1" max="100" placeholder="Percent">
    </p>
</div>
</template>

<script>
export default {
  name: 'question',
  props: ['content']
}
</script>
