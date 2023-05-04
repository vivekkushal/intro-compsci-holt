import React from 'react';
import {shuffle, range} from 'lodash';
import {App, snapshot, done, clear} from './sort-visualizer';

import './sort.css';

function sort(nums) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you
  for (let i = 1; i < nums.length; i++) {
    snapshot(nums);
    while (i >= 0 && nums[i] > nums[i + 1]) {
      let temp = nums[i];
      nums[i] = nums[i + 1];
      nums[i + 1] = temp;
      i--;
      snapshot(nums);
    }
  }
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}
