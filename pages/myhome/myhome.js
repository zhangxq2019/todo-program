Page({
  data: {
    tab: 'task',
    lists: 
      {
        "本周四":[
          {time:"14:00",text:"这是一个测试语句",id:0},
          {time:"14:00",text:"这是一个测试语句",id:1}
        ],
        "本周五":[
          {time:"14:00",text:"这是一个测试语句",id:0},
          {time:"14:00",text:"这是一个测试语句",id:1}
        ]
      }
    
  },
  changeTab(event){
    let name = event.currentTarget.dataset.name
    this.setData({tab:name})
    console.log(event)
  }
})