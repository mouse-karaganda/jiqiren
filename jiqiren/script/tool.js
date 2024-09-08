let tool = {
    menu: {
        left: 'left_menu',
        right: 'right_menu',
        open: 'open_menu',
        closed: 'closed_menu',
        toggle: 'toggle_menu'
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
        let thisParent = node.parentElement;
        if (thisParent && thisParent.tagName.toLowerCase() == tagName.toLowerCase()) {
            return thisParent;
        }
        return tool.findParent(thisParent, tagName);
    },

    create: (config) => {
        let tagName = (config.tag || 'div');
        let newDiv = document.createElement(tagName);
        newDiv.innerHTML = (config.html || []).join('\r\n');

        if (config.id) {
            newDiv.id = config.id;
        }
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

    createAppElem: (config) => {
        let appElem = tool.create({
            tag: 'article',
            className: 'app_item',
            id: config.item.printFolder,
            parent: config.parent
        });
        if (config.withIndex) {
            appElem.classList.add('with_index');
        }
        tool.create({
            className: 'app_header',
            html: config.header,
            parent: appElem
        });
        return appElem;
    },

    createFigureElem: (figure, parent) => {
        let coverSrc = (`img/app/${figure.model.printFolder}/${figure.folder}/${figure.cover}`);
        let nameText = {
            rus: (figure.name.rus) ? (`<p class="name_rus">${figure.name.rus}</p>`) : '',
            eng: (figure.name.eng) ? (`<p class="name_eng">${figure.name.eng}</p>`) : ''
        };
        let model = figure.model;
        let label = model.label;
        if (!model.app) {
            let line = (model.subline) ? model.subline.line : model.line;
            label = `${line.label} : ${label}`;
        }

        let newText = [
            '<div class="item_label">',
                `<p class="guid">${figure.folder}</p>`,
                `<p class="model">${label}</p>`,
                '<div class="item_number">',
                    `<div class="number"><span>${figure.number}</span></div>`,
                    '<div class="name">',
                        nameText.rus,
                        nameText.eng,
                    '</div>',
                '</div>',
            '</div>',
            `<div class="item_count">${figure.count}</div>`,
            `<div class="item_cover"><a class="cover" target="_blank" href="${coverSrc}"><img alt="${figure.name.eng}" src="${coverSrc}" /></a></div>`,
            `<div class="index_value">${figure.index + 1})</div>`
        ];
        tool.create({
            className: 'figure_item',
            html: newText,
            parent: parent
        });
    },

    model: {
        menuEvent: () => {
            let menuElems = [
                `.${tool.menu.closed} .line > a`,
                `.${tool.menu.closed} .subline > a`
            ].join(', ');
            tool.getAll(menuElems).forEach((menuElem) => {
                menuElem.addEventListener('click', function(thisEvent) {
                    thisEvent.preventDefault();
                    let outerLi = tool.findParent(this, 'li');
                    if (outerLi) {
                        outerLi.classList.toggle(tool.menu.closed);
                    }
                    // check if closed
                    if (!outerLi.classList.contains(tool.menu.closed)) {
                        // stop if opened
                        return;
                    }
                    // if have sublines, close all sublines automatically
                    let outerP = tool.findParent(this, 'p');
                    if (outerP && outerP.classList.contains('line')) {
                        console.log('thisEvent = ', outerP);
                        let sublines = outerLi.querySelectorAll('p.subline');
                        if (sublines) {
                            sublines.forEach((subline) => {
                                // close if opened
                                let innerLi = tool.findParent(subline, 'li');
                                if (innerLi && !innerLi.classList.contains(tool.menu.closed)) {
                                    innerLi.classList.add(tool.menu.closed);
                                }
                            });
                        }
                    }
                });
            });
        },
        
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
            menuList[tool.menu.left] = tool.get(`.nav_menu.${tool.menu.left}`);
            menuList[tool.menu.right] = tool.get(`.nav_menu.${tool.menu.right}`);

            for (let appItem of app) {
                let menuElem = menuList[appItem.menu];
                if (!menuElem) {
                    continue;
                }
                let newText = [`<p class="app"><a href="#${appItem.printFolder}">${appItem.label}</a></p>`];
                if (appItem.lines) {
                    newText.push('<ul>');
                    for (let line of appItem.lines) {
                        newText.push(`<li class="${tool.menu.closed}">`);
                        newText.push(`<p class="line"><a href="#${line.printFolder}">${line.label}</a></p>`);
                        if (line.sublines) {
                            newText.push('<ul>');
                            for (let subline of line.sublines) {
                                newText.push(...[
                                    `<li class="${tool.menu.closed}">`,
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
                id: item.printFolder,
                parent: parent
            });
            let newText = [`<h3>${item.label}</h3>`];
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
            tool.model.printMenu();
            tool.model.menuEvent();
            tool.prepareFigureList();

            let wrapper = tool.get('#wrapper');
            if (!wrapper) {
                return;
            }
            for (let appItem of app) {
                let newText = [
                    `<h2><span>${appItem.label}</span>`,
                    `<span class="android_id">${appItem.androidId}</span></h2>`,
                    '<div>',
                        `<p class="comment">${appItem.comment}</p>`,
                    '</div>'
                ];
                let appElem = tool.createAppElem({
                    item: appItem,
                    header: newText,
                    withIndex: false,
                    parent: wrapper
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
            tool.figure.printMenu();

            let wrapper = tool.get('#wrapper');
            if (!wrapper) {
                return;
            }
            for (let appItem of app) {
                let newText = [
                    `<h2><span>${appItem.label}</span>`,
                    `<span class="android_id">${appItem.androidId}</span></h2>`,
                    '<div>',
                        `<p class="comment">${appItem.comment}</p>`,
                        '<p>Внутренняя память <span class="storage_path">/storage/emulated/0/</p>',
                        `<p class="folder_path">${appItem.path}</p>`,
                    '</div>'
                ];
                let appElem = tool.createAppElem({
                    item: appItem,
                    header: newText,
                    withIndex: true,
                    parent: wrapper
                });
                for (let figure of appItem.figures) {
                    tool.createFigureElem(figure, appElem);
                }
            }
        }
    }
};

//console.log('toolList = ', tool);
