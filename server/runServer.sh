#!/usr/bin/env bash
docker run --name klaytn-champ-api -p 3000:3000 -v $(pwd):/src -w /src node:10 bash -c "node app.js" &
