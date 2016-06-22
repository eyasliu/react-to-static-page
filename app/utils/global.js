import React from 'react';
import ReactDOM from 'react-dom';

function setGlobal(variables = {}){
  let G = global || window;
  for (let v in variables) {
    if (!G[v]) {
      G[v] = variables[v];
    } else {
      console.error('Sorry, the global variable [' + v + '] already set');
    }
  }
}

setGlobal({
  React,
  ReactDOM
})