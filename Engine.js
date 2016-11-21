// Put all classes in a core module and export them
// they will be used in front end as well
/**
 * Types of nodes
*/
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Resource"] = 0] = "Resource";
    NodeType[NodeType["ApiGateway"] = 1] = "ApiGateway";
    NodeType[NodeType["Microservice"] = 2] = "Microservice";
    NodeType[NodeType["LoadBalancer"] = 3] = "LoadBalancer";
})(NodeType || (NodeType = {}));
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["Get"] = 0] = "Get";
    HttpMethod[HttpMethod["Post"] = 1] = "Post";
    HttpMethod[HttpMethod["Delete"] = 2] = "Delete";
    HttpMethod[HttpMethod["Put"] = 3] = "Put";
})(HttpMethod || (HttpMethod = {}));
var Project = (function () {
    function Project() {
        this.id = ""; // generate random id
    }
    return Project;
}());
var ApiGateWayNode = (function () {
    function ApiGateWayNode() {
    }
    return ApiGateWayNode;
}());
var MicroserviceNode = (function () {
    function MicroserviceNode() {
    }
    return MicroserviceNode;
}());
var LoadBalancerNode = (function () {
    function LoadBalancerNode() {
    }
    return LoadBalancerNode;
}());
/**
 * Distinct Resouce + Method
 * Example: keyword + Get
 *          keyword + Post
 *          keyword + Put
 *          keyword + Deleteå
 *
 */
var ResourceNode = (function () {
    function ResourceNode(id) {
        this.typeOfNode = NodeType.Resource;
        this.onAdd = function () {
        };
        this.onEdit = function () {
        };
        this.onDelete = function () {
        };
        this.onSave = function () {
        };
        this.data = {
            path: "",
            method: "",
            requestSchema: {},
            responseSchema: {}
        };
        this.schema = {};
        this.options = {};
        this.id = id;
    }
    ;
    return ResourceNode;
}());
