const smartgrid = require('smart-grid');

const settings = {
	columns: 12,
	offset: '30px', // расстояние между колонками
	container: {
		maxWidth: '1000px', // content = 940px (1000px - (fields=30px + fields=30px))
		fields: '30px' // отступы контента от экрана слева и справа (для каждого размера экрана через breakpoint устанавливаем свои отступы)
	},
	breakPoints: { // Можно указывать свои. Если не указать своих, запилятся брейки по умолчанию из settings.js
		tabletka: { // в файле smart-grid.scss появятся новые свойства для размера tabletka
            width: "992px",
            fields: "20px"
        },
        cellphone: { // в файле smart-grid.scss появятся новые свойства для размера tabletka
            width: "720px",
            fields: "15px"
        },
        smalldevice: {
            width: "576px",
            fields: "0px"
        }

	},
	oldSizeStyle: false,
	outputStyle: 'scss', // выбор препроцессора и генерация файла smart-grid.scss
	properties: []
};


smartgrid('develop/scss', settings);

/*при каждом изменении перезапустить файл в консоле
(командой: node smartgrid.js)*/