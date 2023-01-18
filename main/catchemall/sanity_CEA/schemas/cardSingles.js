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
            of: [{type: 'string'}],
            options: {hotspot: true,}
        },
        {
            name:'name',
            title:'Card Name',
            type: 'string',
        },
        {
            name:'setName',
            title:'Set Name',
            type: 'string',
        },
        {
            name:'cardNumber',
            title:'Card Number',
            type: 'number',
        },
        {
            name:'setTotal',
            title:'Set Total',
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
            validation: (Rule) => Rule.positive(),
            options: {
                decimalScale: 2,
                fixedDecimalScale: true,
                allowNegative: false,
                decimalSeparator: '.',
                thousandSeparator: ',',
            }
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
        },
        {
            name:'review',
            title:'Review',
            type: 'number',
        }
        

    ]
    

}