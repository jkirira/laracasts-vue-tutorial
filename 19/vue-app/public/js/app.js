
new Vue({
    el: '#app',

    data: {
        // skills: [],
        name: '',
        description: '',
        error: {}
    },

    // mounted(){
    //     axios.get('/skills').then(response => this.skills = response.data )
    // },

    methods: {
        onSubmit(){
            axios.post("/projects", this.$data)
                .then(response => alert('Success'))
                .catch(error => this.errors = error.response.data)
        }
    }
})
