#!/usr/bin/env node

const { UnixFS } = require('ipfs-unixfs')
const uint8ArrayToString = require('uint8arrays/to-string')

let buf = Buffer.alloc(0)

process.stdin.on('data', (d) => {
  buf = Buffer.concat([buf, d])
})

process.stdin.on('end', () => {
  const meta = UnixFS.unmarshal(buf)
  console.info(JSON.stringify({
    type: meta.type,
    data: meta.data ? uint8ArrayToString(meta.data, 'base64') : undefined,
    blockSizes: meta.blockSizes,
    hashType: meta.hashType,
    fanout: meta.fanout,
    mode: meta.mode,
    mtime: meta.mtime
  }, null, 2))
})
