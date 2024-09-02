let tool = {
    menu: {
        left: 'left_menu',
        right: 'right_menu'
    },
    
    folder: (item) => {
        let parentFolder;
        if (item.app) {
            parentFolder = item.app.printFolder;
        } else if (item.line) {
            parentFolder = item.line.printFolder;
        } else if (item.subline) {
            parentFolder = item.subline.printFolder;
        }
        let folders = [parentFolder, item.folder];
        item.printFolder = folders.join('/');
        //console.log('folder = ', item.printFolder, item);
    },

    prepareAppList: () => {
        for (let appItem of app) {
            appItem.printFolder = appItem.folder;
            if (appItem.lines) {
                for (let line of appItem.lines) {
                    line.app = appItem;
                    tool.folder(line);
                    appItem[line.folder] = line;
                    
                    if (line.sublines) {
                        for (let subline of line.sublines) {
                            subline.line = line;
                            tool.folder(subline);
                            line[subline.folder] = subline;
                            
                            for (let model of subline.models) {
                                model.subline = subline;
                                tool.folder(model);
                                subline[model.folder] = model;
                            }
                        }
                    } else {
                        for (let model of line.models) {
                            model.line = line;
                            tool.folder(model);
                            line[model.folder] = model;
                        }
                    }
                }
            } else {
                for (let model of appItem.models) {
                    model.app = appItem;
                    tool.folder(model);
                    appItem[model.folder] = model;
                }
            }                
            appItem.figures = [];
            app[appItem.folder] = appItem;
        }
    },

    prepareFigureList: () => {
        let onlyModel = [];
        for (let appItem of app) {
            for (let figure of appItem.figures) {
                if (!onlyModel.includes(figure.model)) {
                    onlyModel.push(figure.model);
                }
                if (!figure.model.sorted) {
                    figure.model.sorted = [];
                }
                figure.model.sorted.push(figure);
            }
            for (let model of onlyModel) {
                model.sorted.sort((a, b) => a.number - b.number);
            }
            delete appItem.figures;
        }
        console.log('After sort = ', app);
    },

    findParent: (node, tagName) => {
        if (!node) {
            return null;
        }
        let p = node.parentElement;
        if (p && p.tagName.toLowerCase() == tagName.toLowerCase()) {
            return p;
        }
        return tool.findParent(p, tagName);
    },

    create: (config) => {
        let tagName = (config.tag || 'div');
        let newDiv = document.createElement(tagName);
        newDiv.innerHTML = (config.html || []).join('\r\n');

        if (config.className) {
            newDiv.className = config.className;
        }
        if (config.parent) {
            config.parent.appendChild(newDiv);
        }
        return newDiv;
    },

    get: (search) => document.querySelector(search),

    getAll: (search) => document.querySelectorAll(search),
    
    createAppElem: (parent, withIndex) => {
        let appElem = tool.create({
            tag: 'article',
            className: 'app_item',
            parent: parent
        });
        if (withIndex) {
            appElem.classList.add('with_index');
        }
        return appElem;
    },

    createFigureElem: (figure, parent) => {
        let coverSrc = (`img/app/${figure.model.printFolder}/${figure.folder}/${figure.cover}`);

        let newText = [
            '<div class="item_label">',
                `<p class="guid">${figure.folder}</p>`,
                `<p class="model">${figure.model.label}</p>`,
                '<div class="item_number">',
                    `<div class="number"><span>${figure.number}</span></div>`,
                    '<div class="name">',
                        `<p class="name_rus">${figure.name.rus}</p>`,
                        `<p class="name_eng">${figure.name.eng}</p>`,
                    '</div>',
                '</div>',
            '</div>',
            '<div class="item_right">',
                `<div class="item_count">${figure.count}</div>`,
                `<div class="item_cover"><a class="cover" target="_blank" href="${coverSrc}"><img alt="${figure.name.eng}" src="${coverSrc}" /></a></div>`,
                `<div class="index_value">${figure.index + 1})</div>`,
            '</div>'
        ];
        tool.create({
            className: 'figure_item',
            html: newText,
            parent: parent
        });
    },

    model: {
        menuRange: (item) => {
            let newText = ['<ol>'];
            for (let model of item.models) {
                newText.push(`<li><a href="#${model.printFolder}">${model.label}</a></li>`);
            }
            newText.push('</ol>');
            return newText;
        },
        
        printMenu: () => {
            let menuList = {};
            menuList[tool.menu.left] = tool.get('.nav_menu.' + tool.menu.left);
            menuList[tool.menu.right] = tool.get('.nav_menu.' + tool.menu.right);

            for (let appItem of app) {
                let menuElem = menuList[appItem.menu];
                if (!menuElem) {
                    continue;
                }
                let newText = [`<p class="app"><a href="#${appItem.printFolder}">${appItem.label}</a></p>`];
                if (appItem.lines) {
                    newText.push('<ul>');
                    for (let line of appItem.lines) {
                        newText.push('<li>');
                        newText.push(`<p class="line"><a href="#${line.printFolder}">${line.label}</a></p>`);
                        if (line.sublines) {
                            newText.push('<ul>');
                            for (let subline of line.sublines) {
                                newText.push(...[
                                    '<li>',
                                    `<p class="subline"><a href="#${subline.printFolder}">${subline.label}</a></p>`,
                                    ...tool.model.menuRange(subline),
                                    '</li>'
                                ]);
                            }
                            newText.push('</ul>');
                        } else {
                            newText.push(...tool.model.menuRange(line));
                        }
                        newText.push('</li>');
                    }
                    newText.push('</ul>');
                } else {
                    newText.push(...tool.model.menuRange(appItem));
                }
                tool.create({
                    html: newText,
                    parent: menuElem
                });
            }
        },
        
        tableHeader: (item, prefix, parent) => {
            let headerElem = tool.create({
                className: `${prefix}_item`,
                parent: parent
            });
            let newText = [`<a name="${item.printFolder}"></a><h3>${item.label}</h3>`];
            tool.create({
                className: `${prefix}_header`,
                html: newText,
                parent: headerElem
            });
            return headerElem;
        },
        
        tableRange: (item, parent) => {
            for (let model of item.models) {
                let modelElem = tool.model.tableHeader(model, 'model', parent);
                if (model.sorted) {
                    for (let figure of model.sorted) {
                        tool.createFigureElem(figure, modelElem);
                    }
                }
            }
        },

        printTable: () => {
            let withIndex = false;
            tool.model.printMenu();
            tool.prepareFigureList();

            let wrapper = tool.get('#wrapper');
            if (!wrapper) {
                return;
            }
            for (let appItem of app) {
                let appElem = tool.createAppElem(wrapper, withIndex);
                let newText = [
                    `<a name="${appItem.printFolder}"></a><h2><span>${appItem.label}</span>`,
                    `<span class="android_id">${appItem.androidId}</span></h2>`,
                    '<div>',
                        `<p class="comment">${appItem.comment}</p>`,
                    '</div>'
                ];
                tool.create({
                    className: 'app_header',
                    html: newText,
                    parent: appElem
                });
                
                if (appItem.lines) {
                    for (let line of appItem.lines) {
                        let lineElem = tool.model.tableHeader(line, 'line', appElem);
                        if (line.sublines) {
                            for (let subline of line.sublines) {
                                let sublineElem = tool.model.tableHeader(subline, 'subline', lineElem);
                                tool.model.tableRange(subline, sublineElem);
                            }
                        } else {
                            tool.model.tableRange(line, lineElem);
                        }
                    }
                } else {
                    tool.model.tableRange(appItem, appElem);
                }
            }
        }
    },

    figure: {
        printMenu: () => {
            let menuElem = tool.get('.nav_menu');
            if (!menuElem) {
                return;
            }
            for (let appItem of app) {
                let newText = [`<a href="#${appItem.printFolder}">${appItem.label}</a>`];
                tool.create({
                    tag: 'li',
                    html: newText,
                    parent: menuElem
                });
            }
        },

        printTable: () => {
            let withIndex = true;
            tool.figure.printMenu();

            let wrapper = tool.get('#wrapper');
            if (!wrapper) {
                return;
            }
            for (let appItem of app) {
                let appElem = tool.createAppElem(wrapper, withIndex);
                let newText = [
                    `<a name="${appItem.printFolder}"></a><h2><span>${appItem.label}</span>`,
                    `<span class="android_id">${appItem.androidId}</span></h2>`,
                    '<div>',
                        `<p class="comment">${appItem.comment}</p>`,
                        '<p>Внутренняя память <span class="storage_path">/storage/emulated/0/</p>',
                        `<p class="folder_path">${appItem.path}</p>`,
                    '</div>'
                ];
                tool.create({
                    className: 'app_header',
                    html: newText,
                    parent: appElem
                });
                for (let figure of appItem.figures) {
                    tool.createFigureElem(figure, appElem);
                }
            }
        }
    }
};

//console.log('toolList = ', tool);
