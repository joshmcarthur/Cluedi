case_data = {"data": [{case_image_url: "http://www.galeriekrause.ch/czech-and-slovak-artists/Emil-FILLA.jpg",
               case_name: "Mystery Case",
               case_description: "You should solve this mystery case. It'll be fun!"
              }]}


Ext.setup({
    tabletStartupScreen: 'images/splash/tablet.jpg',
    phoneStartupScreen: 'images/splash/phone.jpg',
    icon: 'images/icon.png',
    glossOnIcon: false,
    onReady: function() {
    var map = new Ext.Map({
        title: 'Map',
        getLocation: true,
        mapOptions: {
            zoom: 12
        }
    });
    
    var casefile = new Ext.Component({
        title: 'Casefile',
        cls: 'casefile',
        scroll: 'vertical',
        tpl: [
            '<tpl for=".">',
                '<article class="case">',
                    '<header><img src="{case_image_url}" /><h1>{case_name}</h1><br class="clearfix" /></header>',
                    '<p class="case_description">{case_description}</p>',
                '</article>',
            '</tpl>'
        ]
    });
    
    casefile.update(case_data["data"]);
    
    
    var panel = new Ext.TabPanel({
        fullscreen: true,
        cardAnimation: 'slide',
        items: [casefile, map],
        ui: 'light'
    });
    }
});
