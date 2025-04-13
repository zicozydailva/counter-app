<template>
  <main>
    <div class="app">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    <RouterView />
  </main>
</template>

<style>
.app {
  text-align: center;
}
</style>
