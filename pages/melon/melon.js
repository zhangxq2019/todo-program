Page({
  data: {
    visible: false,
    time: 1500,
    showTime: '西瓜计时',
    timer: null,
    timerStatus: 'start',
    visibleDelete: false,
    visibleAgain: false,
    visibleConfirm:false,
    visibleChange: false,
    visibleAlert: false,
    // oneDisabled: false
  },
  // 显示样式
  changeTime() {
    let m = Math.floor(this.data.time / 60)
    let s = Math.floor(this.data.time % 60)
    if (m === 0) {
      m = '00'
    }else if ((m + "").length === 1) {
      m = '0' + m
    }
    if (s == 0){
      s = '00'
    }else if ((s + "").length === 1) {
      s = '0' + s
    }
    // console.log(`${m}:${s}`)
    this.setData({ showTime: `${m}:${s}` })
  },
  // 点击修改时间
  showChange(){
    this.setData({visibleChange:true})
  },
  completeChange(event){
    let changeTime = event.detail
    if(changeTime>=0 && changeTime<=120){
    this.data.time = changeTime*60
    this.setData({time:this.data.time})
    this.hideChange()
    }else{
      this.setData({visibleAlert:true})
    }
    console.log(this.data.time)
    console.log(event.detail)
  },
  hideChange(){
    this.setData({visibleChange:false})
  },
  // 开始倒计时
  startTimer() {
    // if(this.oneDisabled) return
    // this.oneDisabled = true
    this.setData({ timerStatus: 'stop' })
    this.fullTime = this.data.time
    this.timer = setInterval(() => {
      this.changeTime()
      if (this.data.time <= 0) {
        this.setData({ visibleAgain: true })
        this.setData({visibleConfirm: true})
        return this.clearTimer
      }
      this.data.time = this.data.time - 1
    }, 1000)
    
  },
  // 暂停计时
  clearTimer() {
    clearInterval(this.timer)
    this.timer = null
    this.setData({ timerStatus: 'continue' })
  },
  // 再来一次
  againTimer() {
    this.data.time = 1500
    this.setData({ time: this.data.time })
    this.startTimer()
    this.setData({ visibleAgain: false })
  },
  // 取消计时
  cancelTimer() {
    this.setData({ visibleDelete: true })
    console.log(this.data)
  },

  hideDelete() {
    this.clearTimer()
    this.setData({ visibleDelete: false })
  },
  confirmDelete() {
    this.time = 0
    this.setData({ time: this.time })
    this.hideDelete()
    
  },
  // 完成框
  completeConfirm(event){
    this.clearTimer()
    let content = event.detail
    console.log(event.detail)
    this.setData({visibleConfirm:false})
  },
  hideConfirm(){
    this.clearTimer()
    this.setData({visibleConfirm:false})
  }
})