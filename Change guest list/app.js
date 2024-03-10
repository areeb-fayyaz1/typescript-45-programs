// exercise 13
// let transportation: string[]=['civic','bus','bike','suzuki','jet'];
//for(let i=0; i<transportation.length; i++);{
//  console.log('I would like to own a' + transportation[i]);
//}
var guest_list = ['ali', 'farhan', 'raza', 'ayesha'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThankyou');
}
var not_present = "farhan";
var new_guest = "babar azam";
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThankyou\n');
}
console.log("mr ".concat(not_present, " will not be coming to dinner"));
