// $(window).scroll(function() {
//   var e = $(window).scrollTop();
//   e >= 2 ? ($(".headerWrapper").addClass("navbar-fixed-top"),
//   $(".mainNav").css({
//       padding: "0 10px",
//   })) : ($(".headerWrapper").removeClass("navbar-fixed-top"),
//   $(".mainNav").css({
//       padding: "10px",
//   }))
// })

$(document).ready(function(){

  $('#startBtn').click(function(){
    $.ajax({
      url: "/api/getData",
      method: 'post',
      data: {aaa:111},
      dataType: 'json'
    }).done(function(result) {
      if(result.code === 0) {
        renderData(result.data)
      }
    });
   })

})

function renderData(data) {
  ///基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('main-echarts'));
  // 绘制图表
  myChart.setOption({
      title: { text: '预测图 ' },
      tooltip: {},
      xAxis: {
          data: data.keys
      },
      yAxis: {},
      series: [{
          name: '临界值',
          type: 'line',
          data: data.values
      }]
  });
}