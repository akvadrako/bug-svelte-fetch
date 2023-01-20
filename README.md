# Svelte Demo Repo

Usage:
    
    yarn install
    yarn run dev
    
    open http://localhost:5173

Run in docker:

    docker build -t demo -f .codesandbox/Dockerfile .
    docker run -p 5173:5173 -v $PWD:/app -it sh

    ... commands above ...
