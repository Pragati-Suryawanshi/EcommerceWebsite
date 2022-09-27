
//add item to cart
export const addCart=(product)=>
{
    return{
        type:'ADDITEM',
        payload:product
    }
}


//for delete item
export const delCart=(product)=>
{
    return{
        type:'DELITEM',
        payload:product
    }
}
