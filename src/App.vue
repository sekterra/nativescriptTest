<template>
    <v-app>
        <v-navigation-drawer fixed :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" app>
            <v-list>
                <v-list-tile value="true" v-for="(item, i) in items" :key="i" @click="linkto(item)">
                    <v-list-tile-action>
                        <v-icon v-html="item.icon"></v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar fixed app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <!-- <v-btn icon @click.stop="miniVariant = !miniVariant">
                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
            </v-btn>
            <v-btn icon @click.stop="clipped = !clipped">
                <v-icon>web</v-icon>
            </v-btn>
            <v-btn icon @click.stop="fixed = !fixed">
                <v-icon>remove</v-icon>
            </v-btn> -->
            <v-spacer></v-spacer>
            <v-toolbar-title v-text="title"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon @click.stop="rightDrawer = !rightDrawer">
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>

        <v-content @successLogin="successLogin">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </v-content>
        <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed>
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-footer :fixed="fixed" app>
            <v-btn icon small>
                <v-icon>arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon small >
                <v-icon>autorenew</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon small >
                <v-icon>home</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon small >
                <v-icon>create</v-icon>
            </v-btn>
        </v-footer>
    </v-app>
</template>

<script>
var level1Menus = [
    { icon: 'home', title: 'Home', linkpath: null, key: 'home', upMenuKey: null },
    { icon: 'assignment', title: 'WO', linkpath: null, key: 'wo', upMenuKey: null },
    { icon: 'event_available', title: '점검', linkpath: null, key: 'inspection', upMenuKey: null},
    { icon: 'donut_small', title: '통계', linkpath: null, key: 'status', upMenuKey: null},
    { icon: 'settings', title: '설정', linkpath: null, key: 'setting', upMenuKey: null},
    { icon: 'tab', title: '탭 테스트', linkpath: null, key: 'home', upMenuKey: null},
    { icon: 'camera', title: '카메라 테스트', linkpath: null, key: 'home', upMenuKey: null}
];

var level2Menus = [
    { icon: 'assignment', title: 'WO 요청', linkpath: '/wo/requestTabs', key: 'requestWo', upMenuKey: 'wo' },
    { icon: 'assignment', title: 'WO 완료처리', linkpath: '/wo/completeTabs', key: 'completeWo', upMenuKey: 'wo' },
    { icon: '360', title: '상위 메뉴', linkpath: null, key: 'upMenu', upMenuKey: 'wo'},
    { icon: 'assignment', title: '설비별 정비비용', linkpath: '/wo/requestTabs', key: 'requestWo', upMenuKey: 'inspection' },
    { icon: 'assignment', title: '설비별 MTTR', linkpath: '/wo/requestTabs', key: 'completeWo', upMenuKey: 'inspection' },
    { icon: 'event_available', title: '상위 메뉴', linkpath: null, key: 'upMenu', upMenuKey: 'inspection'},
];

export default {
    beforeMount() {
        this.$router.push('/Login')
    },
    data() {
        return {
            clipped: false,
            drawer: false,
            fixed: false ,
            items: level1Menus,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: 'swing for mobile',
            isLogin: false,
            offsetTop: 0
        }
    },
    watch: {
        isLogin() {
            console.log('login:' + this.isLogin);
            if (this.isLogin) this.$router.replace('/summary/dashboard');
        }
    },
    methods: {
        linkto(_item) {
            if (_item.linkpath) this.$router.push({ path: _item.linkpath })
            else {
                if (_item.key === 'upMenu') {
                    this.moveUpMenus();
                } else {
                    this.setMenus(this.findChildMenus(_item.key));
                }
            }
        },
        successLogin() {
            this.isLogin = true;
            console.log('success Login');
        },
        onScroll (e) {
            this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
            console.log('onscroll' + this.offsetTop)
            // this.offsetTop = e.target.scrollTop
            // this.btnHidden = this.offsetTop == 0
        },
        moveUpMenus() {
            this.items = level1Menus;
        },
        findChildMenus(_upMenuKey) {
            return level2Menus.filter((_item) => {
                return _item.upMenuKey === _upMenuKey
            });
        },
        setMenus(_menus) {
            this.items = _menus;
        }
    }
}

</script>
