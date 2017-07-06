# JavaScript Front-End Interview Challenges

## Beginner

1.  `isPrime` - Returns `true` or `false`, indicating whether the given number is prime.

        isPrime(0)                          // false
        isPrime(1)                          // false
        isPrime(17)                         // true
        isPrime(10000000000000)             // false

2.  `factorial` - Returns a number that is the factorial of the given number.

        factorial(0)                        // 1
        factorial(1)                        // 1
        factorial(6)                        // 720

3.  `fib` - Returns the nth [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

        fib(0)                              // 0
        fib(1)                              // 1
        fib(10)                             // 55
        fib(20)                             // 6765

4.  `isSorted` - Returns `true` or `false`, indicating whether the given array of numbers is sorted.

        isSorted([])                        // true
        isSorted([-Infinity, -5, 0, 3, 9])  // true
        isSorted([3, 9, -3, 10])            // false

5.  `filter` - Implement the [`filter`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter) function.

        filter([1, 2, 3, 4], n => n < 3)    // [1, 2]

6.  `reduce` - Implement the [`reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) function.

        reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

7.  `reverse` - Reverses the given string (yes, using the built in [`reverse`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) function is cheating).

        reverse('')                         // ''
        reverse('abcdef')                   // 'fedcba'

8.  `indexOf` - Implement the [indexOf](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) function for arrays.

        indexOf([1, 2, 3], 1)               // 0
        indexOf([1, 2, 3], 4)               // -1

9.  `isPalindrome` - Return `true` or `false` indicating whether the given string is a plaindrone (case and space insensitive).

        isPalindrome('')                                // true
        isPalindrome('abcdcba')                         // true
        isPalindrome('abcd')                            // false
        isPalindrome('A man a plan a canal Panama')     // true

10.  `missing` - Takes an unsorted array of unique numbers (ie. no repeats) from 1 through some number _n_, and returns the missing number in the sequence (there are either no missing numbers, or exactly one missing number). Can you do it in _O(N)_ time? Hint: There’s a clever formula you can use.


        missing([])                         // undefined
        missing([1, 4, 3])                  // 2
        missing([2, 3, 4])                  // 1
        missing([5, 1, 4, 2])               // 3
        missing([1, 2, 3, 4])               // undefined

11.  `isBalanced` - Takes a string and returns `true` or `false` indicating whether its curly braces are balanced.


        isBalanced('{}')                      // true
        isBalanced('}{')                      // false
        isBalanced('{{}')                     // false
        isBalanced('{}{}')                    // true
        isBalanced('foo { bar { baz } boo }') // true
        isBalanced('foo { bar { baz }')       // false
        isBalanced('foo { bar } }')           // false


## Intermediate

1.  `fib2` - Like the `fib` function you implemented above, able to handle numbers up to `50` (hint: look up memoization).

        fib2(0)                               // 0
        fib2(1)                               // 1
        fib2(10)                              // 55
        fib2(50)                              // 12586269025

2.  `isBalanced2` - Like the `isBalanced` function you implemented above, but supports 3 types of braces: curly `{}`, square `[]`, and round `()`. A string with interleaving braces should return false.

        isBalanced2('(foo { bar (baz) [boo] })') // true
        isBalanced2('foo { bar { baz }')         // false
        isBalanced2('foo { (bar [baz] } )')      // false

3.  `uniq` - Takes an array of numbers, and returns the unique numbers. Can you do it in _O(N)_ time?

        uniq([])                              // []
        uniq([1, 4, 2, 2, 3, 4, 8])           // [1, 4, 2, 3, 8]

4.  `intersection` - Find the intersection of two arrays. Can you do it in _O(M+N)_ time (where _M_ and _N_ are the lengths of the two arrays)?

        intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])    // [4, 1]
        intersection([1, 5, 4, 2], [7, 12])             // []

5.  `sort` - Implement the [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function to sort an array of numbers in _O(N×log(N))_ time.

        sort([])                              // []
        sort([-4, 1, Infinity, 3, 3, 0])      // [-4, 0, 1, 3, 3, Infinity]

6.  `includes` - Return `true` or `false` indicating whether the given number appears in the given _sorted_ array. Can you do it in _O(log(N))_ time?

        includes([1, 3, 8, 10], 8)            // true
        includes([1, 3, 8, 8, 15], 15)        // true
        includes([1, 3, 8, 10, 15], 9)        // false

7.  `assignDeep` - Like [`Object.assign`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign), but merges objects deeply.

        assignDeep({ a: 1 }, {})                                      // { a: 1 }
        assignDeep({ a: 1 }, { a: 2 })                                // { a: 2 }
        assignDeep({ a: 1 }, { a: { b: 2 } })                         // { a: { b: 2 } }
        assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }) // { a: { b: { c: 1, d: 2 }}, e: 3 }


## Harder

1.  `permute` - Return an array of strings, containing every permutation of the given string.

        permute('')             // []
        permute('abc')          // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

2.  `debounce` - Implement the [debounce](https://lodash.com/docs/4.17.4#debounce) function.

        let a = () => console.log('foo')
        let b = debounce(a, 100)
        b()
        b()
        b() // only this call should invoke a()

3.  `seq` - Resolve an array of promises in sequence (as opposed to [`Promise.all`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise/all), which does it in parallel).

        let a = Promise.resolve('a')
        let b = Promise.resolve('b')
        let c = Promise.resolve('c')
        await seq([a, b, c])                  // ['a', 'b', 'c']
        await seq([a, c, b])                  // ['a', 'c', 'b']

4.  Implement a [`LinkedList`](https://en.wikipedia.org/wiki/Linked_list) class without using JavaScript’s built-in arrays (`[]`). Your LinkedList should support just 2 methods: `add` and `has`:

        class LinkedList {...}
        let list = new LinkedList(1, 2, 3)
        list.add(4)                           // undefined
        list.add(5)                           // undefined
        list.has(1)                           // true
        list.has(4)                           // true
        list.has(6)                           // false

5.  Implement a [`HashMap`](https://en.wikipedia.org/wiki/Hash_table) class without using JavaScript’s built-in objects (`{}`) or `Map`s. You are provided a `hash()` function that takes a string and returns a number (the numbers are mostly unique, _but sometimes two different strings will return the same number_):

        function hash (string) {
          return string
            .split('')
            .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
        }

    Your HashMap should support just 2 methods, `get`, `set`:

        let map = new HashMap
        map.set('abc', 123)                   // undefined
        map.set('foo', 'bar')                 // undefined
        map.set('foo', 'baz')                 // undefined
        map.get('abc')                        // 123
        map.get('foo')                        // 'baz'
        map.get('def')                        // undefined

6.  Implement a [`BinarySearchTree`](https://en.wikipedia.org/wiki/Binary_search_tree) class. It should support 4 methods: `add`, `has`, `remove`, and `size`:

        let tree = new BinarySearchTree
        tree.add(1, 2, 3, 4)
        tree.add(5)
        tree.has(2)                           // true
        tree.has(5)                           // true
        tree.remove(3)                        // undefined
        tree.size()                           // 3

7.  Implement a [`BinaryTree`](https://en.wikipedia.org/wiki/Binary_tree) class with breadth first search and inorder, preorder, and postorder depth first search functions.

        let tree = new BinaryTree
        let fn = value => console.log(value)
        tree.add(1, 2, 3, 4)
        tree.bfs(fn)                          // undefined
        tree.inorder(fn)                      // undefined
        tree.preorder(fn)                     // undefined
        tree.postorder(fn)                    // undefined
