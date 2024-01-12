export default class CP2075NamedCharacterSheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/CP2075/templates/sheets/namedCharacter-sheet.hbs",

            classes: ["CP2075", "sheet", "namedCharacter"]
        });
    }
    get template() {
        return `systems/CP2075/templates/sheets/namedCharacter-sheet.hbs`;
      }
    
      /* -------------------------------------------- */
    
      /** @override */
      getData() {
        // Retrieve the data structure from the base sheet. You can inspect or log
        // the context variable to see the structure, but some key properties for
        // sheets are the actor object, the data object, whether or not it's
        // editable, the items array, and the effects array.
        const context = super.getData();
    
        // Use a safe clone of the actor data for further operations.
        const actorData = this.actor.toObject(false);
    
        // Add the actor's data to context.data for easier access, as well as flags.
        context.system = actorData.system;
        context.flags = actorData.flags;
    
        return context;
      }
}
