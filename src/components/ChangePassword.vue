<template>
    <v-card
    elevation="5"
    outlined
    
    max-width="374"
    >
        <v-card-title>
            Change Password
        </v-card-title>
        
        
            <v-container>
            
                <v-text-field
                    v-model="oldPassword"
                    label="Current Password"
                    outlined
                    clearable
                ></v-text-field>
                
                <v-text-field
                    v-model="newPassword"
                    label="New Password"
                    outlined
                    clearable
                ></v-text-field>
                
                <v-text-field
                    v-model="cnfrmNewPassword"
                    label="Confirm Password"
                    outlined
                    clearable
                ></v-text-field>
                
            </v-container>
        
        <v-card-text>
            <span class="caption red--text">{{errorMsg}}</span>
            <span class="caption red--text">{{ResErrMsg}}</span>
            <span class="caption green--text">{{successMsg}}</span>
        </v-card-text>
        <v-card-actions >
            <v-btn
                outlined
                color="blue"
                primary
                text
                v-on:click="changePassword"
            >
            Change Password
            </v-btn>
    </v-card-actions>
        

    </v-card>
</template>
<script>
import axios from 'axios';
import  '../axios.js';

    export default{
        name:'ChangePassword',
        data(){
            return {
                oldPassword:'',
                newPassword:'',
                cnfrmNewPassword:'',
                errorMsg:'',
                successMsg:'',
                baseUrl:this.BASE_URL,
                ResErrMsg:'',
                passwordMatch:'',

            }
        },
        methods:{

            
            async changePassword(){
                this.matchPassword();
                if(this.passwordMatch){
                    let params="?oldPassword="+this.oldPassword+"&newPassword="+this.newPassword;
                    console.log("passwords are",this.oldPassword,this.newPassword);
                    try{
                        let res = await axios.post('http://localhost:9000/changePassword'+params, {}, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+this.$store.getters.getToken('accessToken')
                        }
                        });
                        if(res.status == 200){
                            // test for status you want, etc
                            this.resetErrorMsgs()
                            this.successMsg="Password chnaged successfully...";
                        }
                    }catch(e){
                        this.resetErrorMsgs()
                        this.ResErrMsg='Change password failed...*_*'
                }
                }
                
            },
            resetErrorMsgs(){
                this.ResErrMsg='';
                this.successMsg='';
                this.errorMsg='';
            },
            matchPassword(){
                
                console.log("matchPasswrod called");
                if(this.oldPassword=='' || this.oldPassword==null){
                    this.resetErrorMsgs()
                    this.passwordMatch=false
                    this.errorMsg="Old Passwrod cannot be empty";
                    return
                }
                if(this.oldPassword == this.newPassword){
                    this.resetErrorMsgs()
                    this.passwordMatch=false
                    this.errorMsg="Old Password and New Password cannot be same";
                    return
                }
                if(this.newPassword=='' || this.newPassword==null){
                    this.resetErrorMsgs()
                    this.passwordMatch=false
                    this.errorMsg="New Passwrod cannot be empty";
                    return
                }
                if(this.newPassword != this.cnfrmNewPassword){
                    this.resetErrorMsgs()
                    this.passwordMatch=false
                    this.errorMsg="New Password and Conform Password does not match";
                    
                }
                else{
                    this.passwordMatch=true
                    this.resetErrorMsgs()
                    
                }
            },
        }

    }
</script>
<style>

</style>