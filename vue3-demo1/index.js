const app = {
    data() {
        return {
            hp: 100,
            end: false,
        }
    },
    methods:{
        punch() {
            this.hp -= 10;
            if(this.hp <=0) {
                this.end = true;
            }
        },
        restart() {
            this.hp = 100;
            this.end = false;
        }
    }
}

Vue.createApp(app).mount('#app');