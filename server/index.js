const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const AUTH0_DOMAIN = "dev-3i3bixd1upnmoerz.us.auth0.com";

server.use(middlewares);
server.use(async (req, res, next) => {
  if (await isAuthorized(req)) {
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});

server.get("/user", (req, res) => {
  res.jsonp({ ...req.user, view_count: 249, update_count: 100 });
});

server.use(jsonServer.bodyParser);
server.post("/posts", (req, res, next) => {
  req.body.createdAt = new Date().toISOString();
  req.body.author = {
    name: req.user.name,
    email: req.user.email,
    picture: req.user.picture,
  };
  next();
});

server.use(router);
server.listen(4000, () => {
  console.log("JSON Server is running");
});

async function isAuthorized(req) {
  try {
    const Authorization = req.headers.authorization;

    const response = await fetch(`https://${AUTH0_DOMAIN}/userInfo`, {
      headers: {
        Authorization,
      },
    });

    const json = await response.json();
    req.user = json;
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}