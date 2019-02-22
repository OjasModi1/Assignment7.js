function type_check(a)
{
    if(x == null && typeof x == "object"){
        return " null"
    }
    else if(isNaN(x)&& typeof x == "number"){
        return " NaN";
    }
    else if(!x){
      
        return "This is Undefined";
   
   }
if(a.constructor==Array)
{
if (a[0].constructor==Object)
{
console.log("array of an object:");
}
else if (a[0].constructor==String)
{
console.log("array of strings:")    
}
else 
{
console.log("array")    
}
a.map(function (a)
{
console.log(a)
}) 
}
else if(typeof(a)=="string")
{
console.log("String");    
}
else if(typeof(a)==null)
{
console.log("object");    
}
else if(typeof(a)=="number")
{
console.log("number");    
}
else if(typeof(a)=="boolean")
{
console.log("boolean");    
}
else if(a.constructor==Function)
{
console.log("function :")    
}
else if(a.constructor==Object)
{
 console.log("object :")   
}

return a;
}
type_check(3)
type_check("ojas")
type_check(false)
