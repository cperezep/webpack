import { run } from "./app/app.js";
import { AlertService } from "./app/alert.service.js";
import { ComponentService } from "./app/component.service.js";

run(new AlertService(), new ComponentService());
