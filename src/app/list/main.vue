<template>
    <div>
        <div class="tile is-ancestor">
            <div class="tile is-vertical">
                <div class="tile">
                    <nav class="nav">
                        <div class="nav-left">
                            <a class="nav-item">
                                <h4 class="title is-4">Compras</h4>
                            </a>
                            <router-link to="/home" class="nav-item is-active">
                                Home
                            </router-link>
                            <router-link to="/list" class="nav-item is-active">
                                Minhas Listas
                            </router-link>
                        </div>
                    </nav>
                </div>
                <div class="tile">

                    <h1 class="title">Minhas Listas</h1>
                    <table class="table">
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ações</th>
                        <tr>
                            <td>{{ a }}</td>
                            <td>{{ a }}</td>
                            <td>
                                <button @click="b" class="button is-small">X</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      name: 'List',
      data () {
        return { a: 'ahjjhjajhajhjha' }
      },
      methods: {
        b () {
          console.log('teste')
        }
      }
    }
</script>

<style lang="scss" src="bulma">
    .container {
        border: 6px solid #CCC !important;
    }
</style>
