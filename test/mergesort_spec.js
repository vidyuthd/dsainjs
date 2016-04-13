var mergeSortRecursive = require('../js/mergesort_recursive')
var mergeSortIterative = require('../js/mergesort_iterative')

var expect = require('chai').expect

describe('Recursive merge sort', function(){
    it('is working', function(){
        expect(mergeSortRecursive([1,3,2,4])).to.eql([1,2,3,4])
    })
})

describe('Recursive merge sort', function(){
    it('is working', function(){
        expect(mergeSortIterative([1,3,2,4])).to.eql([1,2,3,4])
    })
})
