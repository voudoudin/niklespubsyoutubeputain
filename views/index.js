let wrapper = document.getElementById('wrapper')
let url = document.getElementById('url')
const host = location.host
wrapper.addEventListener('click',(e)=>{
    if(e.target.nodeName==="BUTTON"){
        let {type, command} = e.target.dataset
        fetch(`http://${host}/?type=${type}&cmd=${command}`)
        .then(resp=>{
            console.log(resp)
        })
    }
})
url.addEventListener('keyup',({key})=>{
    if(key==='Enter'){
        fetch(`http://${host}/?url=${url.value}`)
        console.log(`http://${host}/?url=${url.value}`)
    }
})