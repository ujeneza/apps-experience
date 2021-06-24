//https://jsreport.net/learn/phantom-pdf

module.exports = function (callback, pdfTemplate) {
    var jsreport = require("jsreport-core")();
    jsreport.init()
        .then(function (o) {
            return jsreport.render({
                template: {
                    content: pdfTemplate.html,
                    engine: "jsrender",
                    recipe: "phantom-pdf",
                    phantom: {
                        header: pdfTemplate.header,
                        headerHeight: pdfTemplate.headerHeight,
                        footer: pdfTemplate.footer,
                        footerHeight: pdfTemplate.footerHeight,
                        orientation: pdfTemplate.orientation,
                        format: pdfTemplate.format,
                        margin: { "top": pdfTemplate.marginTop, "bottom": pdfTemplate.marginBottom, "left": pdfTemplate.marginLeft, "right": pdfTemplate.marginRight }
                    }
                }
            }).then(function (resp) {
                callback(/* error */ null, resp.content.toJSON().data);
            });
        }).catch(function (e) {
            callback(/* error */ e, null);
        });
};