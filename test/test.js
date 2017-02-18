var test = require('tape')
var l33t = require('./../index')

test('Leetspeak', function (t) {
  t.equal(l33t('Leetspeak'), '13375p34k')
  t.end()
})

test('1', function (t) {
  t.equal(l33t('l'), '1')
  t.equal(l33t('L'), '1')
  t.equal(l33t('i'), '1')
  t.equal(l33t('I'), '1')
  t.end()
})

test('2', function (t) {
  t.equal(l33t('z'), '2')
  t.equal(l33t('Z'), '2')
  t.end()
})

test('3', function (t) {
  t.equal(l33t('e'), '3')
  t.equal(l33t('E'), '3')
  t.end()
})

test('4', function (t) {
  t.equal(l33t('a'), '4')
  t.equal(l33t('A'), '4')
  t.end()
})

test('5', function (t) {
  t.equal(l33t('s'), '5')
  t.equal(l33t('S'), '5')
  t.end()
})

test('6', function (t) {
  t.equal(l33t('G'), '6')
  t.end()
})

test('7', function (t) {
  t.equal(l33t('t'), '7')
  t.equal(l33t('T'), '7')
  t.end()
})

test('8', function (t) {
  t.equal(l33t('b'), '8')
  t.equal(l33t('B'), '8')
  t.end()
})

test('9', function (t) {
  t.equal(l33t('g'), '9')
  t.end()
})

test('0', function (t) {
  t.equal(l33t('o'), '0')
  t.equal(l33t('O'), '0')
  t.end()
})
