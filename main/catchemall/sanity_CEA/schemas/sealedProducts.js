export default 
{
    name: 'sealedProducts',
    title: 'Sealed Products',
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