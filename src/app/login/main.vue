<script>
export default {
  name: 'VbLogin',
  methods: {
    login () {
      this.$router.push('/dash')
    }
  }
}
</script>

<template>
<div>
  <section class="hero is-fullheight is-warning is-bold">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column is-4 is-offset-4">
            <h1 class="title">
              Vuma - login
            </h1>
            <div class="box">
              <label class="label">e-mail</label>
              <p class="control">
                <input class="input" type="text" placeholder="foo@baz.com">
              </p>
              <label class="label">senha</label>
              <p class="control">
                <input class="input" type="password" placeholder="●●●●●●●">
              </p>
              <br>
              <p class="control">
                <button @click="login" class="button is-primary">entrar</button>
              </p>
            </div>
            <p class="has-text-centered">
              <a href="register.html">registrar-se</a> |
              <a href="#">recuperar senha</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>
