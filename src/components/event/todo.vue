<template>
  <div class="section feature-section tint">
    <h1 class="heading-5">Мой TODO список </h1>
    <div class="form-block w-form">
      <form
        name="email-form"
        class="form-2">
        <input
          type="text"
          class="w-input"
          maxlength="256"
          name="field"
          placeholder="Добавить задачу"
          required="">
        <div class="div-block-31">
          <div class="todo-item">
            <label
              class="w-checkbox checkbox-field">
              <input
                type="checkbox"
                name="checkbox-2"
                data-name="Checkbox 2"
                class="w-checkbox-input">
              <span class="checkbox-label w-form-label">Найти лектора</span>
            </label>
            <div class="text-block-14">x</div>
          </div>
          <div class="todo-item">
            <label class="w-checkbox checkbox-field">
              <input
                type="checkbox"
                name="checkbox-2"
                class="w-checkbox-input">
              <span class="checkbox-label w-form-label">Найти лектора</span>
            </label>
            <div class="text-block-14">x</div>
          </div>
        </div>
      </form>
      <div class="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div class="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EventTodo',
  };
</script>
