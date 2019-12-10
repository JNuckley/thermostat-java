
$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
})

$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function() {
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });
  // $('#thermostatreset').on('click', function() {
  // thermostat.reset();
  // $('#thermostattemperature').text(thermostat.temperature);
  // $('#thermostatenergyUsage').text(thermostat.energyUsage());
  // });
  $('#psm-on').click(function() {
    thermostat.powerSavingModeOn();
    $('#power-saving').text('on')
    updateTemperature();
  });

  $('#psm-off').click(function() {
    thermostat.powerSavingModeOff();
    $('#power-saving').text('off')
    updateTemperature();
  });

  function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
  };
});
