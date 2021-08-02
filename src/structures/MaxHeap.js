const Heap = require("./Heap");
const HeapNode = require("../models/HeapNode");

module.exports = class MaxHeap extends Heap {
    /**
     * Check if the nodes are in a valid position
     * @param {number} parentKey
     * @param {number} childKey
     * @returns {boolean}
     */
    compareKeys(parentKey, childKey) {
        if (isNaN(parentKey)) throw new TypeError("parentKey must be a number");
        if (isNaN(childKey)) throw new TypeError("childKey must be a number");
        return parentKey > childKey;
    }
};
