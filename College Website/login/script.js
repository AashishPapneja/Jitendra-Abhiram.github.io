*{
    padding: 0;
    margin: 0;

}

body{
    background: url('https://images.unsplash.com/photo-1506508618093-6fe5ce3def4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80') no-repeat;
    background-size: cover;
    align-items: center;
    justify-content: center;
    display: flex;
    font-family: sans-serif ;

}
.container{
    position: relative;
    margin-top: 100px;
    width: 450px;
    height: auto;
    background: #dedede;
    border-radius: 5px;

}
.label{
    padding: 20px 130px;
    font-size: 35px;
    font-weight: bold;
    color: #130f40;

}
.login_form{
    padding: 20px 40px;
}
.login_form .font{
    font-size: 18px;
    color: #130f40;
    margin: 5px 0;
}
.login_form input{
    height: 40px;
    width: 350px;
    padding: 0 5px;
    font-size: 18px;
    outline: none;
    border: 1px solid silver;
}
.login_form .font{
    margin-top: 30px;
}
.login_form button{
    margin: 45px 0 30px 0;
    height: 45px;
    width: 365px;
    font-size: 20px;
    color: white;
    outline: none;
    cursor: pointer;
    font-weight: bold;
    background: #1A237E;
    border-radius: 3px;
    border: 1px solid #3949AB;
    transition: 0.5s;

}
.login_form button:hover{
    background: #151c6a;
}

.login_form #email_error,
.login_form #pass_error{
    margin-top: 5px;
    width: 345px;
    font-size: 18px;
    color: #C62828;
    background: rgba(255, 0, 0, 0.1);
    text-align: center;
    padding: 5px 8px;
    border-radius: 3px;
    border: 1px solid #EF9A9A;
    /* display: none; */


    
}