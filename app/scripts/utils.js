var utils = (function(){
    var self = {};
    self.aggregateByKeyValue = function(collection,key,value){
        var map = {};
        collection.forEach(function(item){
            map[item[key]] =  (map[item[key]]||0) + item[value];
        });
        return map;
    };
    self.aggregateByKeyValueAsArrays = function(collection,key,value){
        return _.pairs(self.aggregateByKeyValue(collection,key,value));
    };

    self.aggregateByKeyValueAsObjects = function(collection,key,value){
        var result = self.aggregateByKeyValue(collection,key,value);
        var objArray = [];
        _.forIn(result,function(v,k){
            var obj = {};
            obj[key] = k;
            obj[value] = v;
            objArray.push(obj);
        });
        return objArray;
    };
    return self;
})();