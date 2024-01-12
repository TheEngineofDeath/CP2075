import { CP2075 } from "./module/config.js";
import CP2075ItemSheet from "./module/sheets/CP2075ItemSheet.js";
import CP2075NamedCharacterSheet from "./module/sheets/CP2075NamedCharacterSheet.js";

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/CP2075/templates/partials/character-mAttr-block.hbs",
        "systems/CP2075/templates/partials/character-sAttr-block.hbs",
    ];

    return loadTemplates(templatePaths);
}

Hooks.once("init", function(){
    console.log("CP2075 | Инициализация");

    CONFIG.CP2075 = CP2075;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("CP2075", CP2075ItemSheet, { makeDefault: true });

    Actors.unregisterSheet("core", ItemSheet);
    Actors.registerSheet("CP2075", CP2075NamedCharacterSheet, { makeDefault: true });

    preloadHandlebarsTemplates();
});