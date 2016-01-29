var soap = require('soap');
var _ = require('underscore');

  var url = 'http://www.greenohm.com/appliancerebatews/appliancerebatesmudws.asmx?WSDL';
  var args = {productCategory: 'Clothes Dryer'};
  soap.createClient(url, function(err, client) {
      client.GetSearchCriteriaDetails(args, function(err, result) {
          var result = result.GetSearchCriteriaDetailsResult.SearchCriteriaList.SearchCriteriaDetail;
          _.each(result,function(item){
          	
          	});

      });
  });
