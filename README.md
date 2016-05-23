## WebGL exercises

#### github 

-Specify SSH key associated with this account (since I'm using two different accounts)
```
$ nano ~/.ssh/config

host github.com-manuarmex
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_manuarmex
```
```
$ set-url origin git@github.com-manuarmex:manuarmex/webGL.git
or 
clone using git@github.com-manuarmex  instead of git@github.com
```

#### Server
````
$ python -m SimpleHTTPServer
serves in 127.0.0.1:8000

````
