// Write your solution in this file!
const employee = {name :"George", 
streetAdress : "1 Park ave, Kansas City PA"};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const updateEmployee = {...obj};
    updateEmployee[key] = value;
    return updateEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key) {
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

