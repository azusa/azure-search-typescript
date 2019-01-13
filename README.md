
## Prequirements

- node.js(10.x LTS)
- [.NET core 2.1](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2)
- version 2.x of the [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#v2)



## Build 

### set API_KEY 

```
# bash
export API_KEY="*****"
# cmd.exe
set API_KEY="***"
```

### boot local host

```
(cd MyHttpTrigger && npm install) 
func host start --build
```

### get response

```
curl -f http://localhost:7071/api/MyHttpTrigger?name=%e6%9d%b1%e4%ba%ac
```

## Deploy (to Azure Funcitons)

```
# on master branch
git push origin master
```
