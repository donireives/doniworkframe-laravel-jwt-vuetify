<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense>
                <v-list-item v-for="item in items" :key="item.text" @click="pushLink(item.link)">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>
                            {{ item.text }}
                        </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <span class="hidden-sm-and-down">DoniWasHere</span>
            </v-toolbar-title>
            <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"
                          class="hidden-sm-and-down">

            </v-text-field>
            <v-spacer>

            </v-spacer>
            <v-btn icon>
                <v-icon>mdi-apps</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-bell</v-icon>
            </v-btn>

            <v-menu left bottom offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-avatar size="32px">
                            <img src="https://drive.google.com/uc?export=view&id=1fJNZHjQASv1qL8VFxjEwg0V2pRhTos04"
                                 alt="alt">
                        </v-avatar>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item link>
                        <v-list-item-avatar>
                            <img src="https://drive.google.com/uc?export=view&id=1fJNZHjQASv1qL8VFxjEwg0V2pRhTos04"
                                 alt="">
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="title">Doni Reives</v-list-item-title>
                            <v-list-item-subtitle>doni4869.sosmed@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list nav dense>
                    <v-list-item-group color="primary">
                        <v-divider></v-divider>
                        <v-list-item @click="logout">
                            <v-list-item-icon>
                                <v-icon color="red">exit_to_app</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>LOGOUT</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>

            </v-menu>
        </v-app-bar>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'main-app',
    props: {
        source: String,
    },
    data: () => ({
        dialog: false,
        drawer: null,
        items: [
            {icon: 'mdi-home', text: 'Home', link: '/admin/home'},
            {icon: 'mdi-post', text: 'Post', link: '/admin/posts'},
            {
                icon: 'mdi-chevron-up',
                'icon-alt': 'mdi-chevron-down',
                text: 'More',
                model: false,
                children: [
                    {text: 'More Page'},
                ],
            },
        ],
    }),
    methods: {
        logout() {
            this.$store.commit('logout');
            this.$router.push('/admin/login');
        },
        pushLink(link) {
            this.$router.push(link)
        }
    },
}
</script>
