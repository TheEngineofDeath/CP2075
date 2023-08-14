export default class CP2075ItemSheet extends ItemSheet {
    get template() {
        return `systems/CP2075/templates/sheets/${this.item.data.type}-sheet.html`;
    }

    getData(){
        const data = super.getData();

        data.config = CONFIG.CP2075;

        return data;
    }
}