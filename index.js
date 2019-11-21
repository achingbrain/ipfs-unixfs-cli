#!/usr/bin/env node

const unixFs = require('ipfs-unixfs')

let buf = Buffer.alloc(0)

process.stdin.on('data', (d) => {
  buf = Buffer.concat([buf, d])
})

process.stdin.on('end', () => {
  const meta = unixFs.unmarshal(buf)
  console.info(JSON.stringify(meta))
})
