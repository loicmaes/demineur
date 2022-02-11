<template>
  <div class="game">
    <section class="game__content">
      <h1 class="game__content__title">MineSwiper</h1>
      <div class="game__content__grid">
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
        <span class="game__content__grid__cell"></span>
      </div>
    </section>

    <aside class="game__scoreboard">

    </aside>
  </div>
</template>

<script>
export default {
  name: 'Game'
}
</script>

<style scoped lang="scss">
.game {
  display: flex;

  &__content {
    display: flex;
    flex-direction: column;

    &__title {

    }

    &__grid {
      display: grid;
      width: 20rem;
      height: 20rem;
      grid-template-rows: repeat(10, 1fr);
      grid-template-columns: repeat(10, 1fr);
    }
  }
}
</style>
