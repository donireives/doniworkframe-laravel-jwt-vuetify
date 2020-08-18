<template>
<form @submit.prevent="savePost">
    <v-card>
        <v-card-text>
            <v-text-field name="title" label="Title" v-model="form.title"></v-text-field>
            <v-textarea name="body" label="Content" v-model="form.body"></v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn v-if="this.$route.params.id" outlined @click="editPost($route.params.id)" color="success">save change</v-btn>
            <v-btn v-else outlined type="submit" color="success">save</v-btn>
        </v-card-actions>
    </v-card>
</form>
</template>

<script>
export default {
    data() {
        return ({
            post: {},
            form: new Form({
                title: '',
                body: '',
            })
        })
    },
    methods: {
        savePost() {
            this.form.post('/api/post/new')
                .then((result) => {
                    Swal.fire({
                        type: 'success',
                        title: 'saved',
                        showConfirmButton: false,
                        timer: 500,
                    })
                    this.$router.push('/admin/posts')
                }).catch((err) => {
                    Swal.fire({
                        type: 'error',
                        title: 'Ooops',
                        text: err
                    })
                });
        },
        fetchPost(id) {
            axios({
                    url: '/api/post/' + id,
                    method: "get"
                })
                .then((result) => {
                    Vue.set(this.$data, 'post', result.data.post)
                    this.form.fill(this.post)
                }).catch((err) => {

                });
        },
        editPost(id) {
            this.form.patch('/api/post/edit/' + id)
                .then((result) => {
                    Swal.fire({
                        type: 'success',
                        title: 'saved',
                        showConfirmButton: false,
                        timer: 500,
                    })
                   this.$router.push('/admin/posts')
                }).catch((err) => {
                    Swal.fire({
                        type: 'error',
                        title: 'Ooops',
                        text: err
                    })
                });
        }
    },
    mounted() {
        var id = this.$route.params.id
        if (id) {
            this.fetchPost(id)
        }
    }
}
</script>
