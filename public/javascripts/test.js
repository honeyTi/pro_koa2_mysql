+function () {
    var a = $('.first-li');
    var b = $('.btn');
    console.log(b);
    b.click(function () {
        a.html(1231231231321312);
        console.log('测试点击事件');
    })
    console.log(b);
    a.innerHTML = '测试js代码';
    console.log(a.innerHTML);
    $.ajax(
        {
            type:'get',
            url:'http://localhost:3000/string',
            data:{},
            success:function (data) {
                console.log(12312);
                console.log(data);
            }
        }
    )
}()