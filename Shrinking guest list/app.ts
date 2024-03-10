let guest_list:string[]=['ali','farhan','raza','ayesha'];
//for(let i=0; i<guest_list.length; i++){
 //   console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThankyou')
//}
let not_present:string="farhan";
let new_guest:string="babar azam";
//for(let i=0; i<guest_list.length; i++){
//console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThankyou\n')

//}
guest_list.unshift('shahin','sarfraz','rizwam');
//for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow because we have extra table .\n\nThankyou\n')
    //}
console.log('\nwe dont have space');
while(guest_list.length>2){
    let remove_guest=guest_list.pop();
    console.log(`sorry sir/madam ${remove_guest} you are not invited`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Respected sir/madam' + guest_list[i] + ',\nyou are still invited .\n\nThankyou\n')
    }
    guest_list.splice(0,2)
    console.log(guest_list);
    


