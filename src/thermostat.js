'use strict';
// temperature was refactored with DEFAULT_TEMPERATURE
//powerSavingMode is set to true so that it is turned on to begin with
//Medium energy limit is set to help use conditionals to determine the usage
function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
}
//if this function is called then it will simply call the temperature
Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};
//this function will add 1 degree to the temperature when it is called
Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}
//this will reduce the temperature by a degree if this is called
//unless the temp is at isMinimumTemperature, then it will just return
Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  //this is the else part of the conditional, when the temp is higher than the minimum temp
  this.temperature -= 1;
}

// this will return if the temoerature is the same as the MINIMUM_TEMPERATURE
Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
}

//this sets PSM to on and true and returns it
Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}
//this sets PSM to be off when it is called - false
Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}
// this sets the PSM to be on/ true when it is called
Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
//this contains the max temp limit for on and off PSM
Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}
// this will reset the temperature to the DEFAULT_TEMPERATURE
Thermostat.prototype.resetTemperature = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
}
//this is defining how to determine if the temperature is L/M/H usage
Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  }
  if (this.temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this.temperature <= this.MAX_LIMIT_PSM_ON) {
    return 'medium-usage';
  }
  return 'high-usage';
}
