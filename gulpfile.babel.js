import './app/utils/global';
import _ from 'lodash';
import pageDB from './app/utils/db';
import gulp from 'gulp';
import render from './app/utils/render';
import Index from './app/pages/index';
import fs from 'fs';

// pageDB.push({
//   title: '首页',
//   author: 'Eyas'
// }).value()

const pages = pageDB.value()

gulp.task('build', () => {
  _.each(pages, item => {
    const html = render(require('./app/pages/' + item.name).default)
    fs.writeFile('build/' + item.name + '.html', html, (err, res) => {
      console.log('已生成文件: build/' + item.name + '.html')
    });
  })
})
