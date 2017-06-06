title: Opening Dev server to public
---
At some point you want to show someone else the project you've been working on. Fortunately there is a simple CLI tool to accomplish this. Ngrok creates a tunnel to your dev server and (by default) generates a hexadecimal address on the ngrok server.

> **IMPORTANT**
> Opening a dev server to public imposes security risks. Be cautious when using tools like this.
> When done testing, stop ngrok. To prevent anyone from accessing your computer.

**OPENING A DEV SERVER TO PUBLIC**

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

If you require further assistance, please see the [docs](https://ngrok.com/docs) for more information.

**INSPECTING TRAFFIC**
When running ngrok, visit [localhost:4040](http://localhost:4040) to inspect the traffic.

The tool allows for custom domains, password protection and a lot more. See the [docs](https://ngrok.com/docs)
