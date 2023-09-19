<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-text>
                        <v-text-field v-model="username" label="Username">

                        </v-text-field>
                        <v-checkbox label="Access" v-model="access"></v-checkbox>

                        <v-btn @click="giveAccess()"> Send </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
        <v-row>
            <v-col>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Username
                            </th>
                            <th class="text-left">
                                Access
                            </th>
                            <th class="text-left">
                                Requests
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in chats" :key="item.username">
                            <td>{{ item.username }}</td>
                            <td><v-btn v-if="item.access" size="small" color="red"
                                    @click="changeAccess(item.username, false)"> deny </v-btn> <v-btn v-else
                                    @click="changeAccess(item.username, true)" size="small" color="green"> allow </v-btn>
                            </td>
                            <td>{{ item.requests }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>

    </v-container>
</template>


<script setup>

const supabase = useSupabaseClient()

const username = ref("")
const access = ref(false)
const chats = ref([])


async function updateTable() {
    let { data, error } = await supabase
        .from('chats')
        .select('*')

    chats.value = data

}


async function giveAccess() {

    const { data, error } = await supabase
        .from('chats')
        .insert([
            { username: username.value, access: access.value },
        ])
        .select()
    if (error) alert(error.details)
    updateTable()


}

async function changeAccess(username, access) {

    const { data, error } = await supabase
        .from('chats')
        .upsert([
            { username: username, access: access },
        ])
        .select()
    if (error) alert(error.details)
    updateTable()

}


updateTable()


</script> 