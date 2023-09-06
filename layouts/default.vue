<template>
    <v-app>
        <v-app-bar>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
            <v-spacer />
        </v-app-bar>
        <v-navigation-drawer v-model="drawer">
            <v-list>
                <v-list-item title="Navigation drawer"></v-list-item>
            </v-list>
        </v-navigation-drawer>



        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>


<script setup>

const drawer = ref(false)
</script>
