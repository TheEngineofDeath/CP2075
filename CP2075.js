import { CP2075 } from "./module/config.js";
import CP2075ItemSheet from "./module/sheets/CP2075ItemSheet.js";

Hooks.once("init", function(){
    console.log("CP2075 | Инициализация");

    CONFIG.CP2075 = CP2075;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("CP2075", CP2075ItemSheet, { makeDefault: true });
});