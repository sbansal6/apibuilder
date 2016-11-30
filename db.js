// Local Storage
var DB = {
    paletteItems:{
        "get":{
            "image":""
        },
        "post":{
            "image":""
        },
        "put":{
            "image":""
        },
        "delete":{
            "image":""
        },
        "apigateway":{
            "image":""
        },
        "microservice":{
            "image":""
        },
        "loadbalancer":{
            "image":""
        }
    },
    paletteHtml:'<div class="palette-node" data-name="{name}" >	<div class="palette-node-item"> <img src="{image}" alt="notfound"> </div> <div class="palette-node-item"> <a>{name}</a> </div> </div>',
    // use this as default html for representing a node as html on chart
    nodeHtml:   '<div class="chart-node" data-name="{name}" >	<div class="chart-node-item"> <img src="{image}" alt="notfound"> </div> <div class="chart-node-item"> <a>{name}</a> </div> </div>',
    project:{
        id:"xxuniqieIdxx",
        apigateway:{
            id:"xxuniqueIdxx",
            html:"",
        },
        microService:{
            id:"xxuniqueIdxx",
            name:"xxuniquenamexx",
            html:"",
            endpoint:{
                // these three properties define a unique endpoint
                id:"xxuniqueIdxx",
                endpoint:"keywords",
                method:"GET",
                html:""
            }
        }
    }
};

var Nodeformat = function(html,placeholders) {
    if ($.isArray(placeholders)) {
        var args = arguments;
        return html,placeholders.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ?
                args[number] :
                match;
        });
    } else { //Object
        var s = html,placeholders;
        for (var propertyName in placeholders) {
            var re = new RegExp('{' + propertyName + '}', 'gm');
            s = s.replace(re, placeholders[propertyName]);
        }
        return s;
    }
};