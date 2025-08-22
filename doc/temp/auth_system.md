## google login step

- user click login with google
/ the function make a object on user name ,email,photo and send to server
* server check the email is already registered or not
* if the email doesn't exist on database the server "true" , save the use data on database , send login token
* if the email is already exist on database the server returned false , send the login token
/ if server return "true" the user redirect to home , and save the token cookies
/ if server return "false" the user redirect to home , and save the token cookies
