const {http} = require('../../lib/http.js');
Page({
  data: {
    lists: [],
    visible: false,
    color: true
  },
  onShow(){
    http.get('/todos?completed=false').then(response=>{
      this.setData({ lists: response.data.resources })
    })
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
      http.post('/todos',{
        completed: false, description: content
    })
    .then(response => {
      let todo = [response.data.resource]
      this.data.lists = todo.concat(this.data.lists)
      this.setData({ lists: this.data.lists })
      this.hideConfirm()
  }) 
 }
  },
  // 当todo被选择时，圆点变绿文字被划线代表已完成，0.8s后自动删除
  destroyTodo(event){
    let index = event.currentTarget.dataset.index
    let id = event.currentTarget.dataset.id
    http.put(`/todos/${id}`,{
      completed: true
    })
    .then(response => {
      let todo = response.data.resource
      this.data.lists[index] = todo
      this.setData({ lists: this.data.lists })
    })
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