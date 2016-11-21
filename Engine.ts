            // Put all classes in a core module and export them
            // they will be used in front end as well
            /**
             * Types of nodes 
            */
            enum NodeType {
                Resource,
                ApiGateway,
                Microservice,
                LoadBalancer
            }
            
            enum HttpMethod {
                Get,
                Post,
                Delete,
                Put
            }
            
            interface INode {
                 typeOfNode:NodeType,
                 label:String,
                 id:String,
                 data:any,
                 schema:any,
                 options:any,
                 onAdd(),
                 onEdit(),
                 onDelete(),
                 onSave()
            }
            
            class Project {
                id:string;
                label:string;
                microServices:MicroserviceNode[];
                apigateway:ApiGateWayNode;
                constructor(){
                    this.id = ""; // generate random id
                }
            }
            
            class ApiGateWayNode {
            }
            
            class MicroserviceNode {
                id:string;
                label:string;
                resources:ResourceNode[];
                loadBalancer:LoadBalancerNode
            }
            
            class LoadBalancerNode {
                
            }
            
            /**
             * Distinct Resouce + Method
             * Example: keyword + Get
             *          keyword + Post
             *          keyword + Put
             *          keyword + Deleteå
             *        
             */ 
            class ResourceNode implements INode {
                typeOfNode:NodeType = NodeType.Resource;
                label:string;
                id:string;
                onAdd = function(){
                    
                };
                onEdit = function(){
                    
                };
                onDelete = function(){
                    
                };
                onSave = function(){
                    
                };
                data = {
                    path:"",
                    method:"",
                    requestSchema:{},
                    responseSchema:{}
                };
                schema:any = {};
                options:any = {};
                
                /**
                 * Defines number of instances of this endpoint, if number is greater than 1 load balancing kicks in
                 * If instances count is greather then 1, create new Microservice out of it
                 * Microservice:- resources balanced under 1 load balancer
                 */ 
                instances:Number;
                
                constructor(id:string){
                    this.id = id;
                };
            }
    