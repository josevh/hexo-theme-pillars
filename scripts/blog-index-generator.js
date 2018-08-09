'use strict';

hexo.extend.generator.register('blog', function (locals) {
    var path = (hexo.config.pillars_path || hexo.theme.config.pillars_path);
    if (path.substr(-1) !== '/') {
        path += '/';
    }

    var title = (hexo.config.pillars_title|| hexo.theme.config.pillars_title);
    var layouts = [hexo.config.pillars_layout|| hexo.theme.config.pillars_layout].concat(['blog', 'index'])

    locals = Object.assign({}, locals, {title: title});
    return {
        path: path + 'index.html',
        data: locals,
        layout: layouts
    }
});
