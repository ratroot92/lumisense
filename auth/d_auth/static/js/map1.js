$('#map').hide();

    function changeMap(){
        $('#multi_layered_map, #map').toggle()
    }

    //

    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_dark);
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // create chart
    var chart = am4core.create("guage_1", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(82);
    chart.padding(0,0,0,0);
    chart.margin(0,0,0,0);
    chart.responsive.enabled = true;
  
    /**
     * Normal axis
     */
    
    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;
    axis.renderer.radius = am4core.percent(80);
    axis.renderer.inside = false;
    axis.renderer.line.strokeOpacity = 1;
    axis.renderer.ticks.template.disabled = false
    axis.renderer.ticks.template.strokeOpacity = 1;
    axis.renderer.ticks.template.length = 40;
    axis.renderer.grid.template.disabled = true;
    axis.renderer.grid.template.location = 0.5;
    axis.renderer.labels.template.radius = 40;
    axis.renderer.labels.template.fontSize = 10;
    axis.renderer.labels.template.adapter.add("text", function(text) {
      return text + "v  ";
    })
    
    /**
     * Axis for ranges
     */
    
    var colorSet = new am4core.ColorSet();
    
    var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.renderer.innerRadius = 10
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;
    
    var range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 50;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = colorSet.getIndex(0);
    
    var range1 = axis2.axisRanges.create();
    range1.value = 50;
    range1.endValue = 100;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = colorSet.getIndex(2);
    
    /**
     * Label
     */
    
    var label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 20;
    label.x = am4core.percent(50);
    label.y = am4core.percent(100);
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = "50%";
    
    
    /**
     * Hand
     */
    
    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.axis = axis2;
    hand.innerRadius = am4core.percent(20);
    hand.startWidth = 10;
    hand.pin.disabled = false;
    hand.value = 50;
    
    hand.events.on("propertychanged", function(ev) {
      range0.endValue = ev.target.value;
      range1.value = ev.target.value;
      label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
      axis2.invalidate();
    });
    
    setInterval(function() {
      var value = Math.round(Math.random() * 100);
      var animation = new am4core.Animation(hand, {
        property: "value",
        to: value
      }, 1000, am4core.ease.cubicOut).start();
    }, 2000);
    
    }); // end am4core.ready()











    am4core.ready(function() {
    
        // Themes begin
        am4core.useTheme(am4themes_dark);
        am4core.useTheme(am4themes_animated);
        // Themes end
        
        // create chart
        var chart = am4core.create("guage_2", am4charts.GaugeChart);
        chart.innerRadius = am4core.percent(82);
        chart.padding(0,0,0,0);
        chart.margin(0,0,0,0);
        chart.responsive.enabled = true;
        /**
         * Normal axis
         */
        
        var axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 100;
        axis.strictMinMax = true;
        axis.renderer.radius = am4core.percent(80);
        axis.renderer.inside = true;
        axis.renderer.line.strokeOpacity = 1;
        axis.renderer.ticks.template.disabled = false
        axis.renderer.ticks.template.strokeOpacity = 1;
        axis.renderer.ticks.template.length = 10;
        axis.renderer.grid.template.disabled = true;
        axis.renderer.labels.template.radius = 30;
        axis.renderer.labels.template.fontSize = 10;
        axis.renderer.labels.template.adapter.add("text", function(text) {
          return text + "v";
        })
        
        /**
         * Axis for ranges
         */
        
        var colorSet = new am4core.ColorSet();
        
        var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
        axis2.min = 0;
        axis2.max = 100;
        axis2.renderer.innerRadius = 10
        axis2.strictMinMax = true;
        axis2.renderer.labels.template.disabled = true;
        axis2.renderer.ticks.template.disabled = true;
        axis2.renderer.grid.template.disabled = true;
        
        var range0 = axis2.axisRanges.create();
        range0.value = 0;
        range0.endValue = 50;
        range0.axisFill.fillOpacity = 1;
        range0.axisFill.fill = colorSet.getIndex(0);
        
        var range1 = axis2.axisRanges.create();
        range1.value = 50;
        range1.endValue = 100;
        range1.axisFill.fillOpacity = 1;
        range1.axisFill.fill = colorSet.getIndex(2);
        
        /**
         * Label
         */
        
        var label = chart.radarContainer.createChild(am4core.Label);
        label.isMeasured = false;
        label.fontSize = 20;
        label.x = am4core.percent(50);
        label.y = am4core.percent(100);
        label.horizontalCenter = "middle";
        label.verticalCenter = "bottom";
        label.text = "50%";
        
        
        /**
         * Hand
         */
        
        var hand = chart.hands.push(new am4charts.ClockHand());
        hand.axis = axis2;
        hand.innerRadius = am4core.percent(20);
        hand.startWidth = 10;
        hand.pin.disabled = false;
        hand.value = 50;
        
        hand.events.on("propertychanged", function(ev) {
          range0.endValue = ev.target.value;
          range1.value = ev.target.value;
          label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
          axis2.invalidate();
        });
        
        setInterval(function() {
          var value = Math.round(Math.random() * 100);
          var animation = new am4core.Animation(hand, {
            property: "value",
            to: value
          }, 1000, am4core.ease.cubicOut).start();
        }, 2000);
        
        }); // end am4core.ready()




        am4core.ready(function() {
    
            // Themes begin
            am4core.useTheme(am4themes_dark);
            am4core.useTheme(am4themes_animated);
            // Themes end
            
            // create chart
            var chart = am4core.create("guage_3", am4charts.GaugeChart);
            chart.innerRadius = am4core.percent(86);
            chart.startAngle = -90;
            chart.endAngle = 270;
            chart.padding(0,0,0,0);
            chart.margin(0,0,0,0);
            chart.responsive.enabled = true;
            /**
             * Normal axis
             */
            
            var axis = chart.xAxes.push(new am4charts.ValueAxis());
            axis.min = 0;
            axis.max = 100;
            axis.strictMinMax = true;
            axis.renderer.radius = am4core.percent(80);
            axis.renderer.inside = true;
            axis.renderer.line.strokeOpacity = 1;
            axis.renderer.ticks.template.disabled = false;
            axis.renderer.ticks.template.strokeOpacity = 1;
            axis.renderer.ticks.template.length = 10;
            axis.renderer.grid.template.disabled = true;
            axis.renderer.labels.template.radius = 40;
            axis.renderer.labels.template.fontSize = 10;
            axis.renderer.labels.template.adapter.add("text", function(text) {
              return text + "v";
            })
            
            /**
             * Axis for ranges
             */
            
            var colorSet = new am4core.ColorSet();
            
            var axis2 = chart.xAxes.push(new am4charts.ValueAxis());
            axis2.min = 0;
            axis2.max = 100;
            axis2.renderer.innerRadius = 10
            axis2.strictMinMax = true;
            axis2.renderer.labels.template.disabled = true;
            axis2.renderer.ticks.template.disabled = true;
            axis2.renderer.grid.template.disabled = true;
            
            var range0 = axis2.axisRanges.create();
            range0.value = 0;
            range0.endValue = 50;
            range0.axisFill.fillOpacity = 1;
            range0.axisFill.fill = colorSet.getIndex(0);
            
            var range1 = axis2.axisRanges.create();
            range1.value = 50;
            range1.endValue = 100;
            range1.axisFill.fillOpacity = 1;
            range1.axisFill.fill = colorSet.getIndex(2);
            
            /**
             * Label
             */
            
            var label = chart.radarContainer.createChild(am4core.Label);
            label.isMeasured = false;
            label.fontSize = 20;
        
            label.x = am4core.percent(50);
            label.y = am4core.percent(100);
            label.horizontalCenter = "middle";
            label.verticalCenter = "bottom";
            label.text = "50%";
            
            
            /**
             * Hand
             */
            
            var hand = chart.hands.push(new am4charts.ClockHand());
            hand.axis = axis2;
            hand.innerRadius = am4core.percent(20);
            hand.startWidth = 10;
            hand.pin.disabled = false;
            hand.value = 50;
            
            hand.events.on("propertychanged", function(ev) {
              range0.endValue = ev.target.value;
              range1.value = ev.target.value;
              label.text = axis2.positionToValue(hand.currentPosition).toFixed(1);
              axis2.invalidate();
            });
            
            setInterval(function() {
              var value = Math.round(Math.random() * 100);
              var animation = new am4core.Animation(hand, {
                property: "value",
                to: value
              }, 1000, am4core.ease.cubicOut).start();
            }, 2000);
            
            }); // end am4core.ready()







var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 12;
Chart.defaults.global.defaultFontColor = 'black';

var dataFirst = {
    label: "Resistence",
    data: [0, 59, 75, 20, 20, 55, 40],
    lineTension: 0,
    fill: false,
    borderColor: 'red'
  };

var dataSecond = {
    label: "Current",
    data: [20, 15, 60, 60, 65, 30, 70],
    lineTension: 0,
    fill: false,
  borderColor: 'blue'
  };

  var dataThird = {
    label: "Voltage",
    data: [10, 15, 150, 45, 65, 40, 70],
    lineTension: 0,
    fill: false,
  borderColor: 'green'
  };

var speedData = {
  labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
  datasets: [dataFirst, dataSecond,dataThird]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'bottom',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
}); 