export default function () {
    return {
        name: "create-script-with-timeout",
        async beforeRequest(args) {
            console.log("*********beforeRequest", args);

            throw new Error("beforeRequest - timeout");

            return args;
        },
        async errorLoadRemote(args) {
            console.log("*********errorLoadRemote", args);

            // return args
        }
    }
}