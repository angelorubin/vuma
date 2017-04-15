<script>
export default {
  name: 'VbSidebar'
}
</script>

<template>
    <div>
        <div class="menu has-text-centered">
            <img src="../../assets/img/logo.png" width="130">
            <p class="menu-label"><strong>General</strong></p>
            <ul class="menu-list">
                <li><a>link 01</a></li>
                <li><a>link 02</a></li>
            </ul>
            <p class="menu-label"><strong>Lorem ipsum</strong></p>
            <ul class="menu-list">
                <li><a>link 01</a></li>
                <li>
                    <a class="">link 02</a>
                    <ul>
                        <li><a>Link 01</a></li>
                        <li><a>Link 02</a></li>
                        <li><a>Link 03</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
