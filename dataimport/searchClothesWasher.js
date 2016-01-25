var soap = require('soap');
  var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
  var args = {productCategory: 'Clothes Washer'};
  soap.createClient(url, function(err, client) {
      client.GetSearchCriteriaDetails(args, function(err, result) {
          console.log("%j",result.GetSearchCriteriaDetailsResult.SearchCriteriaList);
      });
  });
