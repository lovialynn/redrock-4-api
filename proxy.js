const view = document.getElementById('view');
const data = document.getElementById('data')
const root = {
    data:'hello world'
}
view.value = data.innerHTML = root.data;

const options = {
    root:root.data
}

const handler = {
    get:(target,propkey)=>{
        console.log(`监听到${propkey}被取啦,值为${target[propkey]}`);
        data.innerHTML = target[proxy]
      //  return target[propkey]
    },
    set:(target,propkey,value)=>{
        if(target[propkey]!==value){
            console.log(`监听到${propkey}变化了,值为:${value}`)
            data.innerHTML = value;
        }
        return true;
    }
}
const proxy = new Proxy(options,handler);
view.oninput = function(){
    proxy.root = view.value;
}
