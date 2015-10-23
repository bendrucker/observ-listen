'use strict'

var test = require('tape')
var Observ = require('observ')
var listen = require('./')

test('listen', function (t) {
  t.plan(1)
  var observable = Observ()
  listen(observable, function (value) {
    t.equal(value, 1)
  })
  observable.set(1)
})

test('watch', function (t) {
  t.plan(1)
  var observable = Observ(2)
  listen(observable, function (value) {
    t.equal(value, 2)
  }, true)
})
