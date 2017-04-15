<script>
  export default {
    name: 'VbNav'
  }
</script>

<template>
    <div>
        <nav class="nav has-shadow">
            <div class="container">
                <!-- nav left -->
                <div class="nav-left is-hidden-mobile">
                    <a class="nav-item">Link 1</a>
                    <a class="nav-item">Link 2</a>
                </div>
                <!-- nav toogle -->
                <span class="nav-toggle">
                    <a class="nav-item is-pulled-right">
                        <span class="icon">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </span>
                    </a>
                </span>
                <!-- nav right -->
                <div class="nav-right">
                    <a class="nav-item is-tab">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a class="nav-item">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a class="nav-item">
                        <span class="tag is-info"> 4 messages</span>
                    </a>
                    <router-link to="/" class="nav-item">
                        <i class="fa fa-sign-out" aria-hidden="true"></i>
                    </router-link>
                </div>
            </div>
        </nav>
    </div>
</template>
