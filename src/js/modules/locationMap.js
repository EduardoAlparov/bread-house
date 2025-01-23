export default () => {
    const elements = document.querySelectorAll('.js-yamap');

    elements.forEach(element => {
        ymaps.ready(initContactsMap);

        function initContactsMap() {
            const zoom = window.locationZoom ?? 15,
                center = window.locationCenter,
                mainCoords = window.mainCoords,
                mediaQuery = window.matchMedia('(max-width: 1024px)').matches,
                mapData = window.blackLocations,

                mapInstance = new ymaps.Map(element, {
                    center: center,
                    zoom: zoom,
                    controls: []
                }),

                objectManager = new ymaps.ObjectManager({
                    clusterize: false,
                    clusterDisableClickZoom: true
                }),

                MainMarkerLayout = ymaps.templateLayoutFactory.createClass([
                    '<div class="ya-main-placemark">',
                        '<div>$[properties.iconContent]</div>',
                    '</div>'
                ].join(''));

            // zoom controls start: ==========================================>
            const  ZoomLayout = ymaps.templateLayoutFactory.createClass(
                "<div class='zoom-btns'>" +
                "<div id='zoom-in' class='zoom-in-btn'><i class='icon-plus'></i></div>" +
                "<div id='zoom-out' class='zoom-in-btn'><i class='icon-minus'></i></div>" +
                "</div>", {

                    // Переопределяем методы макета, чтобы выполнять дополнительные действия
                    // при построении и очистке макета.
                    build: function () {
                        // Вызываем родительский метод build.
                        ZoomLayout.superclass.build.call(this);

                        // Привязываем функции-обработчики к контексту и сохраняем ссылки
                        // на них, чтобы потом отписаться от событий.
                        this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
                        this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

                        // Начинаем слушать клики на кнопках макета.
                        $('#zoom-in').bind('click', this.zoomInCallback);
                        $('#zoom-out').bind('click', this.zoomOutCallback);
                    },

                    clear: function () {
                        // Снимаем обработчики кликов.
                        $('#zoom-in').unbind('click', this.zoomInCallback);
                        $('#zoom-out').unbind('click', this.zoomOutCallback);

                        // Вызываем родительский метод clear.
                        ZoomLayout.superclass.clear.call(this);
                    },

                    zoomIn: function () {
                        var map = this.getData().control.getMap();
                        map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
                    },

                    zoomOut: function () {
                        var map = this.getData().control.getMap();
                        map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
                    }
                });
            const zoomControl = new ymaps.control.ZoomControl({
                options: {
                    position: {
                        top: '50dvh',
                        right: 'var(--content-padding, 4rem)',
                    },
                    layout: ZoomLayout
                }
            });
            mapInstance.controls.add(zoomControl);
            // <================================================= zoom end start

            const renderPlaces = () => {
                let objectToAdd = [];

                mapData.forEach(function(item, index) {
                    objectToAdd = {
                        id: index,
                        type: 'Feature',
                        geometry: {
                        type: 'Point',
                        coordinates: item.coords,

                        },
                        options: {
                        iconLayout: MainMarkerLayout,
                        iconShape: {
                            type: 'Circle',
                            coordinates: [0, 0],
                            radius: 50
                        },
                        iconImageOffset: window.matchMedia("(max-width: 640px)").matches ? [-50, -150] : [-50, -150],
                        balloonShadow: false,
                        balloonPanelMaxMapArea: 0,
                        hideIconOnBalloonOpen: false,
                        balloonOffset: [140, 0],
                        },
                        properties: {}
                    };
                });

                objectManager.add(objectToAdd);
            }

            renderPlaces();

            mapInstance.geoObjects.add(objectManager);

            objectManager.objects.events.add('click', function (e) {
                const objectId = e.get('objectId');
                getBalloonData(objectId).done(function (data) {
                    const object = objectManager.objects.getById(objectId);
                    object.properties.balloonContent = data;

                    // Открываем балун на этом элементе
                    objectManager.objects.balloon.open(objectId);
                });
            });

        }
    });
}
