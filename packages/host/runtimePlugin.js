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