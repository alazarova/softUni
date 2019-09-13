function minAgeFunc(minAge, name1, age1, name2, age2){
    let [obj1,obj2] = [{"name": name1,"age" : age1},{ "name": name2, "age": age2,}]
    if(obj1.age >= minAge){
        console.log(obj1)
    }
    if(obj2.age >= minAge){
        console.log(obj2)
    }
}
console.log(minAgeFunc(12, 'Ivan', 15, 'Asen', 9));