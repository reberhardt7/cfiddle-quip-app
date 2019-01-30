import quip from "quip";

const FRAME_HEIGHT = 400;

class CfiddleRoot extends quip.apps.RootRecord {
    static getProperties() {
        return {
            src: "string",
        };
    }
}
quip.apps.registerClass(CfiddleRoot, "root");

quip.apps.initialize({
    initializationCallback: function(rootNode, params) {
        const rootRecord = quip.apps.getRootRecord();
        if (params.isCreation) {
            rootRecord.set('src', params.creationUrl || '');
        }
        const creationUrl = rootRecord.get('src');
        const embedUrl = creationUrl.search(/[\&\?]p=/) > -1
                ? creationUrl.replace('cfiddle.com/', 'cfiddle.com/embed')
                : 'https://cfiddle.com/embed';
        rootNode.innerHTML = '<iframe width="100%" height="'
            + FRAME_HEIGHT + 'px" frameborder="0" src="'
            + embedUrl + '"></iframe>';
    },
});
