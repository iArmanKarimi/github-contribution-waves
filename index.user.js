// ==UserScript==
// @name         Github contribution waves
// @namespace    https://github.com/
// @version      0.1
// @description  Shows wave forms in contributions panel
// @author       Arman Karimi
// @match        https://github.com/*
// @exclude      https://github.com/*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @supportURL   https://github.com/iArmanKarimi/github-contribution-waves/
// @run-at       document-end
// @grant        none
// @license      MIT
// ==/UserScript==

const log = (output) => console.log(`[Github contribution waves]: ${output}`);

class CalendarGraph {
  // 2d 7xCols array
  /** @type Array<[]> */
  #particles = []
  constructor() { }
  // filter g elements which include the <rect>
  #filterGElements = () => Array
    .from(this.el_group_contrib)
    .filter(el => el.tagName === 'g')
  get #rows() { return [].slice() }
  get #columns() { return [].slice() }
  // get row by index
  getRow = (row_index) => this.#particles.filter(col => col[row_index]);
  // get column by index
  getColumn = (col_index) => this.#particles[col_index];
  // returns the last column. used for offsetting (since first/last columns may have a different height)
  lastColumn = () => { }
  // returns the first column
  firstColumn = () => { }
  // clear colors of a column. i.e. set colors to nothing
  clearColumn = (col_index) => null;
  // clears all columns. used for framing. i.e. set colors to nothing 
  clearColumns = () => null;
  // Directly set color to particle by coordinates.
  setParticle0xColor = (col_index, row_index, color_hex) => null;
  // set default color's level to particle by coordinates.
  setParticleColorByLvl = (col_index, row_index, color_lvl) => null;
}

function __main__() {
  function contribution_calendar_begin() {
    // set calendar to current year - get a wide view. // remove this to see how it works without it at the end.
    const calendar_years_list = document.querySelector("#year-list-container > div > div.js-profile-timeline-year-list.color-bg-default.js-sticky > ul")
    calendar_years_list.children[0].children[0].click()
  }

  // if contribution graph is available
  const contribution_graph_svg_container = document.querySelector("#year-list-container > div > div.js-profile-timeline-year-list.color-bg-default.js-sticky > ul")
  // if contribution_graph_svg_container exists, show the wave
  if (contribution_graph_svg_container) contribution_calendar_begin();

  // future updates: activity overview graph //
  const activity_overview_graph_container = document.querySelector("#user-activity-overview > div > div.d-flex.flex-column.flex-lg-row > div.pl-lg-3.col-6.border-lg-left > div > svg.js-activity-overview-graph.mx-auto.d-block")
  // if activity_overview_graph_container exists, show the thing (idk what it's gonna be); else log("No activity overview graph found.")
}

(function () { 'use strict'; __main__() })();