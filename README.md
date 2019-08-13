# mytest

> A Vue.js project

<div style="text-align: left;padding-left: 20px">
        <h1>数组</h1>
        <h2>一，常用的高阶函数     <small>按返回值分类</small></h2>
        <div>
            <h3>1、返回数组</h3>
            <h4>map</h4>
            <code>
                var arr = [1,2,3].map(function(number, index){
                    return number * number + index
                })
                // arr 为 [1, 5, 11]
                对当前数组数据进行整理得到一个映射的新数组
            </code>
            <h4>filter</h4>
            <code>
                var arr = [1,2,3,4,5].filter(function(item, index){
                    return item > 3
                })
                <br>
                // arr 为 [4, 5]
                对当前数组按条件过滤，取return为true的所有项得到一个新数组
            </code>
            <h4>sort</h4>
            <code>
                var arr = [{
                        name: 'fir',value: 5
                    },{
                        name: 'sec',value: 7
                    },{
                        name: 'thi',value: 6
                    }].sort(function(a, b){
                    return a.value - b.value
                })
                <br>
                // arr 为 [{
                        name: 'fir',value: 5
                    },{
                        name: 'sec',value: 6
                    },{
                        name: 'thi',value: 7
                    }].sort(function(a, b){
                    return a.value - b.value
                }]
                遍历所有项获得一个按指定方法排序的新数组 return true时会交换前后项的位置
            </code>
            <h4>slice</h4>
            <code>
                var arr = [1,2,3].slice(1)
                // arr 为 [2, 3]
                <br>
                var arr = [1,2,3].slice(0,2)
                // arr 为 [1, 2]
                取指定下标之间的项得到一个新数组
                不传结束位置时默认截取到结束
            </code>
            <h4>splice</h4>
            <code>
                var arr = [1,2,3]
                var deleteItems = arr.splice(0, 2, ['a'])
                <br>
                // arr 为 ['a', 3]
                deleteItems 为 [1, 2]
                改变原数组并且得到删除项所组成的新数组
            </code>
        </div>
        #####以上得到的数组的项除了map，其他都是对原数组项的值引用
        <div>
            <h3>1、返回Boolean</h3>
            <h4>some</h4>
            <code>
                var res = [1,2,3].some(function(number, index){
                    return number > 4
                })
                // res 为false
                <br>
                有true 即中止遍历
                等价于
                var arr  = [1,2,3]
                var res = true
                for (var i = 0; i < arr.length;i++) {
                   if (arr[i] > 0) res = true
                   break
                }
            </code>
        </div>
        <div>
            <h3>1、返回指定项</h3>
            <h4>find</h4>
            <code>
                var res = [1,2,3].find(function(number, index){
                    return nubmer > 2
                })
                // res 为 3
                <br>
                有true 即中止遍历, 返回数组中第一个符合条件的项，没有则返回null
            </code>
        </div>
        <hr>
        <h2>二，流程控制     <small>代替for 循环</small></h2>
        <div>
            <h3>1、返回数组</h3>
            <h4>map</h4>
            <code>
                var arr = [1,2,3].map(function(number, index){
                    return number * number + index
                })
                // arr 为 [1, 5, 11]
            </code>
        </div>
    </div>
