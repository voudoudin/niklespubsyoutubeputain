let wrapper = document.getElementById('wrapper')
let url = document.getElementById('url')
const host = location.host
wrapper.addEventListener('click',(e)=>{
    if(e.target.nodeName==="BUTTON"){
        let {type, command} = e.target.dataset
        fetch(`http://${host}/exec/?type=${type}&cmd=${command}`)
    }
})
url.addEventListener('keyup',({key})=>{
    if(key==='Enter'){
        fetch(`http://${host}/exec/?url=${url.value}`)
    }
})