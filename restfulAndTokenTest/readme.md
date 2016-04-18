
```
npm install
```

# restful Test

```
node restfulAPI.js
//using curl ,postman Test
```

# json web token Test
use [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)


# Test

```
//start mongod
node tokenServer.js
//using curl,postman Test



//curl http://localhost:8080

//save test data to mongose
//curl http://localhost:8080/setup

//api test
//curl http://localhost:8080/api


//get user data
//curl http://localhost:8080/api/users


//get token
//curl -X POST -d "name=Nick&password=password" http://localhost:8080/api/authenticate
//get the token , use token to authenticate


{"success":true,"message":"Enjoy your token!","token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJhZG1pbiI6ImluaXQiLCJwYXNzd29yZCI6ImluaXQiLCJuYW1lIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwiYWRtaW4iOnRydWUsInBhc3N3b3JkIjp0cnVlLCJuYW1lIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsiX192IjowLCJhZG1pbiI6dHJ1ZSwicGFzc3dvcmQiOiJwYXNzd29yZCIsIm5hbWUiOiJOaWNrIiwiX2lkIjoiNTcxNDg4YjI3ZDY3NmE4MDQ0ZWQwYjU5In0sIl9wcmVzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltudWxsLG51bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdfSwiaWF0IjoxNDYwOTY2MTMxLCJleHAiOjE0NjEwNTI1MzF9.2PCx5UbBfqtxCmBbREbTcZvlTz3DZUk5m9BDIIRICEE"}

//curl http://localhost:8080/api/info?token=...
//curl -X POST -d 'token=...' http://localhost:8080/api/info
//curl -H 'x-access-token:...' http://localhost:8080/api/info

//token success

```
