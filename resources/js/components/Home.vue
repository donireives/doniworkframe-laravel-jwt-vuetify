<template>
<div>
    <v-card>

        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">headline</h3>
                <div>description</div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-btn  color="primary">text</v-btn>
            <v-btn @click="logout"  color="primary">Logout</v-btn>
        </v-card-actions>
    </v-card>
</div>
</template>
<script>
export default {
    methods: {
       logout(){
           this.$store.commit('logout');
           this.$router.push('/admin/login')
       }
    },
}
</script>
