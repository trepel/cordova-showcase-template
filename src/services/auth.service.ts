import { init } from "@aerogear/app";
import { Auth } from "@aerogear/auth";

declare var require: any;
// tslint:disable-next-line:no-var-requires
const appConfig = require("../mobile-services.json");
init(appConfig);

export let INSTANCE = new Auth();

export let keycloakFactory = () => {
  return INSTANCE;
};

export let authProvider = {
  provide: Auth,
  useFactory: keycloakFactory,
  deps: [],
};
