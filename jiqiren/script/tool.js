let tool = {
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
    
    //getQ: (search) => document.querySelector(search),
    
    printFigureItem: (figure, withIndex) => {
        let coverSrc = (`img/${figure.model.app.folder}/${figure.model.folder}/${figure.folder}/${figure.cover}`);
        let newText = [
            '<td>',
            `<p class="guid">${figure.folder}</p>`,
            `<p class="model">${figure.model.label}</p>`,
            `<div class="number">${figure.number}</div>`,
            `<div class="name"><p class="name_rus">${figure.name.rus}</p>`,
            `<p class="name_eng">${figure.name.eng}</p></div>`,
            '</td>',
            `<td><p class="count">${figure.count}</p></td>`,
            `<td><a class="cover" target="_blank" href="${coverSrc}"><img alt="${figure.name.eng}" src="${coverSrc}" /></a></td>`
        ];
        if (withIndex) {
            newText.push(`<td><p class="count_index">${figure.index + 1})</p></td>`);
        }
        let result = newText.join('\r\n');
        return result;
    },
    
    printFigureTable: () => {
        for (let appItem of app) {
            let findLink = document.querySelector(`a[name=${appItem.folder}]`);
            if (!findLink) {
                continue;
            }
            let findRow = tool.findParent(findLink, 'tr');
            if (!findRow) {
                continue;
            }
            console.log('findRow = ', findRow);
            
            let folderPath = findRow.querySelector('p.folder_path');
            if (folderPath) {
                folderPath.innerHTML = appItem.path;
            }
            
            let nextRow = findRow.nextElementSibling;
            for (let figure of appItem.figures) {
                let newRow = document.createElement('tr');
                newRow.innerHTML = tool.printFigureItem(figure, true);
                findRow.parentElement.insertBefore(newRow, nextRow);
            }
        }
    },
    
    printModelTable:() => {
    }
};

//console.log('toolList = ', tool);
