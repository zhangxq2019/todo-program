Component ({
  properties: {
    placeholder: {
      type: String,
      value: ""
    },
    visible: {
      type: Boolean,
      value: true
    },
    value: {
      type: String,
      value: ""
    }
  },
  data: {
    value: ""
  },
  methods: {
    confirm(){
      this.triggerEvent('confirm',this.data.value)
    },
    cancel(){
      this.triggerEvent('cancel','取消')
    },
    watchValue(event){
      this.data.value = event.detail.value
    }
  }
})