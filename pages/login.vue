<template>
    <div>
        <v-form
            ref="form"
            @submit.prevent="onSubmit"
            lazy-validation
        >

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

            <v-checkbox
            v-model="checkbox"
            label="Remember me?"
            required
            ></v-checkbox>
           
            <div style="color: red;" v-if="error">{{error}}</div> 

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
    import authenticateUser from '../graphql/authenticateUser.gql'
    export default {
        head () {
            return {
                title: 'Login'
            }
        },
        data () {
            return {
                submitting:false,
                error :null,
                numberRules: [
                    v => !!v || 'Number is required',
                    v => /^[0-9]/.test(v) || 'Number must be 0-9',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
                checkbox: false,
                
                credentials: {
                    number: null,
                    password: null
                },
            }
        },
        computed:{
            valid(){
                this.submitting = false
                this.error = null
                return !!(this.credentials.number && this.credentials.password)
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
                        mutation: authenticateUser,
                        variables: this.credentials
                    }).then(({data}) => data && data.login)
                    await this.$apolloHelpers.onLogin(res.token,undefined,{expires:this.expires})
                    this.$router.push('/')
                } catch (e) {
                    this.error = "Invalid password or number"
                }
            }
        },
        
    }
</script>