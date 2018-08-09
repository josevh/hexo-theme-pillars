'use strict';

hexo.extend.generator.register('blog', function (locals) {
    var path = (hexo.config.pillars_blog_path || hexo.theme.config.pillars_blog_path);
    if (path.substr(-1) !== '/') {
        path += '/';
    }

    var title = (hexo.config.pillars_blog_title|| hexo.theme.config.pillars_blog_title);

    locals = Object.assign({}, locals, {title: title});
    return {
        path: path + 'index.html',
        data: locals,
        layout: ['blog', 'index']
    }
});
