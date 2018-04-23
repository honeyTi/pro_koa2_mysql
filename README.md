1.要求版本 node>8.0版本

2.database里面是数据库连接池信息

3.database下面有sql脚本，选择性的创建表在数据库中

4.routes/index.js 里面定义数据接口

5.初始化时需要安装依赖（yarn install || npm install）

6.测试数据库联通方式（需要在数据库中创建test表，然后insert一条数据用作测试），可以在浏览器输入地址  localhost:3000/test 有数据返回就说明数据库连接成功

