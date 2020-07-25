Component ({
  properties: {
    visible: {
      type: Boolean,
      value: true
    },
    value: {
      type: String,
      value: ""
    },
    placeholder:{
      type: String,
      value: ''
    }
  },
  data: {
    value: "",
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