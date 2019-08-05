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
            </code>
            <h4>filter</h4>
            <code>
                var arr = [1,2,3,4,5].filter(function(item, index){
                    return item > 3
                })
                <br>
                // arr 为 [4, 5]
            </code>
            <h4>sort</h4>
            <code>
                var arr = [5,7,6].map(function(a, b){
                    return a - b
                })
                <br>
                // arr 为 [5, 6, 7]
            </code>
            <h4>slice</h4>
            <code>
                var arr = [1,2,3].slice(1)
                // arr 为 [2, 3]
                <br>
                var arr = [1,2,3].slice(0,2)
                // arr 为 [1, 2]
            </code>
            <h4>splice</h4>
            <code>
                var arr = [1,2,3]
                var deleteItems = arr.splice(0, 2, ['a'])
                <br>
                // arr 为 ['a', 3]
                deleteItems 为 [1, 2]
            </code>
        </div>
        <div>
            <h3>1、返回Boolean</h3>
            <h4>map</h4>
            <code>
                var res = [1,2,3].map(function(number, index){
                    return number > 4
                })
                // res 为false
                <br>
                有true 即中止遍历
            </code>
        </div>
        <div>
            <h3>1、返回指定项</h3>
            <h4>find</h4>
            <code>
                var res = [1,2,3].map(function(number, index){
                    return nubmer > 2
                })
                // res 为 2
                <br>
                有true 即中止遍历
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
