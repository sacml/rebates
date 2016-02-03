var soap = require('soap');
  var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
  var args = {BrandList: 'Whirlpool'};
  soap.createClient(url, function(err, client) {
      client.GetRefrigeratorSearch(args, function(err, result) {
          console.log(result.GetRefrigeratorSearchResult.ProductList);
      });
  });
