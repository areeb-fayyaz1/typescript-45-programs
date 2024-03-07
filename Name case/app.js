// lower case
var personName = "babar";
console.log("lower case:", personName.toLocaleLowerCase());
// uper case
console.log("uppercase:", personName.toLocaleUpperCase());
// title case
console.log("title case;", personName.replace(/\b/g, function (c) { return c.toUpperCase(); }));
