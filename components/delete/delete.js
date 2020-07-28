Component ({
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    text: {
      type: String,
      value: ''
    }
  },
  data: {
    value: "",
    text: ""
  },
  methods: {
    sure(){
      this.triggerEvent('delete','确定')
    },
    back(){
      this.triggerEvent('back','取消')
    },
  }
})