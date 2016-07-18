Meteor.methods({
  PieChart: function() {
  if(typeof(Highcharts) != "undefined")
    return Highcharts.charts[0];
  },

  UpdateSeriesData: function() {
    var seriesDataTemp = [];
    var seriesDataBrix = [];
    var seriesDataAlco = [];
    var frames = Frames.find({"doc_type": "high_doc"}, {sort: {hour: -1}});

    frames.forEach(function(frame) {
      var dataPointTemp = [frame.timestamp, frame.temp];
      seriesDataTemp.push(dataPointTemp);

      var dataPointBrix = [frame.timestamp, frame.brix];
      seriesDataBrix.push(dataPointBrix);

      var dataPointAlco = [frame.timestamp, frame.alco];
      seriesDataAlco.push(dataPointAlco);
    });

    if(typeof(Highcharts) != "undefined"){
      Meteor.call("PieChart").series[0].setData(seriesDataTemp, true);
      Meteor.call("PieChart").series[1].setData(seriesDataBrix, true);
      Meteor.call("PieChart").series[2].setData(seriesDataAlco, true);
    }
  }
});
