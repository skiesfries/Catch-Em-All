export default 
{
    name: 'cardSingles',
    title: 'Card Singles',
    type: 'document',
    fields: 
    [
        {
            name:'image',
            title:'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {hotspot: true,}
        },
        {
            name:'name',
            title:'Card Name',
            type: 'string',
        },
        {
            name:'set',
            title:'Set',
            type: 'string',
        },
        {
            name:'cardNumber',
            title:'Card Number',
            type: 'number',
        },
        {
            name:'rarity',
            title:'Rarity',
            type: 'string',
        },
        {
            name:'price',
            title:'Price',
            type: 'number',
        },
        {
            name:'slug',
            title:'Slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name:'description',
            title:'Description',
            type: 'string',
        }
        

    ]
    

}