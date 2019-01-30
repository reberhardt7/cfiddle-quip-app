import quip from "quip";

const FRAME_HEIGHT = 400;

quip.apps.initialize({
    initializationCallback: function(rootNode, params) {
        const creationUrl = params.creationUrl || '';
        const embedUrl = creationUrl.search(/[\&\?]p=/) > -1
                ? creationUrl.replace('cfiddle.com/', 'cfiddle.com/embed')
                : 'https://cfiddle.com/embed';
        rootNode.innerHTML = '<iframe width="100%" height="'
            + FRAME_HEIGHT + 'px" frameborder="0" src="'
            + embedUrl + '"></iframe>';
    },
});
