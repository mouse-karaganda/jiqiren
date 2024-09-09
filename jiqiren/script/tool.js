let tool = {
    menu: {
        left: 'left_menu',
        right: 'right_menu',
        open: 'open_menu',
        closed: 'closed_menu'
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
        app.forEach((appItem) => {
            appItem.printFolder = appItem.folder;
            if (appItem.lines) {
                appItem.lines.forEach((line) => {
                    line.app = appItem;
                    tool.folder(line);
                    appItem[line.folder] = line;

                    if (line.sublines) {
                        line.sublines.forEach((subline) => {
                            subline.line = line;
                            tool.folder(subline);
                            line[subline.folder] = subline;

                            subline.models.forEach((model) => {
                                model.subline = subline;
                                tool.folder(model);
                                subline[model.folder] = model;
                            });
                        });
                    } else {
                        line.models.forEach((model) => {
                            model.line = line;
                            tool.folder(model);
                            line[model.folder] = model;
                        });
                    }
                });
            } else {
                appItem.models.forEach((model) => {
                    model.app = appItem;
                    tool.folder(model);
                    appItem[model.folder] = model;
                });
            }
            appItem.figures = [];
            app[appItem.folder] = appItem;
        });
    },

    prepareFigureList: () => {
        let onlyModel = [];
        app.forEach((appItem) => {
            appItem.figures.forEach((figure) => {
                if (!onlyModel.includes(figure.model)) {
                    onlyModel.push(figure.model);
                }
                if (!figure.model.sorted) {
                    figure.model.sorted = [];
                }
                figure.model.sorted.push(figure);
            });
            onlyModel.forEach((model) => {
                model.sorted.sort((a, b) => a.number - b.number);
            });
            delete appItem.figures;
        });
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
        appendToPrototype: () => {
            Element.prototype.hasClass = function(name) {
                return this.classList.contains(name);
            };
            Object.defineProperty(Element.prototype, 'isClosed', {
                get() {
                    return this.hasClass(tool.menu.closed);
                }
            });
            Element.prototype.setClosedIfOpened = function() {
                if (!this.isClosed) {
                    this.classList.add(tool.menu.closed);
                }
            };
            Element.prototype.toggleClosed = function() {
                this.classList.toggle(tool.menu.closed);
            };
            Element.prototype.findParent = function(tagName) {
                return tool.findParent(this, tagName);
            };
            Element.prototype.titleIfClosed = function() {
                let outerLi = this.findParent('li');
                this.title = (outerLi && outerLi.isClosed) ? 'Открыть' : 'Закрыть';
            };
        },
        
        menuEvent: () => {
            let menuElems = [
                `.${tool.menu.closed} .line > .as_button`,
                `.${tool.menu.closed} .subline > .as_button`
            ].join(', ');
            tool.getAll(menuElems).forEach((menuElem) => {
                menuElem.titleIfClosed();

                menuElem.addEventListener('click', function(thisEvent) {
                    thisEvent.preventDefault();
                    let outerLi = this.findParent('li');
                    if (!outerLi) {
                        return;
                    }
                    outerLi.toggleClosed();
                    this.titleIfClosed();

                    // stop if opened after toggle
                    if (!outerLi.isClosed) {
                        return;
                    }
                    // if line have sublines, close all sublines automatically
                    let outerP = this.findParent('p');
                    if (outerP && outerP.hasClass('line')) {
                        let sublines = outerLi.querySelectorAll('p.subline');
                        sublines && sublines.forEach((subline) => {
                            let innerLi = subline.findParent('li');
                            innerLi && innerLi.setClosedIfOpened();
                        });
                    }
                });
            });
        },
        
        menuRange: (item) => {
            let newText = ['<ol>'];
            item.models.forEach((model) => {
                newText.push(`<li><a href="#${model.printFolder}">${model.label}</a></li>`);
            });
            newText.push('</ol>');
            return newText;
        },

        printMenu: () => {
            let menuList = {};
            menuList[tool.menu.left] = tool.get(`.nav_menu.${tool.menu.left}`);
            menuList[tool.menu.right] = tool.get(`.nav_menu.${tool.menu.right}`);

            app.forEach((appItem) => {
                let menuElem = menuList[appItem.menu];
                if (!menuElem) {
                    return;
                }
                let newText = [`<p class="app"><a href="#${appItem.printFolder}">${appItem.label}</a></p>`];
                if (appItem.lines) {
                    newText.push('<ul>');
                    appItem.lines.forEach((line) => {
                        newText.push(`<li class="${tool.menu.closed}">`);
                        newText.push(...[
                            '<p class="line">',
                                `<a href="#${line.printFolder}">${line.label}</a><span class="as_button">&nbsp;</span>`,
                            '</p>'
                        ]);
                        if (line.sublines) {
                            newText.push('<ul>');
                            line.sublines.forEach((subline) => {
                                newText.push(...[
                                    `<li class="${tool.menu.closed}">`,
                                    '<p class="subline">',
                                        `<a href="#${subline.printFolder}">${subline.label}</a><span class="as_button">&nbsp;</span>`,
                                    '</p>',
                                    ...tool.model.menuRange(subline),
                                    '</li>'
                                ]);
                            });
                            newText.push('</ul>');
                        } else {
                            newText.push(...tool.model.menuRange(line));
                        }
                        newText.push('</li>');
                    });
                    newText.push('</ul>');
                } else {
                    newText.push(...tool.model.menuRange(appItem));
                }
                tool.create({
                    html: newText,
                    parent: menuElem
                });
            });
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
            item.models.forEach((model) => {
                let modelElem = tool.model.tableHeader(model, 'model', parent);
                model.sorted && model.sorted.forEach((figure) => {
                    tool.createFigureElem(figure, modelElem);
                });
            });
        },

        printTable: () => {
            tool.model.appendToPrototype();
            tool.model.printMenu();
            tool.model.menuEvent();
            tool.prepareFigureList();

            let wrapper = tool.get('#wrapper');
            wrapper && app.forEach((appItem) => {
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
                    appItem.lines.forEach((line) => {
                        let lineElem = tool.model.tableHeader(line, 'line', appElem);
                        if (line.sublines) {
                            line.sublines.forEach((subline) => {
                                let sublineElem = tool.model.tableHeader(subline, 'subline', lineElem);
                                tool.model.tableRange(subline, sublineElem);
                            });
                        } else {
                            tool.model.tableRange(line, lineElem);
                        }
                    });
                } else {
                    tool.model.tableRange(appItem, appElem);
                }
            });
        }
    },

    figure: {
        printMenu: () => {
            let menuElem = tool.get('.nav_menu');
            menuElem && app.forEach((appItem) => {
                let newText = [`<a href="#${appItem.printFolder}">${appItem.label}</a>`];
                tool.create({
                    tag: 'li',
                    html: newText,
                    parent: menuElem
                });
            });
        },

        printTable: () => {
            tool.figure.printMenu();

            let wrapper = tool.get('#wrapper');
            wrapper && app.forEach((appItem) => {
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
                appItem.figures.forEach((figure) => {
                    tool.createFigureElem(figure, appElem);
                });
            });
        }
    }
};

//console.log('toolList = ', tool);
