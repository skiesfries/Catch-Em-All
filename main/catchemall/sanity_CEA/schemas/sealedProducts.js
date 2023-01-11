export default 
{
    name: 'sealedProducts',
    title: 'Sealed Products',
    type: 'document',
    fields: 
    [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'string' }],  
            options: { hotspot: true }
        },
        {
            name:'name',
            title:'Product Name',
            type: 'string',
        },
        {
            name:'setName',
            title:'Set',
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
        }
        

    ]
}