<template>
    <div>
        <v-form
            ref="form"
            @submit.prevent="onSubmit"
            lazy-validation
        >

            <v-text-field
            v-model="credentials.name"
            :rules="nameRules"
            label="Name"
            required
            ></v-text-field>

            <v-text-field
            v-model="credentials.number"
            :rules="numberRules"
            label="Number"
            required
            ></v-text-field>

            <v-text-field
            type="password"
            v-model="credentials.password"
            :rules="passwordRules"
            label="Password"
            required
            ></v-text-field>

            <v-text-field
            type="password"
            v-model="repassword"
            :rules="repasswordRules"
            label="re-Password"
            required
            ></v-text-field>

            <div style="color: red;" v-if="error">{{error}}</div>
            <div style="color: green;" v-if="success">{{success}}</div>

            <v-btn
            :disabled="!valid || submitting"
            color="success"
            class="mr-4"
            type="submit"
            >
            Submit
            </v-btn>

        </v-form>
    </div>
</template>

<script>
    import jwt from 'jsonwebtoken';
    import registerUser from '../graphql/registerUser.gql'
    export default {
        head () {
            return {
                title: 'Register'
            }
        },
        data () {
            return {
                error :null,
                success :null,
                submitting:false,
                nameRules: [
                    v => !!v || 'Number is required',
                ],
                numberRules: [
                    v => !!v || 'Number is required',
                    v => /^[0-9]/.test(v) || 'Number must be 0-9',
                    v => (v?v.length==8:false) || 'Number should with 8 length',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
                repasswordRules: [
                    v => !!(v==this.credentials.password) || 'Password is not matched',
                ],
                repassword: null,
                
                credentials: {
                    name:null,
                    number: null,
                    password: null
                },
            }
        },
        computed:{
            valid(){
                this.submitting = false
                this.error = null
                return !!(this.credentials.name && this.credentials.number && this.credentials.password && this.credentials.password == this.repassword)
            },
            expires(){
                return this.checkbox?99:1;
            },
        },
        methods: {
            async onSubmit () {
                this.submitting = true
                try {
                    const res = await this.$apollo.mutate({
                        mutation: registerUser,
                        variables: this.credentials
                    }).then(({data}) => data && data.register)
                    this.$router.push('login')
                } catch (e) {
                    this.error = "User already exist"
                    this.credentials.password = null
                    this.repassword = null
                }
            },
        },
        
    }
</script>