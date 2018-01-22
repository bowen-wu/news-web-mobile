!function(){
    let view = document.querySelector('section.content')
    let model = {
        init: function(){},
        fetch: function(){
            let request = new XMLHttpRequest()
            debugger
            request.open('GET','http://v.juhe.cn/toutiao/index?type=top&key=4e445aa0f80e579f798c7343464d9564')
            request.onreadystatechange = () => {
                console.log(request.readyState)
                if(request.readyState === 4){
                    console.log('请求和相应都完毕了')
                    if(request.status >= 200 && request.status < 300){
                        let date = JSON.parse(requeat.responseText)
                        console.log(date)
                    }
                }
            }
            request.send()
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