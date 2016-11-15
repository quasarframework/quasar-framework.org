title: Quasar Development with Docker
---
If you'd like to help develop Quasar and you use Docker for your development environment, we offer a `docker-compose.yml` and a `dockerfile` to get you started. 

Steps to use the [quasarframework/quasar-dev](https://hub.docker.com/r/quasarframework/quasar-dev/) container:

1. At this point, you should be in a clone of the [quasarframework/quasar](https://github.com/quasarframework/quasar) repo on your local machine and you should have Docker installed and running.
  
2. In your shell console of choice, run
    
    `docker-compose up -d` 

   This will build and run the Quasar docker container in detached mode.

3. Once the container is built, enter 
   
    `docker-compose exec quasar-dev sh`

4. You should now be in the `/opt/app` directory within the container. Since the `docker up` command and subsequent building of the container also ran `npm install` for you, using the `package.json`on your local computer, you now only need to run

    `npm run dev`

Have fun programming on Quasar!

## Changing dependencies

If you have changed dependencies, (i.e. added a package to `package.json`) you can rebuild the quasar-dev container with the following command in your local machine's console (not the exec shell). 

`docker-compose build`

Theoretically, you could also use `npm install <package>` in the exec shell, however you'd be adding the new package(s) outside the container's cached layer, which means subsequent installs will take longer. We recommend adding your dependencies directly in `package.json` and rebuilding the container. 

Please also note, adding dependencies is currently frowned upon. Please check with Razvan in the [Quasar forum](http://forum.quasar-framework.org/) or on the [Gitter channel](https://gitter.im/quasarframework/Lobby), before adding any new dependencies.

That's it! Hope you enjoy the container. 
