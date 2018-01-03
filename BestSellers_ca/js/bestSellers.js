if(!dfs.bestSellers){
  dfs.bestSellers ={}
}
dfs.bestSellers.getbestSellersURL = function(){
    console.log('Building XML Request URL .. .. ..');
    for(i in dfs.bestSellers.variables){
      dfs.bestSellers.urls.
      push(
        dfs.bestSellers.variables[i].domain + '/webapp/wcs/stores/servlet/GetAmplienceProductDataCmd?storeId=' +
        dfs.bestSellers.variables[i].storeId + '&catalogid=' + dfs.bestSellers.variables[i].catalogId + '&category=' +
        dfs.bestSellers.variables[i].category + '&templateId=' + dfs.bestSellers.variables[i].templateId + '&imageType=' +
        dfs.bestSellers.variables[i].imageType
      );
    }
    dfs.bestSellers.getXMLdata();
  };
  dfs.bestSellers.getXMLdata = function(){
    $.each(dfs.bestSellers.urls, function(index, sku){
      var template = dfs.bestSellers.urls[index];

      ajaxRequest = $.ajax({
                  url: template,
                  type: "get",
                  async: false,
                  dataType: 'text'
              }).done(function (response, textStatus, jqXHR){
                console.log('Ajax Best Sellers Data Request:',textStatus);
                //clean up xml (remove invalid &pound; or &euro;)
                var cleanXML = response.replace(/&amp;pound;/g,'&#163;').replace(/&amp;euro;/g,'&#8364;');
                var XMLdoc = $.parseXML( cleanXML ); // convert back to XML
                var $xml = $( XMLdoc );

                var productsData = parse(XMLdoc);
                dfs.bestSellers.bestsellers_data[index] = [];
                dfs.bestSellers.variables.data = [];
                var slideNum = 0;
                var pageNum = 0;
                dfs.bestSellers.bestsellers_data[index][pageNum] = [];


                for (i in productsData.product) {
                  slideNum++;
                  if(slideNum > 8){
                    pageNum++;
                    console.log('paged', pageNum, slideNum);
                    dfs.bestSellers.bestsellers_data[index][pageNum] = [];
                    slideNum =1;
                  }
                  dfs.bestSellers.bestsellers_data[index][pageNum].push({
                    sku: productsData.product[i].sku,
                    name: productsData.product[i].name,
                    description: productsData.product[i].description,
                    link: productsData.product[i].link,
                    price: productsData.product[i].price,
                    wasprice: productsData.product[i].wasprice,
                    image: productsData.product[i].images.medium,
                    savelabel1: productsData.product[i].pricelabel1,
                    price1: productsData.product[i].price1,
                    savelabel2: productsData.product[i].pricelabel2,
                    price2: productsData.product[i].price2,
                    savinglabel: productsData.product[i].savinglabel,
                    savingvalue: productsData.product[i].savingvalue,
                    title: productsData.product[i].reviews.text
                  });
                }

              }).fail(function (textStatus){
                 // show error
                 console.log(textStatus.statusText);
                 console.log('Failed to load bestSellers XML Document');

         });
    });

  };

/*
 * Item helper.
 *
 * @return n elements
 */
Handlebars.registerHelper('listItem', function (from, to, context, options){
    var item = "";
    for (var i = from, j = to; i < j; i++) {
        item = item + options.fn(context[i]);
    }
    return item;
});

Handlebars.registerHelper ('truncate', function (str, len) {
    if (str.length > len && str.length > 0) {
        var new_str = str + " ";
        new_str = str.substr (0, len);
        new_str = str.substr (0, new_str.lastIndexOf(" "));
        new_str = (new_str.length > 0) ? new_str : str.substr (0, len);

        return new Handlebars.SafeString ( new_str +'...' );
    }
    return str;
});

Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 0; i < n; ++i) {
        block.data.index = i;
        block.data.first = i === 0;
        block.data.last = i === (n - 1);
        accum += block.fn(this);
    }
    return accum;
});

// Init Best SELLERS
  dfs.bestSellers.getbestSellersURL();
  var templateScript = Handlebars.templates.bestSellers(dfs.bestSellers);
  bestSl_Target = dfs.bestSellers.variables[0].target;
  $('#'+ bestSl_Target).append(templateScript);
