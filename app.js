const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'blah@aaa.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/57.jpg',
        }
    },
    methods: {
        getUser() {

            fetch('https://randomuser.me/api/')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                
                let arr = data.results[0];
                let names = arr.name;

                this.firstName = names.first;
                this.lastName = names.last;
                this.email = arr.email;
                this.gender = arr.gender;
                this.picture = arr.picture.large;
            })
            .catch(error => {
                alert(error); 
            });
        }
    },
});

app.mount('#app');