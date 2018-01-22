!function(){
    let view = document.querySelector('section.content')
    let model = {
        init: function(){},
        fetch: function(){
            let script = document.createElement('script')
            let functionName = 'bowen' + parseInt(Math.random()*100000,10)
            window[functionName] = (result) => {
                console.log(1)
                console.log(result)
                console.log(JSON.parse(result))
                // if(result.reason === '成功的返回'){

                // }else{

                // }
            }
            script.src = 'http://v.juhe.cn/toutiao/index?type=top&key=4e445aa0f80e579f798c7343464d9564&callback=' + functionName
            document.body.appendChild(script)
            script.onload = (event) => {
                console.log('success')
                event.currentTarget.remove()
                delete window[functionName]
            }
            script.onerror = (event) => {
                alert('error')
                event.currentTarget.remove()
                delete window[functionName]
            }
        },
        save: function(){}
    }
    let controller = {
        view: null,
        model: null,
        init: function(){
            this.view = view
            this.model = model
            this.model.init()
            this.model.fetch()
            this.bindEvents()
        },
        bindEvents: function(){

        }
    }
    controller.init(view,model)
}.call()