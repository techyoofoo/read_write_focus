import Hapi from "hapi";
import { readFocus, writeFocus } from './src/common_functions'

const init = async () => {
  await server.start();
  console.log("Server running on %s", server.info.uri);
};

const server = Hapi.server({
  port: process.env.PORT || 7002,
  host: process.env.IP || "localhost",
  routes: {
    cors: {
      origin: ["*"],
      headers: ["Accept", "Content-Type"],
      additionalHeaders: ["X-Requested-With"]
    }
  }
});

server.route({
  method: "GET",
  path: "/",
  handler: function (request, h) {
    console.log('Test Data');
    return h.response("Welcome to Read write focus application").code(200)
  }
});

//Read focus
server.route({
  method: 'POST',
  path: '/readfocus',
  handler: readFocus
})

server.route({
  method: 'POST',
  path: '/writefocus',
  handler: writeFocus
})


process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

init();
