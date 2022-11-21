import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import cardSingles from './cardSingles';
import sealedProducts from './sealedProducts';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    cardSingles, sealedProducts
  ]),
})
