const gulp = require('gulp')
//const ts = require('gulp-typescript') для node
const browserify  = require('browserify')
const tsify  = require('tsify')
const vinyl  = require('vinyl-source-stream')
const watchify = require('watchify')
const fancyLog = require('fancy-log')
const browserSync= require('browser-sync').create()
const path = {
    pages: ["./src/*.html", "./src/*.css"]
}

gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './dist'
        },
        port: 3000,
    })
    gulp.watch(['./dist/*']).on('change', browserSync.reload)
    gulp.watch(['./src/*.html', './src/*.css']).on('change', gulp.series('copy-file'))
})

gulp.task('copy-file', ()=>gulp.src(path.pages).pipe(gulp.dest('./dist')) )

const watchifyBrowserify = watchify( browserify({
    basedir: ".",
    entries:['./src/main.ts'],
    cache: {},
    debug: true,
    packageCache: {}
}).plugin(tsify))

const bundle = ()=> watchifyBrowserify.bundle().on("error", fancyLog).pipe(vinyl('bundle.js')).pipe(gulp.dest('./dist'))

gulp.task('default', gulp.series(gulp.parallel('copy-file'), bundle))
watchifyBrowserify.on('update', bundle)
watchifyBrowserify.on('log', fancyLog)
