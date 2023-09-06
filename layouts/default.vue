<template>
    <v-app>
        <v-navigation-drawer v-model="drawer">
            <v-row align="center" justify="center">
                <v-col class="ma-5">
                    <v-row align="center" justify="center">
                        <v-img src="/icon.png" max-width="50" contain></v-img><span
                            class="logo-text uppercase">SionLand</span>
                    </v-row>
                </v-col>
            </v-row>
            <div class="divider"></div>

            <v-list>
                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-earth" title="EXPLORE"></v-list-item>
                    </template>
                    <v-list-item v-for="(item, i) in itemsExplore" :key="i">

                        <v-list-item-title class="list-title">
                            {{ item.label }}</v-list-item-title>

                    </v-list-item>
                </v-list-group>
                <v-list-group>
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-account-arrow-left" title="RESOURCES"></v-list-item>
                    </template>
                    <v-list-item>

                        <v-list-item-title class="list-title">
                            Statistics</v-list-item-title>

                    </v-list-item>
                    <v-list-item>

                        <v-list-item-title class="list-title">
                            Substratum node</v-list-item-title>

                    </v-list-item>
                    <v-list-item>

                        <v-list-item-title class="list-title"> Blog</v-list-item-title>

                    </v-list-item>
                    <v-list-item>

                        <v-list-item-title class="list-title">
                            Contact</v-list-item-title>

                    </v-list-item>
                </v-list-group>
                <v-list-group no-action color="gray">
                    <template v-slot:activator="{ props }">
                        <v-list-item v-bind="props" prepend-icon="mdi-file" title="DOCS"></v-list-item>
                    </template>
                    <v-list-item>

                        <v-list-item-title class="list-title">
                            Whitepaper</v-list-item-title>

                    </v-list-item>
                    <v-list-item>

                        <v-list-item-title class="list-title">
                            Developers</v-list-item-title>

                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"> </v-app-bar-nav-icon>
            <v-spacer />
            <v-btn v-show="!loged" color="#d1a828" @click="login()">
                <v-icon class="pr-2"> mdi-earth </v-icon>
                LOGIN
            </v-btn>
            <v-menu bottom min-width="200px" rounded offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn v-show="loged" icon x-large>
                        <v-avatar color="transparent">
                            <v-icon> mdi-account-circle </v-icon>
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <div class="mx-auto text-center">
                        <v-avatar color="transparent">
                            <v-icon> mdi-account-circle </v-icon>
                        </v-avatar>
                        <!--  <p class="text-caption mt-1" v-if="loged">
                                {{
                                    $store.state.userInfo.address.slice(0, 5) +
                                    "..." +
                                    $store.state.userInfo.address.slice(-3)
                                }}
                            </p> -->
                        <!-- <v-chip color="#bc1fdb" v-if="$store.state.userInfo">
                {{ $store.state.userInfo.pass.name }}
              </v-chip> -->
                        <v-divider class="my-3"></v-divider>
                        <v-btn depressed rounded text to="/myLands"> Lands </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn depressed rounded text to="/collectibles">
                            Collectibles
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn depressed rounded text @click="logout"> Disconnect </v-btn>
                    </div>

                </v-card>
            </v-menu>
        </v-app-bar>



        <v-main>
            <slot />
        </v-main>
    </v-app>
</template>


<script setup>

const drawer = ref(false)
const loged = ref(false)


const itemsExplore = ref([
    { label: "Explore map", to: "/lands" },
    { label: "My lands", to: "/myLands" },
    { label: "Collectibles", to: "/collectibles" },
    { label: "Marketplace", to: "/marketplace" },
    { label: "Statistics", to: "/statistics" },
])

async function login() {
    if (!window.ethereum) {
        alert("MetaMask not installed  :(");
    } else {
        let accounts = await window.ethereum.request({
            method: "eth_requestAccounts"
        });
        loged.value = true
        console.log(accounts)
    }
}


</script>

<style scoped lang="scss" >
.logo-text {
    font-family: "Ailenrons";
    font-size: 30px;
}

.divider {
    animation: 2s ease-in-out fadeIn;
    transition: 0.2s ease-out;
    height: 1px;
    background: linear-gradient(to right,
            rgba(0, 0, 0, 0),
            rgba(255, 255, 255, 50),
            rgba(0, 0, 0, 0));
    margin-bottom: 1.5rem;
}

.list-title {
    font-family: "Mulish", sans-serif;
    white-space: nowrap;
}
</style>
