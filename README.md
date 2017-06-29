# AutoPrettyJson
format json insert align

运行 index.html, 输入不规则json数据, 点击 pretty 按钮得到格式化json.

例子

输入不规则json
```javascript
{sdfasdf: 1231, sdf:22,
sa:44,
cccc: { ca:"IamTT", bccc: "yoyo", cc: {op:"errr",ccc:34} }
}
```
得到如下
```javascript
{
	sdfasdf : 1231 ,
	sdf     : 22   ,
	sa      : 44   ,
	cccc    : {
		ca   : IamTT ,
		bccc : yoyo  ,
		cc   : {
			op  : errr ,
			ccc : 34  
		}
	}
}
```
