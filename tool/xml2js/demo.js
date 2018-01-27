var parseString = require('xml2js').parseString;
var xml = '<?xml version="1.0" encoding="UTF-8"?><soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"><soapenv:Header><NS1:CSBHeader xmlns:NS1="http://www.shtel.com.cn/csb/v2/"><ServiceName>LTE_SVC80058_BUS80001_M</ServiceName><ServiceVer>1.0</ServiceVer><Consumer>10000号门户</Consumer></NS1:CSBHeader></soapenv:Header><soapenv:Body><ns:MsgRequestResponse xmlns:ns="http://MobileOrderCheck.check.csb.ideal.com"><ns:return xmlns:ax21="http://bean.MobileOrderCheck.check.csb.ideal.com/xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:type="ax21:MsgResponse"><ax21:errCode xsi:nil="true"/><ax21:errDesc xsi:nil="true"/><ax21:faultcode xsi:nil="true"/><ax21:faultstring xsi:nil="true"/><ax21:preCheckresult>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;' +
    '&lt;ContractRoot&gt;&lt;TcpCont&gt;&lt;ActionCode&gt;1&lt;/ActionCode&gt;&lt;TransactionID&gt;6001020001201604223555660627&lt;/TransactionID&gt;&lt;RspTime&gt;20160422002047&lt;/RspTime&gt;&lt;Response&gt;&lt;RspType&gt;0&lt;/RspType&gt;&lt;RspCode&gt;0000&lt;/RspCode&gt;&lt;RspDesc&gt;&lt;![CDATA[流水号【1000000200201604221818490349】流水号【1000000200201604221818490349】成功]]&gt;&lt;/RspDesc&gt;&lt;/Response&gt;&lt;/TcpCont&gt;&lt;/ContractRoot&gt;</ax21:preCheckresult></ns:return></ns:MsgRequestResponse></soapenv:Body></soapenv:Envelope>'


var xmlToJSON = function (xml, cb) {
    parseString(xml, {explicitArray: false, ignoreAttrs: true}, function (err, json) {
        cb(err, json);
    });
};
//性能有些欠缺
console.time("xml")
xmlToJSON(xml, function (err, result) {
    console.dir(JSON.stringify(result));
    var txml = result["soapenv:Envelope"]['soapenv:Body']['ns:MsgRequestResponse']['ns:return']['ax21:preCheckresult'];
    console.dir(txml);

    xmlToJSON(txml, function (err, tjosn) {
        console.log(tjosn.ContractRoot.TcpCont)
        console.timeEnd('xml')
    });
});