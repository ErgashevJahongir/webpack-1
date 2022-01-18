import { config } from "./modules/config";
import AppService from "./modules/app.service";
import "./modules/header.component";
import "bootstrap";
import "./style/style.css";
import "./less/index.less";
import "./scss/index.scss";

// console.log(css.toString());

console.log(config);

let app = new AppService("Joha");
app.log();
