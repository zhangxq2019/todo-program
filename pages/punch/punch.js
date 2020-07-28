Page({
  data: {
    lists: [
      {
        id: 0,
        text: '点击+创建目标，可以添加新的todo',
        finished: false,
        color: '',
        priority: '优先级',
      },
      {
        id: 1,
        text: '点击圆点，完成todo，1s后已完成的todo自动被删除',
        finished: false,
        color: '',
        priority: '优先级'
      },
      {
        id: 2,
        text: '暂时无法修改已创建的todo，只能删除重建',
        finished: false,
        color: '',
        priority: '优先级'
      },
      {
        id: 3,
        text: "点击'重要'给重要事件加边框，加以区分，再次点击可取消",
        finished: false,
        color: '',
        priority: '优先级'
      }
    ],
    selectTab: '',
    visible: false,
    // visibleDelete: false,
    color: true
  },
  // 点击创建目标出现confirm
  showConfirm() {
    this.setData({ visible: true })
  },
  // 点击取消隐藏confirm
  hideConfirm() {
    this.setData({ visible: false })
  },
  // 点击确定创建todo
  createConfirm(event) {
    let content = event.detail
    if (content) {
      let todo = [{ id: this.data.lists.length + 1, text: content, finished: false, priority: '优先级' }]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
    }
  },
  // 当todo被选择时，圆点变绿文字被划线代表已完成，0.8s后自动删除
  selectedTodo(event) {
    var _this = this
    let lists = this.data.lists
    let index = event.currentTarget.dataset.index
    console.log(lists[index])
    lists[index].finished = true
    this.setData({ lists: lists })
    setTimeout(function () {
      lists.splice(index, 1)
      _this.setData({ lists: lists })
    }, 800)
  },


  // 点击优先级修改文本颜色
  clickPriority(event) {
    let getcolor = event.currentTarget.dataset.color
    let getpriority = event.currentTarget.dataset.text
    let index = event.currentTarget.dataset.index
    this.data.lists[index].color = getcolor
    this.data.lists[index].priority = getpriority
    this.setData({ lists: this.data.lists })
    this.setData({color: !this.data.color})
  },
//   // 点击显示下拉框
//   showtime(event) {
//     let index = event.currentTarget.dataset.index
//     console.log(this.data.lists[index].show)
//     this.data.lists[index].show = !this.data.lists[index].show
//     this.setData({lists: this.data.lists})
//   }
})