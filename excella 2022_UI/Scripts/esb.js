const show=()=>"hello";

console.log(show())

const total=(a,b)=>a+b;

const values=[45,55]
console.log("Total:"+total(...values));

let list1=[100,200,300]
let list2=[400,500,600]

const combine=(list1,list2)=>{
    let combine=[...list1,...list2]


    return combine;
}

console.log(combine(list1,list2));

let employee={id:101,empName:"Ramesh",salary:23000}

const destru1=(obj)=>{
    //console.log(obj.id)
    //console.log(obj.salary)
    let {id,salary}=obj;
    console.log(id+","+salary);
}

destru1(employee);

const destru2=(obj)=>{
    //console.log(obj.id)
    //console.log(obj.salary)
    let {id,...others}=obj;
    console.log(id);
    console.log(others);
}

destru2(employee);