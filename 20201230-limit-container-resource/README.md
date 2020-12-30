# Restart service on resource limit reach

By setting `cpus: 0.2`, `mem_limit: 20m`, a container will receive SIGKILL upon resource exhaustion.

By setting `restart: unless-stopped`, a container will restart unless explicitly stopped.

Those three together restarts a service on resource limit reach.

## Usage

`docker-compose up` in a terminal.

We should see:

```
memory-leak_1  |
memory-leak_1  | > dk@1.0.0 start
memory-leak_1  | > node server.js
memory-leak_1  |
memory-leak_1  | Server running at http://127.0.0.1:3000/
```

After not too long, `docker-compose up` should be stopped with these messages:

```
memory-leak_1  | npm ERR! path /Users/minniebavaro/tmp/memory-leak
memory-leak_1  | npm ERR! command failed
memory-leak_1  | npm ERR! signal SIGKILL
memory-leak_1  | npm ERR! command sh -c node server.js
memory-leak_1  |
memory-leak_1  | npm ERR! A complete log of this run can be found in:
memory-leak_1  | npm ERR!     /root/.npm/_logs/2020-12-30T05_16_23_823Z-debug.log
```

Now type `docker ps`, we should see the container restared not long ago.

Now run `docker stats` in another terminal, we will see something like this:

```
CONTAINER ID   NAME                        CPU %     MEM USAGE / LIMIT   MEM %     NET I/O   BLOCK I/O   PIDS
83d6d4d59f28   memory-leak_memory-leak_1   20.09%    19.85MiB / 20MiB    99.26%    696B / 0B   29.1MB / 0B   7
```

We can see the cpu and memory limits are applied.
