/*
 * 作者： 曹庭华
 * 日前： 2018年8月21日
 * 功能： 在顶部制造一个可以展现隐藏的动态的tab栏
 * <div v-active-tab="[a,b,c,d]"> 导航栏 <div>
 * 需要固定各tab项所属模块的js类名有 `active-tab-scrollitem${tabIndex}`
 * 示例代码
<ul class="active-tab-scroll" style="opacity:0" v-active-tab="'量价走势;面积段配比;成交价格分布;项目开发跟踪'"></ul>
  <div class="active-tab-scrollitem0"><span>量价走势</span>
       ...
  </div>
  <div class="active-tab-scrollitem1"><span>面积段配比</span>
       ...
  </div>
  <div class="active-tab-scrollitem2"><span>成交价格分布</span>
       ...
  </div>
  <div class="active-tab-scrollitem3"><span>项目开发跟踪</span>
       ...
  </div>
*/
let currentElement
let valueArr
// 节流
const throttle = function(fn, delay, el) {
  let now, // 时间戳
    lastExec,
    timer // 定时器

  const execute = function() {
    fn(el)
    lastExec = now
  }

  return function() {
    now = Date.now()

    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    if (lastExec) {
      const diff = delay - (now - lastExec)
      if (diff < 0) {
        execute()
      } else {
        timer = setTimeout(function() {
          execute()
        }, diff)
      }
    } else {
      execute()
    }
  }
}
// 获取滚动条高度
const getScrollTop = function(element) {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop)
  }
  return element.scrollTop
}
// 获取当前元素的，可滚动的父元素
const getScrollEventTarget = function(element) {
  let currentNode = element
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
    currentNode = currentNode.parentNode
    const overflowY = getComputedStyle(currentNode).overflowY
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode
    }
  }
  return window
}
// 获取元素距离顶部的距离
const getElementTop = function(element) {
  if (element === window) {
    return getScrollTop(window)
  }
  return element.getBoundingClientRect().top + getScrollTop(currentElement ? currentElement.scrollWrap : window)
}
const setHighlightLi = function(i) {
  document.querySelectorAll('.active-tab-scroll li').forEach(item => {
    var obj_class = ('' + item.className + '').replace(/(\s+)/gi, ' ')
    item.className = obj_class.replace('highlight', '').replace(/(^\s+)|(\s+$)/g, '')
  })
  document.querySelectorAll('.active-tab-scroll li')[i].className += ' highlight'
}
// 检查滚动条
const doCheckDist = function(el) {
  var scrollTop = getScrollTop(el.scrollWrap)
  if (scrollTop - el.elStyleShowHeight <= 0) {
    el.style.opacity = 0
  } else {
    el.style.opacity = 1
  }
  for (var i = el.scrollArr.length; i > 0; i--) {
    if (scrollTop >= (el.scrollArr[i] - 100)) {
      setHighlightLi(i)
      return
    }
  }
}
// hightlight当前窗口div对应的li
const highlightTabClick = function(event) {
  var index = event.target.id.substr(-1)
  updateScrollArr()
  currentElement.scrollWrap.scrollTop = currentElement.scrollArr[index]
  setHighlightLi(index)
}
// 每次点击顶部切换更新储存的高度数组
const updateScrollArr = function() {
  currentElement.scrollArr = []
  for (var i = 0; i < valueArr.length; i++) {
    currentElement.scrollArr.push(getElementTop(document.querySelector(`.active-tab-scrollitem${i}`)) - currentElement.elStyleShowHeight - 15)
  }
}
export default {
  inserted(el, { value }) {
    valueArr = value.split(';')
    el.scrollArr = []
    var str = ``
    el.elStyleShowHeight = parseInt(getComputedStyle(el).height)
    for (var i = 0; i < valueArr.length; i++) {
      el.scrollArr.push(getElementTop(document.querySelector(`.active-tab-scrollitem${i}`)) - el.elStyleShowHeight - 15)
      str += `<li id="active-tab-scroll-trigger${i}" class="active-tab-scroll-bar">${valueArr[i]}</li>`
    }
    str = `<ul>${str}</ul>`
    el.innerHTML = str
    el.scrollWrap = getScrollEventTarget(el)
    doCheckDist(el)
    el.scrollListener = throttle(doCheckDist, 80, el)
    el.scrollWrap.addEventListener('scroll', el.scrollListener)
    currentElement = el
    el.clickListener = highlightTabClick
    el.addEventListener('click', el.clickListener, false)
  },
  unbind(el) {
    el.scrollWrap.removeEventListener('scroll', el.scrollListener)
    el.removeEventListener('click', el.clickListener)
    currentElement = null
    valueArr = null
  }
}
