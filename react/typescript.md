# Typescript for React apps
## Setup
Automatically: 
```
npx create-react-app <my-app> --template typescript
```
Manually add to npm:
```
npm install --save-dev typescript

//configure
npx tsc --init

//in package json:
script: "build": "tsc"
```
In tsconfig.json, tell the compiler where the source code is and where the output should go (rootDir in src and outDir in build).

`.ts` is the default file extension while `.tsx` is a special extension used for files which contain JSX.

- Reference: [Static type checking in React](https://reactjs.org/docs/static-type-checking.html)