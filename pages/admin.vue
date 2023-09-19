<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-text>
                        <v-text-field label="Username">

                        </v-text-field>
                        <v-checkbox label="Access"></v-checkbox>

                        <v-btn> Send </v-btn>
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
                                ChatID
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
                        <tr v-for="item in chats" :key="item.id">
                            <td>{{ item.id }}</td>
                            <td><v-checkbox v-model="item.access"></v-checkbox></td>
                            <td>{{ item.requests }}</td>
                        </tr>
                        <Fieldset:d></Fieldset:d>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>

    </v-container>
</template>


<script setup>

const supabase = useSupabaseClient()


let { data: chats, error } = await supabase
    .from('chats')
    .select('*')


</script> 