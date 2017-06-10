title: Opening Your Dev Server to the Public
---
At some point you may want to show someone else the project you've been working on. Fortunately, there is a simple CLI tool to accomplish this. [Ngrok](https://ngrok.com/) creates a tunnel to your dev server and (by default) generates a hexadecimal internet address on the ngrok server to offer to your clients or anyone special you'd like to show your work to. 

> **IMPORTANT**
> Opening a dev server to the public constitutes security risks. Be absolutely cautious when using tools like this. This tip **is not** intended for the general public. 
> 
> When you've finished with your demonstration or testing, make sure to stop ngrok. This will prevent any unwanted access of your computer through ngrok.

### OPENING A DEV SERVER TO THE PUBLIC

1. Download and install ngrok [here](https://ngrok.com/download)

2. Start your Dev server
``` bash
$ quasar dev
```

3. Create your ngrok connection
``` bash
$ ngrok http 80
```

4. ngrok shows the url in the command line when it started.
``` bash
Tunnel Status                 online
Version                       2.0/2.0
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://92832de0.ngrok.io -> localhost:80
Forwarding                    https://92832de0.ngrok.io -> localhost:80

Connnections                  ttl     opn     rt1     rt5     p50     p90
                              0       0       0.00    0.00    0.00    0.00
```

### INSPECTING TRAFFIC

When running ngrok, visit [localhost:4040](http://localhost:4040) to inspect the traffic.

This tool allows for custom domains, password protection and a lot more. If you require further assistance, please refer to the [ngrok docs](https://ngrok.com/docs) for more information.
