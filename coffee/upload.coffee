#!/usr/bin/env coffee
import {join,dirname} from 'path'
import thisdir from '@rmw/thisdir'
import Qiniu from '@rmw/qiniu'
import {createReadStream} from 'fs'

QINIU = Qiniu()
ROOT = join dirname(join thisdir(import.meta)),'umd'

await QINIU.upload_dir(
  'blog-js'
  ROOT
  (i)=>
    console.log i
    createReadStream(i)
  'blog-js.xvc.com'
  (li)=>li
)
process.exit()
