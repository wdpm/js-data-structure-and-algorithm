# array

|方法|描述|
|:---|:---|
|push(items)|添加元素到末尾|
|pop() |删除末尾一个元素|
|unshift(items)|添加元素到开头|
|shift()|删除开头一个元素|
|splice(index,deleteCount,items)|删除index处的deleteCount个元素，并用items替代被删除的元素|
|concat()|拼接2个或多个数组，返回新数组|
|every(callback,thisArg)|对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true|
|some(callback,thisArg)|对数组中的每一项运行给定函数，如果任一项返回true，则返回true |
|filter(callback,thisArg)|对数组中的每一项运行给定函数，返回该函数会返回true的项组成的数组|
|forEach(callback,thisArg)|对数组中的每一项运行给定函数。这个方法没有返回值|
|join(separator)|将所有的数组元素连接成一个字符串|
|indexOf(searchElement,fromIndex)|返回第一个与给定参数相等的数组元素的索引，没有找到则返回-1|
|lastIndexOf(searchElement,fromIndex)|返回在数组中搜索到的与给定参数相等的元素的索引里最大的值|
|map(callback,thisArg)|对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组|
|reverse()|颠倒数组元素的顺序|
|slice(start,end)|传入索引值，将数组里对应索引范围内的元素作为新数组返回|
|sort(compare)|按照字母顺序对数组排序，支持传入指定排序方法的函数作为参数|
|reduce(prev,cur,curIdx,array)||
|toString()|转化为字符串|
|valueOf()|转化为值|

