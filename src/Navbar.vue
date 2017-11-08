<template>
    <nav class="navbar navbar-toggleable-xl navbar-light bg-faded bg-custom">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">Ticket Tracker</a>
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/info">Info</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {}
}
</script>

<style scoped>
.bg-custom {
    /* Browser that dont support gradients*/
    background: #c3cfe2;
    /*Regular gradients*/
    background: -webkit-linear-gradient(bottom, #c3cfe2, #f5f7fa);
    background: -moz-linear-gradient(bottom, #c3cfe2, #f5f7fa);
}

.navbar-brand {
    font-weight: 500;
}
</style>