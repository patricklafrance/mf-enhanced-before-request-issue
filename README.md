# mf-enhanced-before-request-issue

Related to the following issue: https://github.com/module-federation/universe/issues/2371.

The monorepo contains 3 applications:
- An [host application](./packages/host/)
- A remote module named [remote-1](./packages/remote-1/)
- A remote module named [remote-2](./packages/remote-2/)

## Instructions to reproduce the issue

First install the dependencies with PNPM:

```bash
pnpm install
```

Then, start the solution by executing the following command at the root of the workspace:

```bash
pnpm dev
```

You should that the application cannot render because an error has been thrown:

```
Error
[ Federation Runtime ]: [ Federation Runtime ]: Error thrown from the beforeRequest hook.
```

Even if there's an `errorLoadRemote` hook configured for the [host](./packages//host) application:

```js
export default function () {
    return {
        name: "custom-runtime-plugin",
        async beforeRequest(args) {
            console.log("*********beforeRequest", args);

            throw new Error("Error thrown from the beforeRequest hook.");

            return args;
        },
        async errorLoadRemote(args) {
            console.log("*********errorLoadRemote", args);
        }
    }
}
```



