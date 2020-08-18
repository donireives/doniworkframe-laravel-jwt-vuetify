<template>
<v-card>

    <v-card-title primary-title>
        <div>
            <h3 class="headline mb-0">Posts</h3>
            <div>{{ this.posts.length }}</div>
        </div>
    </v-card-title>
    <v-card-text>
        <v-data-table :headers="headers" :items="posts" class="elevation-1">
            <template v-slot:item.operation="{ item }">
                <div class="text-center d-flex align-center">
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn class="v-btn-simple" color="success" icon v-on="on" @click="editPost(item.id)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </template>
                        <span>edit</span>
                    </v-tooltip>
                    <v-tooltip top>
                        <template v-slot:activator="{on}">
                            <v-btn class="v-btn-simple" color="error" icon v-on="on" @click="deletePost(item.id)">
                                <v-icon>mdi-trash-can</v-icon>
                            </v-btn>
                        </template>
                        <span>delete</span>
                    </v-tooltip>
                </div>

            </template>
        </v-data-table>
    </v-card-text>
    <v-card-actions>
        <router-link to="/admin/post/">
            <v-btn outlined color="primary">Add New</v-btn>
        </router-link>
        <!-- <v-btn color="primary">text</v-btn> -->
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            headers: [{
                    text: '',
                    value: 'operation'
                },
                {
                    text: 'title',
                    value: 'title',
                },

            ],
            form: new Form({})
        }
    },
    methods: {
        deletePost(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.value) {
                    this.form.delete('/api/posts/' + id)
                     Fire.$emit('afterCreate')
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                } else if (
                    /* Read more about handling dismissals below */
                    result.dismiss === Swal.DismissReason.cancel
                ) {
                    Swal.fire(
                        'Cancelled',
                        'Your imaginary file is safe :)',
                        'error'
                    )
                }
                // this.form.delete('/api/posts/' + id)
                //     .then((results) => {
                //          Fire.$emit('afterCreate')
                //         Swal.fire(
                //             'Deleted!',
                //             'Your file has been deleted.',
                //             'success'
                //         )

                //     })
                //     .catch((error) => {
                //         Swal.fire({
                //             type: 'error',
                //             title: 'Ooops',
                //             text: error
                //         })
                //     })

            })
        },
        refreshPost() {
            this.$store.dispatch('getPosts');
        },
        editPost(id) {
            this.$router.push('/admin/post/' + id)
        }
    },
    computed: {
        posts() {
            return this.$store.getters.posts;
        },
    },
    mounted() {
        if (this.posts.length) {
            return;
        }
        this.$store.dispatch('getPosts');
    },
    created() {
        Fire.$on('afterCreate', () => {
            this.refreshPost();
        })
        this.refreshPost();
    }
}
</script>
