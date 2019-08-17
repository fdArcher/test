# mytest

<div style="padding-left: 20px">
        <h1 style="text-align: left">数组</h1>
        <h2>一，常用的高阶函数     <small>按返回值分类</small></h2>
        <div>
            <h3>1、返回数组</h3>
            <h4>map</h4>
            <code>
                var arr = [1,2,3].map(function(number, index){
                    return number * number + index
                })</code><br><code>
                // arr 为 [1, 5, 11]
                对当前数组数据进行整理得到一个映射的新数组
            </code>
            <h4>filter</h4>
            <code>
                var arr = [1,2,3,4,5].filter(function(item, index){
                    return item > 3
                })
                </code><br><code>
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
                </code><br><code>
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
                </code><br><code>
                var arr = [1,2,3].slice(0,2)
                // arr 为 [1, 2]
                取指定下标之间的项得到一个新数组
                不传结束位置时默认截取到结束
            </code>
            <h4>splice</h4>
            <code>
                var arr = [1,2,3]
                var deleteItems = arr.splice(0, 2, ['a'])
                </code><br><code>
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
                </code><br><code>
                //有true 即中止遍历
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
                    </code><br><code>
                // res 为 3
                <br>
                有true 即中止遍历, 返回数组中第一个符合条件的项，没有则返回null
            </code>
        </div>
        <div>
            <h3>1、返回字符串</h3>
            <h4>join</h4>
            <code>
                var str = [11,22,33].join(',')</code><br><code>
                // str为"11,22,33"
            </code>
        </div>
    </div>
<h3>示例过滤并整理一组对象 （找到score大于10并且按照时间排序，同时转化姓名）</h3>
     <div>   <code> 
                var arr = [{
              score: 7,
              createTime: '2019-07-16',
              name: '姓名'
          },{
              score: 11,
              createTime: '2019-03-16',
              name: '姓名'
          },{
              score: 6,
              createTime: '2019-08-16',
              name: '姓名'
          },{
              score: 15,
              createTime: '2019-10-16',
              name: '姓名'
          },{
              score: 12,
              createTime: '2017-03-16',
              name: '姓名'
          }]</code><br><code>
          var result = arr.filter(function(item) {
              return item.score > 10
          }).sort(function(a,b) {
              return new Date(a.createTime).getTime() - new Date(b.createTime).getTime()
          }).map(function (item, index) {
              return Object.assign({}, item, {
                  name: '转化'+item.name+(index+1)
              })
          })</code><br><code>
        /**  执行结果为 result: [{
              score: 12,
              createTime: '2017-03-16',
              name: '转化姓名1'
          },{
              score: 11,
              createTime: '2019-03-16',
              name: '转化姓名2'
          },{
              score: 15,
              createTime: '2019-10-16',
              name: '转化姓名3'
          }]
          */
        </code>
     </div>
     <h1>Vue组件 常用生命周期</h1>
     <div>   <h3>created  mounted  beforeDestoryed Destoryed
             <div> <code>
                 其中created在函数属性初始化时执行;
                 mounted在render函数第一次执行之后执行
                 beforeDestoryed()在vue实例销毁之后执行（可以解绑dom绑定事件）
                Destoryed在实例完全销毁之后执行
               </code>
              </div>
     </div>
     <h1>Vue组件 中this 能访问到的东西</h1>
     <div>   <h3>Dom this.$el
             <div> <code> 
                     当前组件实例最外层的dom元素
                     可以使用this.$el.querySelector('css选择器')选中dom节点，比document.querySelector效率要高
               </code>
              </div>
     </div>
     <div>   <h3>props 父级传入的属性名或者方法名 this.propsData, this.propsMethods
             <div> <code> 
                     优先级最高的属性，会覆盖data,computed,methods 中的属性和方法
               </code>
              </div>
     </div>
     <div>   <h3>inject 注入的外层provide的依赖对象 ['injectObj'] 
             <div> <code> 
                     依赖注入的属性和方法，常用的有form  列表和表单中都有注入，组件可以由此拿到很多依赖属性
                     inject的注入顺序在data函数初始化之前
                     子组件 inject: ['chart'],
  父组件provide() {
    return{ chart: this }
  },
               </code>
              </div>
     </div>
     <div>   <h3>data函数命名的属性
             <div> <code> 
                     最常规的组件属性，常用的控制属性，展示数据都放在这里面
               </code>
              </div>
     </div>
     <div>   <h3>computed 计算属性优先级最低的属性，会被data,inject,props覆盖
             <div> <code> 
             computed: {
                    ddX() { // 计算全部节点x值
                      return this.c.shiroImg.calcx/138 * this.freshX // (x - 220 ) * this.scaleNum
                    },
                }
               </code>
              </div>
     </div>
     <div>   <h3>methods中的方法名
             <div> <code>
                     组件自定义方法
               </code>
              </div>
     </div>
     <div>   <h3>Vue 原型挂载的属性名，方法名，全局store状态
             <div> <code>
                     常用的有this.$confirm,this.$alert,this.$store.getters,this.$deepCopy,this.$createElement,this.dateUtil,this.$math,
                        this.children,this.$parent
               </code>
              </div>
     </div>
     
     ### 具名元素或者子组件 this.$refs  (在生命周期mounted之后才可调用)
             <div> <code> 
               </code>
              </div>
     # Vue组件 中template中 能访问到的东西，上面this中的所有外
     <div>   <h3> 还有过滤器filters
             <div> 全局的或者局部定义的都可以<code>
               </code>
              </div>
              <h3>插槽slot-scope中的作用域属性
             <div> 全局的或者局部定义的都可以<code>
               </code>
              </div>
     </div>
     # Vue组件 构造方法</h1>
     ### mixins(继承所有的钩子及属性方法，即深层Object.assign继承了除mixins外的其他构造属性), components(可全局，template), slot（template）
             <div> 全局的或者局部定义的都可以<code>
               </code>
              </div>
   
