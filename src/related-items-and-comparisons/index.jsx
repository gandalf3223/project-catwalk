import React from 'react';
import CardItem from './CardItem.jsx';
import RelatedItemsList from './RelatedItemsList.jsx';
import './related-items-and-comparisons.scss';

import { products } from './sampleData.js';

const RelatedItemsAndComparisons = (/* { products } */) => (
  <div id="related-items-and-comparisons">
    <div>
      <RelatedItemsList products={products}/>
    </div>
  </div>
);

export default RelatedItemsAndComparisons;
