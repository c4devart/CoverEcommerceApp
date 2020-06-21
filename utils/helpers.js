import Vue from 'vue'

export const isStrong = (password) => {
  // const regex = /(.*[0-9`!@#$%^&*\-_=+'/.,]){2}/g
  const regex = /^(?=.*[A-Z])(?=.*[0-9]).*$/g
  return regex.test(password) && password.length > 8
}

export const currencyFormat = (number) => {
  if (!number) {
    return `$${0}`
  }
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  return formatter.format(number)
}

export const deepAssign = (target, source) => {
  const res = {}
  const keys = Object.keys(target)
  for (const key of keys) {
    if (target[key] && typeof target[key] === 'object') {
      res[key] = deepAssign(target[key], source[key])
      continue
    }
    res[key] = source && source[key] ? source[key] : target[key]
  }
  return res
}

export const setProp = (obj, props, value) => {
  const prop = props.shift()
  if (!obj[prop]) {
    Vue.set(obj, prop, {})
  }
  if (!props.length) {
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      obj[prop] = { ...obj[prop], ...value }
    } else {
      obj[prop] = value
    }
    return
  }
  setProp(obj[prop], props, value)
}

// https://www.30secondsofcode.org/js/s/have-same-contents/
export const haveSameContents = (a, b) => {
  for (const v of new Set([...a, ...b]))
    if (a.filter((e) => e === v).length !== b.filter((e) => e === v).length)
      return false
  return true
}

// https://www.30secondsofcode.org/js/s/intersection/
export const intersection = (a, b) => {
  const s = new Set(b)
  return [...new Set(a)].filter((x) => s.has(x))
}

/**
 * delay
 *
 * Simple function using a promise to add a delay after any operation.
 * Usage: await delay(20)
 *
 * @param {Number}      ms  The delay time, in milliseconds
 * @return {Promise}
 */
export const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
