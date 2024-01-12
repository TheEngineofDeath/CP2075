export default class CP2075ItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 360,
            height: 600,
            classes: ["CP2075", "sheet", "item"]
        });
    }
    get template() {
        return `systems/CP2075/templates/sheets/${this.item.type}-sheet.html`;
    }

    getData(){
        const context = super.getData();
        const itemData = context.item;
        context.system = itemData.system;
        context.flags = itemData.flags;
    
        return context;
    }
    activateListeners(html) {
        super.activateListeners(html);
        if (!this.isEditable) return;
    }    
}