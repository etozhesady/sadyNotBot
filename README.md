# sadyNotBot

### Build and run via docker

Creating .env file

```sh
cp .env.example .env
```

Building the docker image following command:

```sh
$ docker build -t sady-not-bot -f docker/Dockerfile .
```

Running the docker container following command:

```sh
$ docker run -d --name sady-not-bot sady-not-bot
```

Logs are available following command:

```sh
$ docker logs -f sady-not-bot
```