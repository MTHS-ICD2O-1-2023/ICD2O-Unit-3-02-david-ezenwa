// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: David.E
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateAreaOfTrapezoid() {
  // input
  const baseL = parseFloat(document.getElementById('base-l').value);
  const baseW = parseFloat(document.getElementById('base-w').value);
  const heightOfPyramid = parseFloat(document.getElementById('height-of-pyramid').value);

  // process
  const areaOfPyramid = (baseL * baseW * heightOfPyramid) / 3;

  // output
  document.getElementById("area").innerHTML = 'Area is: ' + areaOfPyramid.toFixed(2) + ' mm³';
}