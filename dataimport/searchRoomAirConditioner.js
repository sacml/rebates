var soap = require('soap');
  var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
  var args = {productCategory: 'Room Air Conditioner'};
  soap.createClient(url, function(err, client) {
      client.GetSearchCriteriaDetails(args, function(err, result) {
          console.log("%j",result.GetSearchCriteriaDetailsResult.SearchCriteriaList);
      });
  });
