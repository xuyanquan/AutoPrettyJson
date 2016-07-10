# AutoPrettyJson
format json insert align

run index.html, put json data, click pretty button to get result.

example

input unformat json
```javascript
{sdfasdf: 1231, sdf:22,
sa:44,
cccc: { ca:"IamTT", bccc: "yoyo", cc: {op:"errr",ccc:34} }
}
```
change to
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