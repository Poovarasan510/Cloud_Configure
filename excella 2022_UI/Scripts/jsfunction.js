function simple()
{
    console.log("Hello from simple function");
}

function simpleWithArg(name)
{
    console.log(name);
}

function simpleWithReturn(name)
{
    return 'hello '+name;
}

function invoke(name)
{
    console.log(simpleWithReturn(name));
}

function simpleWithFunctionAsArg(funcRef)
{ 
    console.log(funcRef);

    var ref=funcRef();

    console.log(ref);
}

callFunc=function()
{
     simpleWithFunctionAsArg(simpleWithReturn('sachin'));
    //simpleWithFunctionAsArg(simpleWithReturn());

}

global_a=100; //var global_a=100 //both are global only
function sum()
{
    local_c=400;
    var local_b=200; //var means local
}

function display()
{  sum();
    console.log(global_a);
  //  console.log(local_b);
    console.log(local_c);
}