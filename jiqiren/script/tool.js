let tool = {
    menu: {
        left: 'left_menu',
        right: 'right_menu'
    },

    prepareAppList: () => {
        for (let appItem of app) {
            for (let model of appItem.models) {
                model.app = appItem;
                appItem[model.folder] = model;
            }
            app[appItem.folder] = appItem;
        }
    },

    prepareFigureList: () => {
        for (let appItem of app) {
            for (let figure of appItem.figures) {
                if (!figure.model.sorted) {
                    figure.model.sorted = [];
                }
                figure.model.sorted.push(figure);
            }
            for (let model of appItem.models) {
                if (model.sorted) {
                    model.sorted.sort((a, b) => a.number - b.number);
                }
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
        let tagName = (config.tag) ? config.tag : 'div';
        let newDiv = document.createElement(tagName);
        newDiv.innerHTML = config.html.join('\r\n');

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

    createFigureItem: (figure, withIndex) => {
        let coverSrc = (`img/app/${figure.model.app.folder}/${figure.model.folder}/${figure.folder}/${figure.cover}`);

        let indexText = (withIndex) ? (`<div class="index_value">${figure.index + 1})</div>`) : '';
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
                indexText,
            '</div>'
        ];
        let result = tool.create({
            html: newText,
            className: 'figure_item'
        });
        return result;
    },

    model: {
        printMenu: () => {
            let menuList = {};
            menuList[tool.menu.left] = tool.get('.nav_menu.' + tool.menu.left);
            menuList[tool.menu.right] = tool.get('.nav_menu.' + tool.menu.right);

            for (let appItem of app) {
                let menuElem = menuList[appItem.menu];
                if (!menuElem) {
                    continue;
                }
                let newText = [`<p class="app"><a href="#${appItem.folder}">${appItem.label}</a></p>`];
                newText.push('<ul>');
                for (let model of appItem.models) {
                    newText.push(`<li><a href="#${model.folder}">${model.label}</a></li>`);
                }
                newText.push('</ul>');

                tool.create({
                    html: newText,
                    parent: menuElem
                });
            }
        },

        printTable: () => {
            let withIndex = false;
            tool.model.printMenu();
            tool.prepareFigureList();

            let content = tool.get('#wrapper');
            if (!content) {
                return;
            }
            for (let appItem of app) {
                let newText = [`<a name="${appItem.folder}"></a><h2 withIndex="${withIndex}">${appItem.label}</h2>`];
                tool.create({
                    html: newText,
                    parent: content
                });

                for (let model of appItem.models) {
                    newText = [`<a name="${model.folder}"></a><h3>${model.label}</h3>`];
                    tool.create({
                        html: newText,
                        parent: content
                    });

                    if (!model.sorted) {
                        continue;
                    }
                    let list = model.sorted;
                    for (let figure of list) {
                        let newDiv = tool.createFigureItem(figure, withIndex);
                        content.appendChild(newDiv);
                    }
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
                let newElem = {
                    tag: 'li',
                    html: [`<a href="#${appItem.folder}">${appItem.label}</a>`],
                    parent: menuElem
                };
                tool.create(newElem);
            }
        },

        printTable: () => {
            let withIndex = true;
            tool.figure.printMenu();

            let content = tool.get('#wrapper');
            if (!content) {
                return;
            }
            for (let appItem of app) {
                let newText = [
                    `<a name="${appItem.folder}"></a><h2 with-index="${withIndex}">${appItem.label}</h2>`,
                    '<p>Внутренняя память <span class="storage_path">/storage/emulated/0/</p>',
                    `<p class="folder_path">${appItem.path}</p>`
                ];
                tool.create({
                    html: newText,
                    parent: content
                });

                let list = appItem.figures;
                for (let figure of list) {
                    let newDiv = tool.createFigureItem(figure, withIndex);
                    content.appendChild(newDiv);
                }
            }
        }
    }
};

//console.log('toolList = ', tool);
