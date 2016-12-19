var pgm = (function(){
    function addSync(x,y){
        console.log(`     [service] processing ${x} and ${y}`);
        var result = x + y;
        console.log('     [service] returning result');
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[consumer] triggering addSync for ${x} and ${y}`);
        var result = addSync(x,y);
        console.log(`[consumer] result = ${result}`)
    }

    function addAsync(x,y, onResult){
        console.log(`     [service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log('     [service] returning result');
            if (typeof onResult === 'function')
                onResult(result);
        },3000);
    }

    function addAsyncClient(x,y){
        console.log(`[consumer] triggering addAsync for ${x} and ${y}`);
        addAsync(x,y, function(result){
            console.log(`[consumer] result = ${result}`)
        });
        
    }

    var addAsyncEvents = (function(){
        var _callbacks = [];
        function addAsync(x,y, onResult){
            console.log(`     [service] processing ${x} and ${y}`);
            
        }
        function subscribe(callback){
            _callbacks.push(callback);
        }
        return {
            process : addAsync,
            subscribe : subscribe
        }
    })();

    var addAsynPromise = function(x,y){
        console.log(`     [service] processing ${x} and ${y}`);
        var promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                var result = x + y;
                console.log('     [service] returning result');
                resolveFn(result);
            },3000);
        });

        return promise;
    }

    return {
        addSyncClient : addSyncClient,
        addAsyncClient : addAsyncClient,
        addAsyncEvents : addAsyncEvents,
        addAsynPromise : addAsynPromise
    }

})();