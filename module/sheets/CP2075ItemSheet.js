export default class CP2075ItemSheet extends ItemSheet {
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